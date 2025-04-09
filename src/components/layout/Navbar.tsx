
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, Search, Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efecto para detectar el scroll y cambiar la apariencia del navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-gym-blue shadow-sm' 
          : 'bg-gradient-to-b from-gray-900/80 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <Dumbbell className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold text-white">ExtremeWorld</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-white/80">Inicio</Link>
            <Link to="/productos" className="text-white hover:text-white/80">Productos</Link>
            <Link to="/categorias" className="text-white hover:text-white/80">Categorías</Link>
            <Link to="/contacto" className="text-white hover:text-white/80">Contacto</Link>
          </nav>
          
          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-white text-gym-blue rounded-full text-xs w-5 h-5 flex items-center justify-center">0</span>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gym-blue p-4 border-t border-gym-blue-light">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-white hover:text-white/80 px-2 py-1" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
            <Link to="/productos" className="text-white hover:text-white/80 px-2 py-1" onClick={() => setIsMenuOpen(false)}>Productos</Link>
            <Link to="/categorias" className="text-white hover:text-white/80 px-2 py-1" onClick={() => setIsMenuOpen(false)}>Categorías</Link>
            <Link to="/contacto" className="text-white hover:text-white/80 px-2 py-1" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
            
            <div className="flex items-center space-x-4 pt-2">
              <Button variant="ghost" size="icon" className="text-white">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-white text-gym-blue rounded-full text-xs w-5 h-5 flex items-center justify-center">0</span>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
