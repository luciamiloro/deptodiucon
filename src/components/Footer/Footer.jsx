import React from "react";
import { FaWhatsapp, FaMapMarkerAlt, FaHome } from "react-icons/fa"; // Importamos FaHome
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-20 bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10"> {/* Cambiamos de 3 a 2 columnas */}
          {/* About Section */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-gray-800">Acerca de nosotros</h1>
            <p className="text-gray-600">
              Ubicado en el corazón de Esquel, nuestro departamento combina
              comodidad y estilo para ofrecerte una estadía inolvidable. Disfruta
              de la naturaleza, actividades al aire libre y la tranquilidad de un
              lugar diseñado para tu descanso.
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-gray-800">Contáctanos</h1>
            <p className="text-gray-600">¿Tienes preguntas? ¡Estamos aquí para ayudarte!</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <FaWhatsapp className="mr-2 text-green-500" />
                <a href="https://wa.me/+5492945685055" className="hover:text-primary duration-200">
                  +54 9 2945 685055
                </a>
              </li>
              <li className="flex items-center">
                <FaHome className="mr-2 text-blue-500" /> {/* Reemplazamos el ícono de Instagram con FaHome */}
                <a href="https://www.alquilerargentina.com/alojamientos/al22-Departamento-Departamento-en-el-Centro-Esquel.html" className="hover:text-primary duration-200">
                  Reseñas Alquiler Argentina
                </a>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-red-500" />
                Esquel, Chubut, Argentina
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Alojo Plaza - Departamento en Esquel.
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
