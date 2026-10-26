import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Columna de Texto Animada */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex-1 text-center md:text-left"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Sobre <span className="text-primary">Mí</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Soy un profesional médico dedicado a ofrecer una atención integral y humanizada. Con una sólida formación y constante actualización, mi objetivo es brindar diagnósticos precisos y tratamientos efectivos.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Creo firmemente en la importancia de escuchar al paciente, entendiendo que cada caso es único. Mi compromiso es acompañarte en cada paso hacia tu bienestar óptimo.
            </p>
          </motion.div>

          {/* Columna de Estadísticas Animada */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex-1 w-full grid grid-cols-2 gap-4 sm:gap-6"
          >
            <div className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <span className="block text-4xl font-extrabold text-primary">10+</span>
              <span className="mt-2 block text-sm font-medium text-gray-500">Años de Experiencia</span>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <span className="block text-4xl font-extrabold text-primary">5k+</span>
              <span className="mt-2 block text-sm font-medium text-gray-500">Pacientes Atendidos</span>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <span className="block text-4xl font-extrabold text-primary">3</span>
              <span className="mt-2 block text-sm font-medium text-gray-500">Certificaciones</span>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <span className="block text-4xl font-extrabold text-primary">100%</span>
              <span className="mt-2 block text-sm font-medium text-gray-500">Compromiso</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}