import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Hero = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola, estoy interesado en el sistema de gestión para gimnasios de MotionA.");
    window.open(`https://wa.me/5493434473599?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Sistema de Gestión Profesional para Gimnasios
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Optimiza la operación de tu gimnasio con nuestra solución integral.
              Diseñada para propietarios que buscan eficiencia, control y crecimiento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                Solicitar Demo
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
          </div>
          <div className="flex justify-center">
            <div className="bg-blue-900 border-2 border-dashed border-blue-400 rounded-xl w-full max-w-md h-64 lg:h-80 flex items-center justify-center">
              <span className="text-blue-300">Vista previa del Dashboard</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;