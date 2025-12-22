export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  category: Category;
  brand: Brand;
  images: string[];
  rating: number;
  freshness: 'New' | 'Extra fresh';
  farm: string;
  deliveryRegion: string;
  stock: number;
  tags: string[];
}

export interface Category {
  id: number;
  name: string;
  productCount: number;
}

export interface Brand {
  id: number;
  name: string;
  isActive: boolean;
}

export interface ProductFilter {
  categories?: number[];
  brands?: number[];
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  search?: string;
}

export interface ProductResponse {
  data: Product[];
  total: number;
  page: number;
  limit: number;
}