import React from 'react';

const About = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Acerca de MotionA</h1>
        <div className="prose max-w-none text-gray-600">
          <p>
            En MotionA, nos apasiona la tecnología y su poder para transformar negocios. 
            Nuestro equipo está formado por expertos en desarrollo de software y entusiastas del fitness, 
            comprometidos con crear soluciones que marquen la diferencia en la industria del bienestar.
          </p>
          <p>
            Nuestro "Gym Management System" nace de la necesidad de ofrecer a los propietarios 
            de gimnasios una herramienta potente, intuitiva y asequible para gestionar sus operaciones 
            de manera eficiente. Nos enfocamos en pequeños y medianos gimnasios, comprendiendo sus 
            desafíos únicos y brindando soluciones adaptadas a sus necesidades.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Nuestra Misión</h2>
          <p>
            Simplificar la gestión de gimnasios, permitiendo a los propietarios centrarse en lo que 
            realmente importa: ofrecer una excelente experiencia a sus clientes y hacer crecer su negocio.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Nuestra Visión</h2>
          <p>
            Ser la plataforma líder de gestión para gimnasios independientes, reconocida por su 
            fiabilidad, innovación y compromiso con el éxito de nuestros clientes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;