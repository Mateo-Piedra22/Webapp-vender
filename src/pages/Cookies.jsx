import React from 'react';

const Cookies = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Cookies</h1>
        <div className="prose max-w-none text-gray-600">
          <p><strong>Fecha de entrada en vigor:</strong> 11 de Noviembre de 2025</p>
          <p>
            Este sitio web utiliza cookies para mejorar la experiencia del usuario y analizar 
            el tráfico. Al continuar navegando, aceptas el uso de estas cookies.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. ¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo 
            (computadora, móvil, etc.) cuando visitas un sitio web. Sirven para recordar tus 
            preferencias, analizar cómo usas el sitio y mejorar su funcionalidad.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Tipos de cookies que usamos</h2>
          <p>
            <strong>Cookies estrictamente necesarias:</strong> Son esenciales para el funcionamiento 
            del sitio web. Por ejemplo, para mantener la sesión iniciada o recordar elementos 
            en un carrito de compras (si aplica).
          </p>
          <p>
            <strong>Cookies de rendimiento:</strong> Recopilan información sobre cómo los usuarios 
            interactúan con el sitio web (páginas visitadas, errores, etc.) para mejorar su rendimiento. 
            Utilizamos herramientas analíticas como Google Analytics con este propósito (si aplica).
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Cómo gestionar las cookies</h2>
          <p>
            Puedes configurar tu navegador web para que te avise cuando se coloque una cookie o 
            para rechazar todas las cookies. Sin embargo, deshabilitar las cookies puede afectar 
            la funcionalidad del sitio web.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Cambios en esta Política</h2>
          <p>
            Podemos actualizar esta Política de Cookies ocasionalmente. 
            La versión actualizada se publicará en esta página.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cookies;