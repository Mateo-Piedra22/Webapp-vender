import React from 'react';

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Básico",
      price: "$99",
      period: "/mes",
      description: "Ideal para gimnasios pequeños",
      features: [
        "Hasta 100 miembros",
        "Gestión de pagos",
        "Informes básicos",
        "Soporte por email"
      ],
      popular: false
    },
    {
      name: "Profesional",
      price: "$199",
      period: "/mes",
      description: "Para gimnasios medianos que crecen",
      features: [
        "Hasta 500 miembros",
        "Gestión de pagos",
        "Informes avanzados",
        "Soporte prioritario",
        "Acceso a API",
        "Integración QR para rutinas"
      ],
      popular: true
    },
    {
      name: "Empresarial",
      price: "Personalizado",
      period: "",
      description: "Para necesidades específicas",
      features: [
        "Miembros ilimitados",
        "Gestión de múltiples sedes",
        "API personalizada",
        "Soporte dedicado",
        "Integraciones avanzadas",
        "Personalización de marca"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Planes Asequibles
          </h2>
          <p className="text-lg text-gray-600">
            Elige el plan que mejor se adapte a las necesidades de tu gimnasio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl border ${
                plan.popular
                  ? 'border-purple-600 ring-2 ring-purple-600 transform scale-105 relative'
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Más Popular
                </div>
              )}
              <div className={`p-8 ${plan.popular ? 'bg-purple-50' : 'bg-white'}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-lg text-gray-600">{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold ${
                  plan.popular
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                } transition-colors`}>
                  Comenzar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;