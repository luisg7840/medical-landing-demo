import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar el scroll de la página
  useEffect(() => {
    const handleScroll = () => {
      // Si el usuario baja más de 20 píxeles, cambiamos el estado
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="shrink-0 flex items-center cursor-pointer">
            <span className="text-2xl font-bold text-gray-800">
              Dr. <span className="text-primary">Apellido</span>
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#inicio" className="text-gray-800 hover:text-primary transition-colors font-medium">Inicio</a>
            <a href="#sobre-mi" className="text-gray-800 hover:text-primary transition-colors font-medium">Sobre mí</a>
            <a href="#servicios" className="text-gray-800 hover:text-primary transition-colors font-medium">¿Cómo puedo ayudarte?</a>
            <a href="#contacto" className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-sky-600 transition-colors shadow-md">
              Agendar Cita
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-800 hover:text-primary focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <a href="#inicio" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md">Inicio</a>
            <a href="#sobre-mi" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md">Sobre mí</a>
            <a href="#servicios" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md">¿Cómo puedo ayudarte?</a>
            <div className="px-3 py-2 mt-2">
              <a href="#contacto" onClick={() => setIsOpen(false)} className="block w-full text-center bg-primary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-sky-600 transition-colors shadow-md">
                Agendar Cita
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}