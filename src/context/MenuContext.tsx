import React, { createContext, useContext, useEffect, useState } from 'react';
import { API_ENDPOINTS, type ApiEndpoints } from '@/api/endpoints';
import initialDishes from '@/data/dishes.json';
import type { DishCardProps, DishSize, SizeLabel } from '@/components/DishCard';

export interface DishItem extends DishCardProps {
  id: number;
  category: string;
}

/**
 * Generates a cryptographically secure random positive integer for product IDs.
 * Uses window.crypto.getRandomValues (Web Crypto API) ensuring unguessable, collision-free IDs.
 */
export function generateSecureDishId(existingIds: number[] = []): number {
  const existingSet = new Set(existingIds);
  const buffer = new Uint32Array(1);
  let id = 0;
  do {
    if (typeof window !== 'undefined' && window.crypto?.getRandomValues) {
      window.crypto.getRandomValues(buffer);
      // Generate 8-digit secure integer [10_000_000 - 99_999_999]
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
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

const MENU_STORAGE_KEY = 'mama-kitchen-menu-state-v1';

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [dishes, setDishes] = useState<DishItem[]>(() => {
    try {
      const saved = localStorage.getItem(MENU_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load menu overrides', e);
    }
    return initialDishes as unknown as DishItem[];
  });

  useEffect(() => {
    try {
      localStorage.setItem(MENU_STORAGE_KEY, JSON.stringify(dishes));
    } catch (e) {
      console.error('Failed to save menu state', e);
    }
  }, [dishes]);

  const toggleAvailability = (id: number) => {
    setDishes((prev) =>
      prev.map((dish) =>
        dish.id === id ? { ...dish, available: dish.available === false ? true : false } : dish
      )
    );
  };

  const toggleSale = (id: number) => {
    setDishes((prev) =>
      prev.map((dish) => (dish.id === id ? { ...dish, sale: !dish.sale } : dish))
    );
  };

  const updateDish = (id: number, updated: Partial<DishItem>) => {
    setDishes((prev) =>
      prev.map((dish) => (dish.id === id ? { ...dish, ...updated } : dish))
    );
  };

  const addDish = (newDish: Omit<DishItem, 'id'> & { id?: number }): number => {
    const id = newDish.id ?? generateSecureDishId(dishes.map((d) => d.id));
    const dishWithId: DishItem = {
      ...newDish,
      id,
    };
    setDishes((prev) => [dishWithId, ...prev]);
    return id;
  };

  const deleteDish = (id: number) => {
    setDishes((prev) => prev.filter((d) => d.id !== id));
  };

  const duplicateDish = (id: number): number => {
    const target = dishes.find((d) => d.id === id);
    if (!target) return -1;
    const nextId = generateSecureDishId(dishes.map((d) => d.id));

    // If target image is named after product ID, update the cloned image name to the new product ID
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
    return nextId;
  };

  const generateSecureId = () => generateSecureDishId(dishes.map((d) => d.id));

  const resetMenu = () => {
    setDishes(initialDishes as unknown as DishItem[]);
    localStorage.removeItem(MENU_STORAGE_KEY);
  };

  const compileServerJson = () => compileDishesToJson(dishes);

  return (
    <MenuContext.Provider
      value={{
        dishes,
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

