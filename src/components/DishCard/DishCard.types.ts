export type SizeLabel = 'S' | 'M' | 'L';

export interface DishSize {
  label: SizeLabel;
  price: number;
  /** If present and `sale` is true, this is the discounted price */
  discountedPrice?: number;
}

export interface PerPieceOption {
  /** Price per single piece */
  price: number;
  /** If present and `sale` is true, this is the discounted price per piece */
  discountedPrice?: number;
}

export interface DishCardProps {
  id?: number;
  title: string;
  title_ar?: string;
  description: string;
  description_ar?: string;
  /** Resolved image URL or imported asset */
  image: string;
  /** Base64 data URL if uploaded directly in dashboard */
  uploadedDataUrl?: string;
  sale: boolean;
  sizes: DishSize[];
  /** If present, the dish can be ordered individually by the piece */
  perPiece?: PerPieceOption;
  category?: string;
  /** When false, dish is marked unavailable/sold out and visually greyed out with an overlay. Defaults to true. */
  available?: boolean;
}
