import React from 'react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Cómo aumentar la retención de socios en tu gimnasio",
      excerpt: "Descubre estrategias efectivas para fidelizar a tus clientes y reducir la deserción.",
      date: "15 Nov 2025"
    },
    {
      id: 2,
      title: "Automatización en la gestión de gimnasios: ventajas y herramientas",
      excerpt: "Exploramos cómo la automatización puede mejorar la eficiencia operativa.",
      date: "08 Nov 2025"
    },
    {
      id: 3,
      title: "Importancia del seguimiento de rutinas con QR para miembros",
      excerpt: "Cómo los códigos QR pueden mejorar la experiencia del usuario y la adherencia al entrenamiento.",
      date: "01 Nov 2025"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog de MotionA</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map(post => (
            <article key={post.id} className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <time className="text-sm text-gray-500">{post.date}</time>
              <h2 className="text-xl font-bold text-gray-900 mt-2 mb-4">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <button className="text-purple-600 hover:text-purple-800 font-medium">
                Leer más
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;