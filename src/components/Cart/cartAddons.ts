import { dishImages } from '@/assets/images';

export interface SupplementaryAddon {
  id: string;
  dishId: number;
  titleEn: string;
  titleAr: string;
  price: number;
  image: string;
}

export const SUPPLEMENTARY_ADDONS: SupplementaryAddon[] = [
  {
    id: 'supp-kisra',
    dishId: 9001,
    titleEn: 'Sudanese Kisra (4 sheets)',
    titleAr: 'كسرة سودانية طازجة (4 طرقات)',
    price: 25,
    image: dishImages.maincourse,
  },
  {
    id: 'supp-qarasa',
    dishId: 9002,
    titleEn: 'Sudanese Qarasa (2 pcs)',
    titleAr: 'قراصة سودانية بلدي (حبتين)',
    price: 25,
    image: dishImages.maincourse,
  },
  {
    id: 'supp-rice',
    dishId: 9003,
    titleEn: 'Vermicelli Rice (Portion)',
    titleAr: 'أرز بالشعرية (طبق)',
    price: 35,
    image: dishImages.maincourse,
  },
  {
    id: 'supp-shatta',
    dishId: 9004,
    titleEn: 'Shatta with Dakwa & Lemon',
    titleAr: 'شطة بالدكوة والليمون (علبة)',
    price: 15,
    image: dishImages.agashi,
  },
  {
    id: 'supp-powder',
    dishId: 9005,
    titleEn: 'Agashi Spices Powder',
    titleAr: 'بودرة بهارات أقاشي إضافية',
    price: 20,
    image: dishImages.agashi,
  },
  {
    id: 'supp-torshi',
    dishId: 9006,
    titleEn: 'Sudanese Mixed Torshi',
    titleAr: 'طرشي ومخلل سوداني',
    price: 15,
    image: dishImages.maincourse,
  },
];

