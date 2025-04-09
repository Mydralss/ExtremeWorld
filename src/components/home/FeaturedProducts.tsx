
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const products = [
  {
    id: 1,
    name: 'Set de Mancuernas Ajustables',
    price: 1199000,
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=2070&auto=format&fit=crop',
    discountPercent: 15,
  },
  {
    id: 2,
    name: 'Máquina Multifuncional',
    price: 5199000,
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop',
    discountPercent: 0,
  },
  {
    id: 3,
    name: 'Bicicleta Estática Profesional',
    price: 3199000,
    image: 'https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?q=80&w=2076&auto=format&fit=crop',
    discountPercent: 10,
  },
  {
    id: 4,
    name: 'Banco de Pesas Ajustable',
    price: 999000,
    image: 'https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?q=80&w=2127&auto=format&fit=crop',
    discountPercent: 0,
  }
];

const FeaturedProducts = () => {
  const isMobile = useIsMobile();

  const calculateDiscountedPrice = (price: number, discountPercent: number) => {
    if (discountPercent === 0) return price;
    return price - (price * (discountPercent / 100));
  };

  // Formato para pesos colombianos
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="py-8 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Productos Destacados</h2>
          <Button variant="link" className="text-gym-blue font-medium text-sm sm:text-base">
            Ver todos los productos →
          </Button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {products.map((product) => (
            <div key={product.id} className="group bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-36 sm:h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.discountPercent > 0 && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs sm:text-sm font-bold rounded-full px-2 sm:px-3 py-1">
                    -{product.discountPercent}%
                  </div>
                )}
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex flex-col">
                    {product.discountPercent > 0 ? (
                      <>
                        <span className="text-gray-400 line-through text-xs sm:text-sm">{formatPrice(product.price)}</span>
                        <span className="text-base sm:text-xl font-bold text-gym-blue">{formatPrice(calculateDiscountedPrice(product.price, product.discountPercent))}</span>
                      </>
                    ) : (
                      <span className="text-base sm:text-xl font-bold text-gym-blue">{formatPrice(product.price)}</span>
                    )}
                  </div>
                  <Button variant="outline" size="icon" className="rounded-full border-gym-blue text-gym-blue hover:bg-gym-blue/10 h-8 w-8 sm:h-10 sm:w-10">
                    <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
