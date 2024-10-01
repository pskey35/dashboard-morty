import React, { useState } from 'react';

const Menu = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex">
      {/* Barra lateral */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-100 shadow-lg transition-width duration-300 ${
          isExpanded ? 'w-48' : 'w-16'
        }`}
      >
        {/* Botón del menú hamburguesa */}
        <button
          className="p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {/* Icono del menú hamburguesa */}
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>

        {/* Menú con abreviaciones o nombres completos */}
        <ul className="mt-5 space-y-4">
          <li className="flex items-center">
            <span className="text-xl">Confi</span> {/* Abreviación de Configuración */}
            {isExpanded && <span className="ml-2">Configuración</span>}
          </li>
          <li className="flex items-center">
            <span className="text-xl">Diag</span> {/* Abreviación de Diagnóstico */}
            {isExpanded && <span className="ml-2">Diagnóstico Técnico</span>}
          </li>
          <li className="flex items-center">
            <span className="text-xl">Pers</span> {/* Abreviación de Personal */}
            {isExpanded && <span className="ml-2">Gestión de Personal</span>}
          </li>
          <li className="flex items-center">
            <span className="text-xl">Adm</span> {/* Abreviación de Administración */}
            {isExpanded && <span className="ml-2">Administración</span>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
