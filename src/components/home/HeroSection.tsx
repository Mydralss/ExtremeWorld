
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background with gradient overlay - adjusted positioning to be at the top */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center pt-24 pb-16 md:py-24">
          <div className="lg:w-1/2 mb-8 lg:mb-0 animate-fade-in">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6 text-gray-900">
              Equipa tu gimnasio <br className="hidden md:block" />
              <span className="text-gym-blue">con lo mejor</span>
            </h1>
            <p className="text-base md:text-xl text-gray-700 mb-4 md:mb-8 max-w-lg">
              Descubre nuestra selección de máquinas, pesas y accesorios de alta calidad para crear el gimnasio perfecto.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <Button asChild size="lg" className="bg-gym-blue hover:bg-gym-blue-dark">
                <Link to="/productos">
                  Ver productos
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-gym-blue text-gym-blue hover:bg-gym-blue/10">
                <Link to="/categorias">
                  Explorar categorías
                </Link>
              </Button>
            </div>
          </div>

          {/* We'll leave this empty to let the background image show */}
          <div className="lg:w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
