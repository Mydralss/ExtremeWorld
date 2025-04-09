
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  ChevronLeft, 
  Truck, 
  Clock, 
  CreditCard,
  ArrowLeft
} from 'lucide-react';
import { useProductByHandle, useProductImages } from '@/hooks/use-products';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const { data: product, isLoading: productLoading } = useProductByHandle(handle);
  const { data: productImages, isLoading: imagesLoading } = useProductImages(handle);
  const isMobile = useIsMobile();
  const [quantity, setQuantity] = useState(1);

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

  const isOutOfStock = () => {
    return product?.["Variant Inventory Qty"] === "0" || !product?.["Variant Inventory Qty"];
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link to="/productos" className="text-gym-blue flex items-center hover:underline">
              <ArrowLeft size={16} className="mr-1" /> Volver a productos
            </Link>
          </div>

          {productLoading ? (
            <div className="animate-pulse">
              <div className="h-64 bg-gray-200 rounded-lg mb-4"></div>
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="h-24 bg-gray-200 rounded mb-4"></div>
            </div>
          ) : !product ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Producto no encontrado</h2>
              <p className="text-gray-600 mb-6">Lo sentimos, el producto que estás buscando no existe.</p>
              <Link to="/productos">
                <Button>Ver todos los productos</Button>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row gap-8">
              {/* Product Images */}
              <div className="md:w-1/2 bg-white rounded-lg overflow-hidden">
                {imagesLoading ? (
                  <div className="h-96 bg-gray-200 animate-pulse"></div>
                ) : productImages && productImages.length > 1 ? (
                  <Carousel className="w-full max-w-lg mx-auto">
                    <CarouselContent>
                      {productImages.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="p-1">
                            <div className="overflow-hidden rounded-lg">
                              <img 
                                src={image["Image Src"]} 
                                alt={product.title || 'Imagen de producto'} 
                                className="w-full h-[400px] object-cover"
                              />
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className={isMobile ? "-left-3" : "-left-12"} />
                    <CarouselNext className={isMobile ? "-right-3" : "-right-12"} />
                  </Carousel>
                ) : (
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src={product["Image Src"] || 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=2070&auto=format&fit=crop'} 
                      alt={product.title || 'Imagen de producto'} 
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                )}
              </div>
              
              {/* Product Info */}
              <div className="md:w-1/2">
                <div className="mb-2">
                  {product["Product Category"] && (
                    <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full mb-2">
                      {product["Product Category"]}
                    </span>
                  )}
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
                  
                  {/* Price */}
                  <div className="mb-4">
                    {product["Compare At Price / Colombia"] && calculateDiscount(product["Price / Colombia"], product["Compare At Price / Colombia"]) > 0 ? (
                      <div className="flex items-center gap-3">
                        <span className="text-2xl sm:text-3xl font-bold text-gym-blue">
                          {formatPrice(product["Price / Colombia"])}
                        </span>
                        <span className="text-lg text-gray-500 line-through">
                          {formatPrice(product["Compare At Price / Colombia"])}
                        </span>
                        <span className="bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-full">
                          -{calculateDiscount(product["Price / Colombia"], product["Compare At Price / Colombia"])}%
                        </span>
                      </div>
                    ) : (
                      <span className="text-2xl sm:text-3xl font-bold text-gym-blue">
                        {formatPrice(product["Price / Colombia"])}
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Stock Status */}
                <div className="mb-6">
                  {isOutOfStock() ? (
                    <div className="text-red-500 font-medium">Agotado</div>
                  ) : (
                    <div className="text-green-600 font-medium">En Stock</div>
                  )}
                </div>
                
                {/* Description */}
                <div className="mb-8">
                  <div dangerouslySetInnerHTML={{ __html: product["Body (HTML)"] || 'Sin descripción disponible' }} 
                       className="prose prose-sm max-w-none text-gray-700" />
                </div>
                
                {/* Add to Cart Section */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center border rounded-md">
                      <button 
                        className="px-3 py-2 border-r"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        disabled={isOutOfStock()}
                      >
                        -
                      </button>
                      <span className="px-3 py-2 min-w-[40px] text-center">{quantity}</span>
                      <button 
                        className="px-3 py-2 border-l"
                        onClick={() => setQuantity(quantity + 1)}
                        disabled={isOutOfStock()}
                      >
                        +
                      </button>
                    </div>
                    <Button 
                      className="flex-grow flex items-center justify-center gap-2" 
                      disabled={isOutOfStock()}
                    >
                      <ShoppingCart size={18} /> Añadir al carrito
                    </Button>
                  </div>
                </div>
                
                {/* Benefits */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <Truck className="w-5 h-5 text-gym-blue mt-0.5" />
                      <div>
                        <h4 className="font-medium text-sm">Envío Gratis</h4>
                        <p className="text-xs text-gray-600">En pedidos superiores a $500.000</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="w-5 h-5 text-gym-blue mt-0.5" />
                      <div>
                        <h4 className="font-medium text-sm">Entrega rápida</h4>
                        <p className="text-xs text-gray-600">Entre 3-5 días hábiles</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CreditCard className="w-5 h-5 text-gym-blue mt-0.5" />
                      <div>
                        <h4 className="font-medium text-sm">Pago seguro</h4>
                        <p className="text-xs text-gray-600">Múltiples métodos de pago</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Specifications */}
                {(product["Option1 Name"] || product["Option2 Name"] || product["Option3 Name"]) && (
                  <div className="border rounded-lg overflow-hidden mb-6">
                    <Table>
                      <TableBody>
                        {product["Option1 Name"] && product["Option1 Value"] && (
                          <TableRow>
                            <TableCell className="font-medium w-1/3">{product["Option1 Name"]}</TableCell>
                            <TableCell>{product["Option1 Value"]}</TableCell>
                          </TableRow>
                        )}
                        {product["Option2 Name"] && product["Option2 Value"] && (
                          <TableRow>
                            <TableCell className="font-medium">{product["Option2 Name"]}</TableCell>
                            <TableCell>{product["Option2 Value"]}</TableCell>
                          </TableRow>
                        )}
                        {product["Option3 Name"] && product["Option3 Value"] && (
                          <TableRow>
                            <TableCell className="font-medium">{product["Option3 Name"]}</TableCell>
                            <TableCell>{product["Option3 Value"]}</TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
