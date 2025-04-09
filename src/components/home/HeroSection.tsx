
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative overflow-hidden">
      {/* Fondo con overlay de gradiente - ajustado para mejor visualización */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-[80vh] py-16 lg:py-0">
          {/* Contenido principal - Ajustado el espaciado en móvil */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 animate-fade-in mt-16 md:mt-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 text-white">
              Equipa tu gimnasio <br className="hidden md:block" />
              <span className="text-gym-blue-light">con lo mejor</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-md">
              Descubre nuestra selección de máquinas, pesas y accesorios de alta calidad para crear el gimnasio perfecto.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <Button 
                asChild 
                size={isMobile ? "default" : "lg"} 
                className="bg-gym-blue hover:bg-gym-blue-dark transition-all transform hover:scale-105"
              >
                <Link to="/productos">
                  Ver productos
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size={isMobile ? "default" : "lg"} 
                className="border-2 border-white text-white bg-black/30 hover:bg-white/20 transition-all transform hover:scale-105"
              >
                <Link to="/categorias">
                  Explorar categorías
                </Link>
              </Button>
            </div>
          </div>

          {/* Tarjeta informativa - Mejorada la visibilidad del texto */}
          <div className="lg:w-1/2 hidden lg:flex justify-end items-center">
            <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-xl animate-fade-in">
              <h3 className="text-2xl font-bold text-white mb-3">ExtremeWorld</h3>
              <p className="text-white/90 font-medium">Equipamiento profesional para gimnasios desde 2010</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
