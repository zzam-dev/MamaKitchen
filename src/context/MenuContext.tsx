import React, { createContext, useContext, useEffect, useState } from 'react';
import { API_ENDPOINTS, type ApiEndpoints } from '@/api/endpoints';
import initialDishes from '@/data/dishes.json';
import type { DishCardProps } from '@/components/DishCard';

export interface DishItem extends DishCardProps {
  id: number;
  category: string;
  storagePath?: string | null;
}

export function generateSecureDishId(existingIds: number[] = []): number {
  const existingSet = new Set(existingIds);
  const buffer = new Uint32Array(1);
  let id = 0;
  do {
    if (typeof window !== 'undefined' && window.crypto?.getRandomValues) {
      window.crypto.getRandomValues(buffer);
      id = 10000000 + (buffer[0] % 90000000);
    } else {
      id = Math.floor(10000000 + Math.random() * 90000000);
    }
  } while (existingSet.has(id));
  return id;
}

export function compileDishesToJson(dishes: DishItem[]): string {
  const cleanList = dishes.map((dish) => {
    const item: Record<string, any> = {
      id: dish.id,
      title: dish.title.trim(),
    };
    if (dish.title_ar && dish.title_ar.trim()) {
      item.title_ar = dish.title_ar.trim();
    }
    item.description = (dish.description || '').trim();
    if (dish.description_ar && dish.description_ar.trim()) {
      item.description_ar = dish.description_ar.trim();
    }
    item.image = dish.image || 'maincourse';
    item.category = dish.category || 'main';
    item.sale = Boolean(dish.sale);
    if (dish.available === false) {
      item.available = false;
    }
    item.sizes = (dish.sizes || []).map((s) => {
      const sizeObj: Record<string, any> = {
        label: s.label,
        price: Number(s.price),
      };
      if (dish.sale && s.discountedPrice != null && Number(s.discountedPrice) > 0) {
        sizeObj.discountedPrice = Number(s.discountedPrice);
      }
      return sizeObj;
    });
    if (dish.perPiece && Number(dish.perPiece.price) > 0) {
      const pieceObj: Record<string, any> = {
        price: Number(dish.perPiece.price),
      };
      if (dish.sale && dish.perPiece.discountedPrice != null && Number(dish.perPiece.discountedPrice) > 0) {
        pieceObj.discountedPrice = Number(dish.perPiece.discountedPrice);
      }
      item.perPiece = pieceObj;
    }
    return item;
  });
  return JSON.stringify(cleanList, null, 2);
}

