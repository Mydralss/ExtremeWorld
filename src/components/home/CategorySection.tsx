
import React from 'react';
import { Dumbbell, Activity, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const categories = [
  {
    id: 1,
    name: 'Pesas y Mancuernas',
    icon: <Dumbbell className="h-8 w-8 text-gym-blue mb-2" />,
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=2070&auto=format&fit=crop',
    link: '/categorias/pesas'
  },
  {
    id: 2,
    name: 'Máquinas de Gimnasio',
    icon: <Users className="h-8 w-8 text-gym-blue mb-2" />,
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop',
    link: '/categorias/maquinas'
  },
  {
    id: 3,
    name: 'Equipo de Cardio',
    icon: <Activity className="h-8 w-8 text-gym-blue mb-2" />,
    image: 'https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?q=80&w=2076&auto=format&fit=crop',
    link: '/categorias/cardio'
  },
  {
    id: 4,
    name: 'Accesorios de Fitness',
    icon: <Clock className="h-8 w-8 text-gym-blue mb-2" />,
    image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=2025&auto=format&fit=crop',
    link: '/categorias/accesorios'
  }
];

const CategorySection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className={`py-8 sm:py-16 bg-gray-50`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">Nuestras Categorías</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Explora nuestra amplia gama de equipamiento para gimnasio.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={category.link}
              className="group bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className={`h-28 sm:h-48 overflow-hidden`}>
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-3 sm:p-6">
                <div className="flex items-center">
                  {category.icon}
                  <h3 className="text-sm sm:text-xl font-semibold text-gray-900">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
