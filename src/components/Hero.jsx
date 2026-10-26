import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="inicio" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Columna de Texto Animada */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Tu salud en las mejores <span className="text-primary">manos</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Brindamos atención médica de calidad, con un enfoque humano y personalizado para garantizar tu bienestar integral.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contacto" className="inline-block text-center bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-sky-600 transition-colors shadow-lg">
                Agendar Consulta
              </a>
              <a href="#servicios" className="inline-block text-center bg-white text-primary border-2 border-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors">
                Conoce cómo te ayudo
              </a>
            </div>
          </motion.div>
          
          {/* Columna de Imagen Animada */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full flex justify-center"
          >
            {/* Contenedor circular con la imagen */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-xl bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop" 
                alt="Retrato del Doctor" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}