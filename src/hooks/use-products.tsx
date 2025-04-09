
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export type Product = {
  id?: string;
  title?: string;
  "Body (HTML)"?: string;
  "Image Src"?: string;
  "Price / Colombia"?: string;
  "Compare At Price / Colombia"?: string;
  "Product Category"?: string;
  Handle?: string;
  Tags?: string;
  "Variant Inventory Qty"?: string;
};

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('Productos')
        .select('*')
        .order('Title', { ascending: true });
      
      if (error) {
        console.error('Error fetching products:', error);
        throw new Error(error.message);
      }
      
      return data as Product[];
    },
  });
}

export function useProductByHandle(handle?: string) {
  return useQuery({
    queryKey: ['product', handle],
    queryFn: async () => {
      if (!handle) return null;
      
      const { data, error } = await supabase
        .from('Productos')
        .select('*')
        .eq('Handle', handle)
        .maybeSingle();
      
      if (error) {
        console.error('Error fetching product:', error);
        throw new Error(error.message);
      }
      
      return data as Product;
    },
    enabled: !!handle,
  });
}

// Function to get product images from a handle
export function useProductImages(handle?: string) {
  return useQuery({
    queryKey: ['product-images', handle],
    queryFn: async () => {
      if (!handle) return [];
      
      const { data, error } = await supabase
        .from('Productos')
        .select('*')
        .eq('Handle', handle)
        .order('Image Position', { ascending: true });
      
      if (error) {
        console.error('Error fetching product images:', error);
        throw new Error(error.message);
      }
      
      return data.filter(item => item["Image Src"]) as Product[];
    },
    enabled: !!handle,
  });
}
