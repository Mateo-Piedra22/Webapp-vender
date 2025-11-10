# MotionA - Gym Management System

Este es el frontend de la aplicación web para promocionar y vender el sistema de gestión de gimnasios de MotionA.

## Tecnologías utilizadas

- React 18
- React Router DOM
- Lucide React (Iconos)
- Tailwind CSS (Estilos - Asegúrate de configurarlo)
- Formspree (Para el envío del formulario de contacto)

## Instalación y ejecución local

1.  Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu máquina.
2.  Abre una terminal en la carpeta raíz del proyecto (`my-gym-app`).
3.  Instala las dependencias: `npm install`
4.  Levanta el servidor de desarrollo: `npm run dev`
5.  La aplicación se abrirá en [http://localhost:5173](http://localhost:5173) (o el puerto que te indique Vite).

## Configuración de Formspree

1.  Crea una cuenta en [https://formspree.io/](https://formspree.io/)
2.  Crea un nuevo formulario y copia la URL de endpoint que te proporciona.
3.  En el archivo `src/components/Contact.jsx`, reemplaza `YOUR_FORMSPREE_ENDPOINT_HERE` en la variable `FORMSPREE_ENDPOINT` con la URL real de tu formulario.
4.  Asegúrate de que los `name` de los inputs en el formulario coincidan con los campos que esperas recibir en Formspree.

## Despliegue

Puedes desplegar esta aplicación fácilmente en plataformas como Vercel, Netlify o GitHub Pages. El formulario seguirá funcionando gracias a Formspree.