import React from 'react';

const Privacy = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Privacidad</h1>
        <div className="prose max-w-none text-gray-600">
          <p><strong>Fecha de entrada en vigor:</strong> 11 de Noviembre de 2025</p>
          <p>
            MotionA ("nosotros", "nuestro") se compromete a proteger y respetar tu privacidad. 
            Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos tu información 
            personal cuando utilizas nuestro sitio web y servicios.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Información que Recopilamos</h2>
          <p>
            <strong>Información proporcionada directamente:</strong> Incluye datos que nos proporcionas 
            voluntariamente al completar formularios de contacto, registrarte para una demo o comunicarte con nosotros. 
            Esto puede incluir tu nombre, email, número de teléfono y nombre del gimnasio.
          </p>
          <p>
            <strong>Información sobre tu uso:</strong> Recopilamos información sobre cómo interactúas 
            con nuestro sitio web, como páginas visitadas y acciones realizadas.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Cómo Usamos Tu Información</h2>
          <p>
            Utilizamos la información recopilada para:
          </p>
          <ul>
            <li>Responder a tus consultas y proporcionarte servicios.</li>
            <li>Mejorar nuestro sitio web y servicios.</li>
            <li>Comunicarnos contigo sobre actualizaciones relevantes (previa consentimiento).</li>
          </ul>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Compartir Tu Información</h2>
          <p>
            No vendemos, comercializamos ni alquilamos tu información personal a terceros. 
            Podemos compartir tu información con proveedores de servicios de confianza (como Formspree para formularios) 
            que nos ayudan a operar nuestro sitio y servicios, siempre bajo acuerdos de confidencialidad.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Seguridad de los Datos</h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas adecuadas para proteger 
            tu información personal contra accesos no autorizados, alteración, divulgación o destrucción.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Tus Derechos</h2>
          <p>
            Puedes solicitar acceso, rectificación, actualización o eliminación de tus datos personales. 
            Para ejercer estos derechos, contáctanos a contacto@motiona.com.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Cambios en esta Política</h2>
          <p>
            Podemos actualizar esta Política de Privacidad ocasionalmente. 
            La versión actualizada se publicará en esta página.
          </p>
          <p>
            <strong>Para consultas sobre privacidad, contáctanos a:</strong> contacto@motiona.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;