
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Filter, SlidersHorizontal } from 'lucide-react';
import { useProducts } from '@/hooks/use-products';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Card, 
  CardContent, 
  CardFooter 
} from '@/components/ui/card';

const ProductsPage = () => {
  const { data: products, isLoading, error } = useProducts();
  const isMobile = useIsMobile();
  const [priceRange, setPriceRange] = useState([0, 5000000]);
  const [showFilters, setShowFilters] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Todos');

  const categories = ['Todos', 'Cardio', 'Fuerza', 'Funcional', 'Accesorios'];

  const formatPrice = (price: string | undefined) => {
    if (!price) return 'Precio no disponible';
    
    const numericPrice = parseFloat(price.replace(/[^\d.-]/g, ''));
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(numericPrice);
  };

  const calculateDiscount = (price?: string, comparePrice?: string) => {
    if (!price || !comparePrice) return 0;
    
    const numericPrice = parseFloat(price.replace(/[^\d.-]/g, ''));
    const numericComparePrice = parseFloat(comparePrice.replace(/[^\d.-]/g, ''));
    
    if (numericComparePrice <= numericPrice) return 0;
    
    return Math.round(((numericComparePrice - numericPrice) / numericComparePrice) * 100);
  };

  const filteredProducts = products?.filter((product) => {
    // Basic null check
    if (!product) return false;
    
    // Filter by category
    if (activeCategory !== 'Todos' && product["Product Category"] !== activeCategory) {
      return false;
    }
    
    // Filter by price range
    const price = product["Price / Colombia"];
    if (price) {
      const numericPrice = parseFloat(price.replace(/[^\d.-]/g, ''));
      if (numericPrice < priceRange[0] || numericPrice > priceRange[1]) {
        return false;
      }
    }
    
    return true;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Banner */}
        <div className="bg-gym-blue text-white py-12 px-4">
          <div className="container mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Productos de Gimnasio</h1>
            <p className="text-lg md:text-xl opacity-90">
              Equipa tu espacio con la mejor tecnología deportiva
            </p>
          </div>
        </div>
        
        {/* Filter Button (Mobile) */}
        {isMobile && (
          <div className="container mx-auto px-4 my-4">
            <Button 
              onClick={() => setShowFilters(!showFilters)}
              variant="outline" 
              className="w-full flex items-center justify-center gap-2 border-gym-blue text-gym-blue"
            >
              <SlidersHorizontal size={18} /> Filtros
            </Button>
          </div>
        )}
        
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters - Desktop (always visible) or Mobile (toggleable) */}
            {(!isMobile || showFilters) && (
              <div className="md:w-1/4 bg-white p-4 rounded-lg shadow-sm border">
                <div className="mb-6">
                  <h3 className="font-medium text-lg mb-3">Categorías</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`block w-full text-left px-3 py-2 rounded ${
                          activeCategory === category 
                            ? 'bg-gym-blue text-white' 
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium text-lg mb-3">Precio</h3>
                  <div className="px-2">
                    <Slider
                      defaultValue={[0, 5000000]}
                      max={5000000}
                      step={100000}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="my-6"
                    />
                    <div className="flex justify-between text-sm">
                      <span>{new Intl.NumberFormat('es-CO', {
                        style: 'currency',
                        currency: 'COP',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }).format(priceRange[0])}</span>
                      <span>{new Intl.NumberFormat('es-CO', {
                        style: 'currency',
                        currency: 'COP',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }).format(priceRange[1])}</span>
                    </div>
                  </div>
                </div>
                
                {isMobile && (
                  <Button 
                    onClick={() => setShowFilters(false)}
                    className="w-full mt-4"
                  >
                    Aplicar Filtros
                  </Button>
                )}
              </div>
            )}
            
            {/* Products Grid */}
            <div className="md:w-3/4">
              {isLoading ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Array(6).fill(0).map((_, i) => (
                    <Card key={i} className="h-72 animate-pulse">
                      <div className="h-40 bg-gray-200 rounded-t-lg"></div>
                      <CardContent className="p-4">
                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : error ? (
                <div className="text-center py-10">
                  <p className="text-red-500">Error cargando productos. Por favor intente nuevamente.</p>
                </div>
              ) : filteredProducts?.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-gray-500">No se encontraron productos con los filtros seleccionados.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
                  {filteredProducts?.map((product, index) => (
                    <Card key={index} className="group overflow-hidden h-full flex flex-col">
                      <div className="relative h-40 sm:h-48 overflow-hidden">
                        <Link to={`/productos/${product.Handle}`}>
                          <img 
                            src={product["Image Src"] || 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=2070&auto=format&fit=crop'}
                            alt={product.title || 'Producto de gimnasio'}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          {calculateDiscount(product["Price / Colombia"], product["Compare At Price / Colombia"]) > 0 && (
                            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs sm:text-sm font-bold rounded-full px-2 sm:px-3 py-1">
                              -{calculateDiscount(product["Price / Colombia"], product["Compare At Price / Colombia"])}%
                            </div>
                          )}
                          {(product["Variant Inventory Qty"] === "0" || !product["Variant Inventory Qty"]) && (
                            <div className="absolute bottom-2 left-2 bg-gray-800 text-white text-xs sm:text-sm rounded-md px-2 py-1 opacity-90">
                              Agotado
                            </div>
                          )}
                        </Link>
                      </div>
                      <CardContent className="flex-grow p-3 sm:p-4">
                        <Link to={`/productos/${product.Handle}`}>
                          <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 line-clamp-2 hover:text-gym-blue transition-colors">
                            {product.title || 'Producto sin nombre'}
                          </h3>
                        </Link>
                        <div className="text-xs text-gray-500 mb-2">Categoría: {product["Product Category"] || 'General'}</div>
                      </CardContent>
                      <CardFooter className="pt-0 p-3 sm:p-4 border-t">
                        <div className="flex justify-between items-center w-full">
                          <div className="flex flex-col">
                            {product["Compare At Price / Colombia"] && calculateDiscount(product["Price / Colombia"], product["Compare At Price / Colombia"]) > 0 ? (
                              <>
                                <span className="text-gray-400 line-through text-xs sm:text-sm">
                                  {formatPrice(product["Compare At Price / Colombia"])}
                                </span>
                                <span className="text-base sm:text-lg font-bold text-gym-blue">
                                  {formatPrice(product["Price / Colombia"])}
                                </span>
                              </>
                            ) : (
                              <span className="text-base sm:text-lg font-bold text-gym-blue">
                                {formatPrice(product["Price / Colombia"])}
                              </span>
                            )}
                          </div>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="rounded-full border-gym-blue text-gym-blue hover:bg-gym-blue/10 h-8 w-8 sm:h-9 sm:w-9"
                            disabled={product["Variant Inventory Qty"] === "0" || !product["Variant Inventory Qty"]}
                          >
                            <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
