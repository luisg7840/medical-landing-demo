import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [motivo, setMotivo] = useState('');

  const enviarWhatsApp = (e) => {
    e.preventDefault(); 
    const numeroDoctor = "584120000000"; 
    const mensaje = `¡Hola! Deseo agendar una cita médica.%0A%0A*Mis datos:*%0A- Nombre: ${nombre}%0A- Teléfono: ${telefono}%0A- Motivo de consulta: ${motivo}`;
    const url = `https://wa.me/${numeroDoctor}?text=${mensaje}`;
    window.open(url, '_blank');
    
    setNombre('');
    setTelefono('');
    setMotivo('');
  };

  return (
    <section id="contacto" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Agenda tu <span className="text-primary">Cita</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Estamos listos para atenderte. Llena el formulario o contáctanos directamente a través de nuestros canales oficiales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-50 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          
          {/* Columna de Información Animada */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-900">Información de Contacto</h3>
            
            {/* Ubicación interactiva */}
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Centro+Medico+Principal+Maracay+Aragua" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-start space-x-4 group p-2 -ml-2 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <div className="bg-white p-3 rounded-full shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">Ubicación</h4>
                <p className="text-gray-600">Centro Médico Principal, Consultorio 104<br/>Maracay, Aragua</p>
                <span className="text-sm font-semibold text-primary mt-1 inline-block">Ver en Google Maps &rarr;</span>
              </div>
            </a>

            {/* Teléfono */}
            <div className="flex items-start space-x-4">
              <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Teléfono</h4>
                <p className="text-gray-600">+58 412-0000000</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Correo Electrónico</h4>
                <p className="text-gray-600">citas@dr-apellido.com</p>
              </div>
            </div>
          </motion.div>

          {/* Columna del Formulario Animada */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-sm"
          >
            <form className="space-y-4" onSubmit={enviarWhatsApp}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                <input 
                  type="text" 
                  required
                  maxLength="50"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors" 
                  placeholder="Ej. Juan Pérez" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                <input 
                  type="tel" 
                  required
                  maxLength="15"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors" 
                  placeholder="Tu número de contacto" 
                />
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-sm font-medium text-gray-700">Motivo de la consulta</label>
                  <span className="text-xs text-gray-400">{motivo.length}/300</span>
                </div>
                <textarea 
                  rows="3" 
                  required
                  maxLength="300"
                  value={motivo}
                  onChange={(e) => setMotivo(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors" 
                  placeholder="Describe brevemente tus síntomas o motivo de visita..."
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-sky-600 transition-colors shadow-md mt-4">
                Solicitar Cita por WhatsApp
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}