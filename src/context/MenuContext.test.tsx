import { describe, it, expect } from 'vitest';
import { compileDishesToJson, generateSecureDishId, type DishItem } from '@/context/MenuContext';
import initialDishes from '@/data/dishes.json';

describe('compileDishesToJson', () => {
  it('compiles initial dishes into valid server-compatible JSON', () => {
    const jsonStr = compileDishesToJson(initialDishes as unknown as DishItem[]);
    const parsed = JSON.parse(jsonStr);

    expect(Array.isArray(parsed)).toBe(true);
    expect(parsed.length).toBe(initialDishes.length);

    // Verify properties of first dish (Agashi Sandwich)
    const first = parsed[0];
    expect(first.id).toBe(1);
    expect(first.title).toBe('Agashi Sandwich');
    expect(first.title_ar).toBe('سندوتش الأقاشي');
    expect(first.image).toBe('agashi');
    expect(first.category).toBe('main');
    expect(first.sale).toBe(true);
    expect(Array.isArray(first.sizes)).toBe(true);
    expect(first.sizes[0].price).toBe(75);
    expect(first.sizes[0].discountedPrice).toBe(55);
  });

  it('correctly handles perPiece and unavailable flag', () => {
    const mockDish: DishItem = {
      id: 99,
      title: 'Test Dish',
      description: 'Test description',
      category: 'main',
      image: 'maincourse',
      sale: false,
      available: false,
      sizes: [{ label: 'S', price: 100 }],
      perPiece: { price: 25 },
    };

    const jsonStr = compileDishesToJson([mockDish]);
    const parsed = JSON.parse(jsonStr);

    expect(parsed[0].available).toBe(false);
    expect(parsed[0].perPiece.price).toBe(25);
  });

  it('compiles image property matching product ID when an image is uploaded', () => {
    const secureId = 84920194;
    const uploadedDish: DishItem = {
      id: secureId,
      title: 'Special Kabab',
      description: 'Charcoal grilled Sudanese kabab',
      category: 'main',
      image: `${secureId}.png`,
      uploadedDataUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
      sale: false,
      sizes: [{ label: 'M', price: 250 }],
    };

    const jsonStr = compileDishesToJson([uploadedDish]);
    const parsed = JSON.parse(jsonStr);

    expect(parsed[0].id).toBe(secureId);
    expect(parsed[0].image).toBe(`${secureId}.png`);
    // Ensure data URL is not dumped into server JSON
    expect(parsed[0].uploadedDataUrl).toBeUndefined();
  });
});

describe('generateSecureDishId', () => {
  it('generates an 8-digit positive integer and avoids collision with existing IDs', () => {
    const existing = [10000001, 10000002];
    const generated = generateSecureDishId(existing);

    expect(Number.isInteger(generated)).toBe(true);
    expect(generated).toBeGreaterThanOrEqual(10000000);
    expect(generated).toBeLessThanOrEqual(99999999);
    expect(existing.includes(generated)).toBe(false);
  });

  it('generates multiple unique cryptographically secure random IDs', () => {
    const ids = new Set<number>();
    for (let i = 0; i < 50; i++) {
      const id = generateSecureDishId(Array.from(ids));
      expect(ids.has(id)).toBe(false);
      ids.add(id);
    }
    expect(ids.size).toBe(50);
  });
});


