import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <div className="bg-gradient-to-r from-purple-600 to-copper-600 p-2 rounded-lg mr-3">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold">MotionA</span>
              <span className="text-sm text-blue-200 block">Gym Management System</span>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-blue-200 hover:text-white transition-colors">Inicio</Link>
            <Link to="/#features" className="text-blue-200 hover:text-white transition-colors">Características</Link>
            <Link to="/#testimonials" className="text-blue-200 hover:text-white transition-colors">Testimonios</Link>
            <Link to="/#pricing" className="text-blue-200 hover:text-white transition-colors">Precios</Link>
            <Link to="/#contact" className="text-blue-200 hover:text-white transition-colors">Contacto</Link>
            <Link to="/demo" className="text-blue-200 hover:text-white transition-colors">Demo</Link>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-700">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-blue-200 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
              <Link to="/#features" className="text-blue-200 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Características</Link>
              <Link to="/#testimonials" className="text-blue-200 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Testimonios</Link>
              <Link to="/#pricing" className="text-blue-200 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Precios</Link>
              <Link to="/#contact" className="text-blue-200 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
              <Link to="/demo" className="text-blue-200 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Demo</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;