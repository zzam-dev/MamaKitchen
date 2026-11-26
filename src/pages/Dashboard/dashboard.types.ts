import type { SizeLabel } from '@/components/DishCard';

export interface SizeConfig {
  enabled: boolean;
  price: number;
  discountedPrice?: number;
}

export interface DishFormData {
  id?: number;
  title: string;
  title_ar: string;
  description: string;
  description_ar: string;
  category: string;
  image: string;
  uploadedDataUrl?: string;
  imageExtension?: string;
  sale: boolean;
  available: boolean;
  sizes: {
    S?: SizeConfig;
    M?: SizeConfig;
    L?: SizeConfig;
  };
  hasPerPiece: boolean;
  perPiecePrice: number;
  perPieceDiscounted?: number;
}

export const DEFAULT_FORM: DishFormData = {
  title: '',
  title_ar: '',
  description: '',
  description_ar: '',
  category: 'main',
  image: 'maincourse',
  sale: false,
  available: true,
  sizes: {
    S: { enabled: true, price: 150 },
    M: { enabled: false, price: 200 },
    L: { enabled: false, price: 280 },
  },
  hasPerPiece: false,
  perPiecePrice: 35,
};

