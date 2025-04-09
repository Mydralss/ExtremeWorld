
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
  SKU?: string; // Añadir SKU para usarlo como identificador
};

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      console.log("Fetching products from Productos table...");
      const { data, error } = await supabase
        .from('Productos')
        .select('*');
      
      if (error) {
        console.error('Error fetching products:', error);
        throw new Error(error.message);
      }
      
      console.log("Products data from Productos table:", data);
      
      // Map database column names to expected format
      const mappedProducts = data.map(product => ({
        id: product.SKU || product.Handle, // Usar SKU como ID principal, con Handle como respaldo
        title: product.Titulo,
        "Body (HTML)": product["Descripcion HTML"],
        "Image Src": product["Imagen URL"],
        "Price / Colombia": product.Precio,
        "Compare At Price / Colombia": null,
        "Product Category": product.Categorias,
        Handle: product.Handle,
        Tags: product.Tipo,
        "Variant Inventory Qty": "10", // Default value
        SKU: product.SKU
      }));
      
      return mappedProducts as Product[];
    },
  });
}

export function useProductByHandle(handle?: string) {
  return useQuery({
    queryKey: ['product', handle],
    queryFn: async () => {
      if (!handle) return null;
      
      console.log("Fetching product with handle:", handle);
      const { data, error } = await supabase
        .from('Productos')
        .select('*')
        .eq('Handle', handle)
        .maybeSingle();
      
      if (error) {
        console.error('Error fetching product:', error);
        throw new Error(error.message);
      }
      
      if (!data) return null;
      
      console.log("Product data:", data);
      
      // Map database column names to expected format
      const mappedProduct = {
        id: data.SKU || data.Handle, // Usar SKU como ID principal, con Handle como respaldo
        title: data.Titulo,
        "Body (HTML)": data["Descripcion HTML"],
        "Image Src": data["Imagen URL"],
        "Price / Colombia": data.Precio,
        "Compare At Price / Colombia": null,
        "Product Category": data.Categorias,
        Handle: data.Handle,
        Tags: data.Tipo,
        "Variant Inventory Qty": "10", // Default value
        SKU: data.SKU
      };
      
      return mappedProduct as Product;
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
      
      console.log("Fetching product images for handle:", handle);
      
      // Since we don't have a separate images table, we use the main image
      const { data, error } = await supabase
        .from('Productos')
        .select('*')
        .eq('Handle', handle);
      
      if (error) {
        console.error('Error fetching product images:', error);
        throw new Error(error.message);
      }
      
      console.log("Product images data:", data);
      
      // Map database column names to expected format
      const mappedImages = data.map(product => ({
        id: product.SKU || product.Handle, // Usar SKU como ID principal, con Handle como respaldo
        "Image Src": product["Imagen URL"],
        Handle: product.Handle,
        SKU: product.SKU
      }));
      
      return mappedImages as Product[];
    },
    enabled: !!handle,
  });
}
