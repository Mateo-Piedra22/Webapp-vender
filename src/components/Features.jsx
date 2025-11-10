import React from 'react';
import { Users, BarChart3, Calendar, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Gestión de Miembros",
      description: "Control completo de socios, membresías y pagos. Incluye renovaciones automáticas y notificaciones."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Reportes Avanzados",
      description: "Análisis detallado de rendimiento, finanzas y asistencia. Toma decisiones informadas con datos precisos."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Reservas y Clases",
      description: "Sistema de programación y reservas de clases grupales. Gestión de horarios y cupos fácilmente."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Seguridad y Privacidad",
      description: "Protección de datos de clientes y acceso seguro. Cumple con las normativas de privacidad más exigentes."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Características Clave
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Herramientas poderosas diseñadas específicamente para la gestión eficiente de gimnasios
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-purple-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-2">¿Listo para transformar tu gimnasio?</h3>
          <p className="text-blue-100 mb-4">Únete a cientos de gimnasios que ya usan MotionA</p>
          <a
            href="#contact"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Comenzar Ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;