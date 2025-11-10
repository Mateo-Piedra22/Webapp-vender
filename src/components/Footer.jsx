import React from 'react';
import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-purple-600 to-copper-600 p-2 rounded-lg mr-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">MotionA</span>
                <p className="text-sm text-blue-200">Gym Management System</p>
              </div>
            </div>
            <p className="text-gray-400">
              Soluciones tecnológicas para la gestión eficiente de gimnasios.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-purple-400">Producto</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/#features" className="hover:text-white transition-colors">Características</Link></li>
              <li><Link to="/#pricing" className="hover:text-white transition-colors">Precios</Link></li>
              <li><Link to="/demo" className="hover:text-white transition-colors">Demo</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-purple-400">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">Acerca de</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/#contact" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-purple-400">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/terms" className="hover:text-white transition-colors">Términos</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacidad</Link></li>
              <li><Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 MotionA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;