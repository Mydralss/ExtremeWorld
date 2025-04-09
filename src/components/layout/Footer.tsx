
import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Facebook, Instagram, Twitter, Mail, PhoneCall, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Dumbbell className="h-8 w-8 text-gym-blue" />
              <span className="ml-2 text-xl font-bold">ExtremeWorld</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Tu tienda especializada en equipamiento para gimnasio de alta calidad. Ofrecemos las mejores marcas y precios del mercado.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/extreme.world.fitness.colombia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gym-blue">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/extreme_world_fitness/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gym-blue">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-gym-blue">Inicio</Link>
              </li>
              <li>
                <Link to="/productos" className="text-gray-400 hover:text-gym-blue">Productos</Link>
              </li>
              <li>
                <Link to="/categorias" className="text-gray-400 hover:text-gym-blue">Categorías</Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-400 hover:text-gym-blue">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categorías</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/categorias/pesas" className="text-gray-400 hover:text-gym-blue">Pesas y Mancuernas</Link>
              </li>
              <li>
                <Link to="/categorias/maquinas" className="text-gray-400 hover:text-gym-blue">Máquinas de Gimnasio</Link>
              </li>
              <li>
                <Link to="/categorias/accesorios" className="text-gray-400 hover:text-gym-blue">Accesorios</Link>
              </li>
              <li>
                <Link to="/categorias/cardio" className="text-gray-400 hover:text-gym-blue">Equipo de Cardio</Link>
              </li>
              <li>
                <Link to="/categorias/fitness" className="text-gray-400 hover:text-gym-blue">Fitness y Entrenamiento</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-gym-blue shrink-0 mt-0.5" />
                <span className="text-gray-400">Cra. 8 #21-61, San Nicolas, Cali, Valle del Cauca</span>
              </li>
              <li className="flex items-center">
                <PhoneCall className="h-5 w-5 mr-2 text-gym-blue" />
                <span className="text-gray-400">+57 314 726 1853</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gym-blue" />
                <span className="text-gray-400">info@extremeworld.com</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />
        
        <div className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} ExtremeWorld. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
