import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Demo = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola, estoy interesado en una demo del sistema de gestión para gimnasios de MotionA.");
    window.open(`https://wa.me/5493434473599?text=${message}`, '_blank');
  };

  return (
    <div className="py-20 bg-gradient-to-b from-blue-100 to-blue-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Solicitar Demo</h1>
        <p className="text-xl text-gray-700 mb-10">
          Descubre cómo MotionA puede transformar la gestión de tu gimnasio. 
          Agenda una demostración personalizada con uno de nuestros expertos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
          >
            Rellenar Formulario
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <button
            onClick={handleWhatsAppClick}
            className="bg-gradient-to-r from-purple-600 to-copper-600 hover:from-purple-700 hover:to-copper-700 text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center"
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            Consultar por WhatsApp
          </button>
        </div>
        <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué verás en la demo?</h2>
          <ul className="text-left text-gray-700 space-y-2">
            <li>• Gestión de miembros y membresías</li>
            <li>• Panel de control y reportes</li>
            <li>• Sistema de reservas y clases</li>
            <li>• Integración con QR para rutinas</li>
            <li>• Configuración de tu gimnasio</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Demo;