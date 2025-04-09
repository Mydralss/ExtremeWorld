
import React from 'react';
import { Shield, Truck, CreditCard, RotateCw } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const benefits = [
  {
    id: 1,
    title: 'Productos de Calidad',
    description: 'Ofrecemos solo equipamiento de alta calidad con garantía.',
    icon: <Shield className="h-10 w-10 text-gym-blue" />
  },
  {
    id: 2,
    title: 'Envío Rápido',
    description: 'Envíos a todo el país en 24-48 horas laborables.',
    icon: <Truck className="h-10 w-10 text-gym-blue" />
  },
  {
    id: 3,
    title: 'Pago Seguro',
    description: 'Múltiples opciones de pago seguro disponibles.',
    icon: <CreditCard className="h-10 w-10 text-gym-blue" />
  },
  {
    id: 4,
    title: 'Devoluciones Fáciles',
    description: '30 días para devoluciones sin preguntas.',
    icon: <RotateCw className="h-10 w-10 text-gym-blue" />
  }
];

const BenefitsSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-6 md:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4 md:mb-8">
          <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-1 md:mb-4">¿Por Qué Elegirnos?</h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
            Nos distinguimos por la calidad de nuestros productos y servicio.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id} 
              className="flex flex-col items-center text-center p-2 md:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-2 rounded-full bg-gym-blue/10 mb-1 md:mb-3">
                {isMobile ? 
                  <div className="scale-75 transform">{benefit.icon}</div> : 
                  benefit.icon
                }
              </div>
              <h3 className="text-sm md:text-xl font-semibold text-gray-900 mb-0 md:mb-2">{benefit.title}</h3>
              {!isMobile ? (
                <p className="text-sm md:text-base text-gray-600">{benefit.description}</p>
              ) : (
                <p className="text-xs text-gray-600 line-clamp-2">{benefit.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