interface MenuContextType {
  dishes: DishItem[];
  loading: boolean;
  endpoints: ApiEndpoints;
  toggleAvailability: (id: number) => void;
  toggleSale: (id: number) => void;
  updateDish: (id: number, updated: Partial<DishItem>) => void;
  addDish: (newDish: Omit<DishItem, 'id'> & { id?: number }) => number;
  deleteDish: (id: number) => void;
  duplicateDish: (id: number) => number;
  generateSecureId: () => number;
  resetMenu: () => void;
  compileServerJson: () => string;
  uploadImage: (id: number, file: File) => Promise<void>;
  deleteImage: (id: number) => Promise<void>;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

// Old browser cache of the menu. No longer used: Supabase is the source of truth.
// Kept only so we can clear stale copies left in visitors' browsers.
const LEGACY_MENU_STORAGE_KEY = 'mama-kitchen-menu-state-v1';

export function MenuProvider({ children }: { children: React.ReactNode }) {
  // Supabase is the only source of truth: start empty and fill from the API.
  const [dishes, setDishes] = useState<DishItem[]>([]);
  const [loading, setLoading] = useState(true);

  // One-time cleanup of the old localStorage menu cache.
  useEffect(() => {
    try {
      localStorage.removeItem(LEGACY_MENU_STORAGE_KEY);
    } catch {
      // storage unavailable (private mode, etc.) - nothing to clean
    }
  }, []);

  // Load the live menu from Supabase via /api/menu.
  useEffect(() => {
    let cancelled = false;
    fetch(API_ENDPOINTS.PUBLIC_MENU)
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { dishes?: DishItem[] } | null) => {
        // An empty array is valid: an empty table means an empty menu.
        if (!cancelled && data?.dishes && Array.isArray(data.dishes)) {
          setDishes(data.dishes);
        }
      })
      .catch((err) => console.error('Failed to load menu:', err))
      .finally(() => {
        if (!cancelled) {setLoading(false);}
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const syncRequest = (method: 'POST' | 'PATCH' | 'DELETE', body?: unknown, query = '') => {
    fetch(`${API_ENDPOINTS.PUBLIC_MENU}${query}`, {
      method,
      headers: body ? { 'Content-Type': 'application/json' } : undefined,
      body: body ? JSON.stringify(body) : undefined,
      credentials: 'same-origin',
    }).catch((err) => console.error('Failed to sync menu change:', err));
  };

  const toggleAvailability = (id: number) => {
    const target = dishes.find((d) => d.id === id);
    const nextAvailable = target?.available === false;
    setDishes((prev) =>
      prev.map((dish) => (dish.id === id ? { ...dish, available: nextAvailable } : dish))
    );
    syncRequest('PATCH', { id, updated: { available: nextAvailable } });
  };

  const toggleSale = (id: number) => {
    const target = dishes.find((d) => d.id === id);
    const nextSale = !target?.sale;
    setDishes((prev) =>
      prev.map((dish) => (dish.id === id ? { ...dish, sale: nextSale } : dish))
    );
    syncRequest('PATCH', { id, updated: { sale: nextSale } });
  };

  const updateDish = (id: number, updated: Partial<DishItem>) => {
    setDishes((prev) =>
      prev.map((dish) => (dish.id === id ? { ...dish, ...updated } : dish))
    );
    syncRequest('PATCH', { id, updated });
  };

  const uploadImage = async (id: number, file: File): Promise<void> => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('productId', String(id));
      const response = await fetch('/api/admin/image', {
        method: 'POST',
        body: formData,
        credentials: 'same-origin',
      });
      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || `Upload failed (${response.status})`);
      }
      const { publicUrl, storagePath } = (await response.json()) as {
        publicUrl: string;
        storagePath: string;
      };
      setDishes((prev) =>
        prev.map((dish) =>
          dish.id === id
            ? {
                ...dish,
                image: storagePath,
                uploadedDataUrl: publicUrl,
                storagePath,
              }
            : dish
        )
      );
      // storagePath is saved too, so the image can still be deleted after a page reload
      syncRequest('PATCH', {
        id,
        updated: { image: storagePath, uploadedDataUrl: publicUrl, storagePath },
      });
    } catch (err) {
      console.error('Failed to upload image:', err);
    }
  };

  const deleteImage = async (id: number): Promise<void> => {
    try {
      const dish = dishes.find((d) => d.id === id);
      if (!dish?.storagePath) {return;}
      await fetch(`/api/admin/image?path=${encodeURIComponent(dish.storagePath)}`, {
        method: 'DELETE',
        credentials: 'same-origin',
      });
      setDishes((prev) =>
        prev.map((d) =>
          d.id === id
            ? { ...d, uploadedDataUrl: undefined, image: 'maincourse', storagePath: null }
            : d
        )
      );
      // null (not undefined) so the fields are actually cleared in the database;
      // undefined would be dropped by JSON.stringify and the old values would stay.
      syncRequest('PATCH', {
        id,
        updated: { image: 'maincourse', uploadedDataUrl: null, storagePath: null },
      });
    } catch (err) {
      console.error('Failed to delete image:', err);
    }
  };

  const addDish = (newDish: Omit<DishItem, 'id'> & { id?: number }): number => {
    const id = newDish.id ?? generateSecureDishId(dishes.map((d) => d.id));
    const dishWithId: DishItem = {
      ...newDish,
      id,
    };
    setDishes((prev) => [dishWithId, ...prev]);
    syncRequest('POST', { dish: dishWithId });
    return id;
  };

  const deleteDish = (id: number) => {
    setDishes((prev) => prev.filter((d) => d.id !== id));
    syncRequest('DELETE', undefined, `?id=${id}`);
  };

  const duplicateDish = (id: number): number => {
    const target = dishes.find((d) => d.id === id);
    if (!target) {return -1;}
    const nextId = generateSecureDishId(dishes.map((d) => d.id));
    let newImage = target.image;
    if (target.image && (target.image.startsWith(`${target.id}.`) || target.image === String(target.id))) {
      const ext = target.image.includes('.') ? target.image.split('.').pop() : 'jpg';
      newImage = `${nextId}.${ext}`;
    }
    const cloned: DishItem = {
      ...target,
      id: nextId,
      image: newImage,
      title: `${target.title} (Copy)`,
      title_ar: target.title_ar ? `${target.title_ar} (نسخة)` : undefined,
    };
    setDishes((prev) => [cloned, ...prev]);
    syncRequest('POST', { dish: cloned });
    return nextId;
  };

  const generateSecureId = () => generateSecureDishId(dishes.map((d) => d.id));

  const resetMenu = () => {
    setDishes(initialDishes as unknown as DishItem[]);
    syncRequest('DELETE', undefined, '?reset=true');
  };

  const compileServerJson = () => compileDishesToJson(dishes);

  return (
    <MenuContext.Provider
      value={{
        dishes,
        loading,
        endpoints: API_ENDPOINTS,
        toggleAvailability,
        toggleSale,
        updateDish,
        addDish,
        deleteDish,
        duplicateDish,
        generateSecureId,
        resetMenu,
        compileServerJson,
        uploadImage,
        deleteImage,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
}
