import { api } from '@/lib/index';
import type { Product, ProductFilter, ProductResponse } from '@/types/products';

export const productService = {
  async getProducts(filter: ProductFilter = {}): Promise<ProductResponse> {
    const response = await api.get('/products', {
      params: {
        ...filter,
        page: filter.page || 1,
        limit: filter.limit || 10,
      },
    });
    return response.data;
  },

  async getProductById(id: number): Promise<Product> {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },
};