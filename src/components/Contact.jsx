import React, { useState } from 'react';
import { Mail, Phone, MapPin, Check } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gymName: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Asegúrate de reemplazar YOUR_FORMSPREE_ENDPOINT_HERE con la URL real de Formspree
  const FORMSPREE_ENDPOINT = "YOUR_FORMSPREE_ENDPOINT_HERE";

  const handleSubmit = (e) => {
    e.preventDefault();
    // La lógica de envío real se maneja en el action del form
    // Aquí solo validamos antes de enviar
    if (!formData.name || !formData.email || !formData.gymName || !formData.message) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }
    // El form se envía al action automáticamente
  };

  return (
    <section id="contact" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Listo para comenzar?
          </h2>
          <p className="text-lg text-gray-600">
            Contáctanos para una demostración personalizada
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form action={FORMSPREE_ENDPOINT} method="POST" onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre del Gimnasio *</label>
                <input
                  type="text"
                  name="gymName"
                  value={formData.gymName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-purple-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">contacto@motiona.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-purple-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Teléfono</h4>
                    <p className="text-gray-600">+54 9 343 447-3599</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-purple-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Ubicación</h4>
                    <p className="text-gray-600">Argentina</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-4">Soporte Profesional</h3>
              <p className="mb-4">Asistencia confiable para garantizar tu éxito.</p>
              <div className="flex items-center">
                <Check className="w-5 h-5 mr-2" />
                <span>Soporte por email y WhatsApp</span>
              </div>
              <div className="flex items-center mt-2">
                <Check className="w-5 h-5 mr-2" />
                <span>Documentación detallada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;