import React, { createContext, useContext, useEffect, useState } from 'react';

export interface CartItem {
  id: string; // dishId + sizeLabel (e.g. "5-Pc" or "1-S")
  dishId: number;
  title: string;
  sizeLabel: string; // 'S' | 'M' | 'L' | 'Pc'
  unitPrice: number;
  quantity: number;
  image: string;
}

export type OrderType = 'delivery' | 'takeout';

export interface SupplementaryPreferences {
  cutlery: boolean;
  spiceLevel: 'regular' | 'extra' | 'mild';
  servingStyle?: 'separate' | 'mixed';
}

export interface CustomerDetails {
  name: string;
  phone: string;
  address: string;
  notes: string;
  orderType: OrderType;
  preferences?: SupplementaryPreferences;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (item: Omit<CartItem, 'id'>) => void;
  updateQuantity: (id: string, delta: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  totalCount: number;
  totalPrice: number;
  checkoutWhatsApp: (customer: CustomerDetails) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'mama-kitchen-cart';
const WHATSAPP_PHONE = '201554487523'; // Official Mama Kitchen number from brand flyer: 01554487523

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [items]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const toggleCart = () => setIsOpen((prev) => !prev);

  const addItem = (newItem: Omit<CartItem, 'id'>) => {
    const id = `${newItem.dishId}-${newItem.sizeLabel}`;
    setItems((prev) => {
      const existing = prev.find((i) => i.id === id);
      if (existing) {
        return prev.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity + newItem.quantity } : i
        );
      }
      return [...prev, { ...newItem, id }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);

  const checkoutWhatsApp = (customer: CustomerDetails) => {
    if (items.length === 0) return;

    const lines: string[] = [
      '🍽️ *طلب جديد من Mama Kitchen - مطبخ مامي*',
      '━━━━━━━━━━━━━━━━━━━━',
    ];

    // Order type line
    const orderTypeLabel = customer.orderType === 'takeout' ? '🏃 *استلام من المطعم (Takeout)*' : '🛵 *توصيل للمنزل (Delivery)*';
    lines.push(orderTypeLabel);

    items.forEach((item, index) => {
      const sizeDisplay = item.sizeLabel === 'Pc' ? 'قطعة' : `حجم ${item.sizeLabel}`;
      lines.push(
        `${index + 1}. *${item.title}* (${sizeDisplay})` +
        `\n   • الكمية: ${item.quantity} × ${item.unitPrice} ج.م = *${item.quantity * item.unitPrice} ج.م*`
      );
    });

    lines.push('━━━━━━━━━━━━━━━━━━━━');
    lines.push(`💰 *الإجمالي الكلي:* ${totalPrice} ج.م`);
    lines.push('━━━━━━━━━━━━━━━━━━━━');

    if (customer.name.trim()) {
      lines.push(`👤 *الاسم:* ${customer.name.trim()}`);
    }
    if (customer.phone.trim()) {
      lines.push(`📞 *رقم الهاتف:* ${customer.phone.trim()}`);
    }
    if (customer.address.trim()) {
      lines.push(`📍 *العنوان:* ${customer.address.trim()}`);
    } else if (customer.orderType === 'delivery') {
      lines.push(`📍 *العنوان:* (لم يُدخل — سيتم التواصل لتحديده)`);
    }
    if (customer.preferences) {
      const spiceMap: Record<string, string> = {
        regular: 'شطة عادية',
        extra: 'حارة زيادة 🔥',
        mild: 'بدون شطة (بارد)',
      };
      const servingMap: Record<string, string> = {
        separate: 'الملاح في علب منفصلة',
        mixed: 'مفرود فوق الكسرة / القراصة',
      };

      lines.push('⚙️ *خيارات وتفضيلات إضافية:*');
      lines.push(`   • مستوى الشطة: ${spiceMap[customer.preferences.spiceLevel] || 'عادية'}`);
      if (customer.preferences.servingStyle) {
        lines.push(`   • طريقة التقديم: ${servingMap[customer.preferences.servingStyle]}`);
      }
      lines.push(
        `   • أدوات المائدة: ${customer.preferences.cutlery ? 'نعم (ملاعق ومناديل)' : 'لا داعي (صديق للبيئة 🌱)'}`
      );
    }

    if (customer.notes.trim()) {
      lines.push(`📝 *ملاحظات إضافية:* ${customer.notes.trim()}`);
    }

    lines.push('\nشكراً لكم! أرجو تأكيد الطلب وسعر التوصيل 🙏');

    const message = encodeURIComponent(lines.join('\n'));
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${message}`;

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
        totalCount,
        totalPrice,
        checkoutWhatsApp,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

