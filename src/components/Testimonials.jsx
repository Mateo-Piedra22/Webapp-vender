import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Rodríguez",
      company: "Gimnasio Zurka",
      text: "El sistema ha simplificado nuestra administración y mejorado la experiencia del cliente. La integración con QR para rutinas es genial.",
      rating: 5
    },
    {
      name: "María López",
      company: "Power House Fitness",
      text: "Una solución robusta y fácil de usar. El soporte es confiable y resuelven rápidamente. Recomendado 100%.",
      rating: 5
    },
    {
      name: "Juan Martínez",
      company: "Elite Training Center",
      text: "Implementamos con éxito. Ha aumentado nuestra eficiencia operativa y la satisfacción de los socios.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-gray-600">
            Testimonios de propietarios de gimnasios satisfechos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-purple-600">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;