
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { useProducts } from '@/hooks/use-products';

const FeaturedProducts = () => {
  const isMobile = useIsMobile();
  const { data: products, isLoading, error } = useProducts();

  // Formato para pesos colombianos
  const formatPrice = (price: string | number | undefined) => {
    if (!price) return 'Precio no disponible';
    
    // Convertir a número si es string
    const numericPrice = typeof price === 'string' ? 
      parseFloat(price.replace(/[^\d.-]/g, '')) : 
      price;
    
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(numericPrice);
  };

  // Tomar solo los primeros 4 productos para mostrar como destacados
  const featuredProducts = products?.slice(0, 4);
  
  console.log("Featured products:", featuredProducts);

  return (
    <section className="py-8 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Productos Destacados</h2>
          <Link to="/productos">
            <Button variant="link" className="text-gym-blue font-medium text-sm sm:text-base">
              Ver todos los productos →
            </Button>
          </Link>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="animate-pulse bg-gray-200 rounded-lg h-64"></div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-red-500">Error cargando productos destacados</p>
          </div>
        ) : featuredProducts && featuredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id || product.SKU || product.Handle} className="group bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <Link to={`/productos/${product.Handle}`}>
                  <div className="relative h-36 sm:h-64 overflow-hidden">
                    <img 
                      src={product["Image Src"]} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=2070&auto=format&fit=crop';
                      }}
                    />
                  </div>
                </Link>
                <div className="p-3 sm:p-4">
                  <Link to={`/productos/${product.Handle}`}>
                    <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{product.title}</h3>
                  </Link>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex flex-col">
                      <span className="text-base sm:text-xl font-bold text-gym-blue">{formatPrice(product["Price / Colombia"])}</span>
                    </div>
                    <Button variant="outline" size="icon" className="rounded-full border-gym-blue text-gym-blue hover:bg-gym-blue/10 h-8 w-8 sm:h-10 sm:w-10">
                      <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">No hay productos destacados disponibles</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
