import React from 'react';

const Header = () => {
    return (
      <header className="header">
        {/* Placeholder para el logo */}
        <div className="header-logo">
          <img
          src="\WEB-FE-REACT-HW4-EDGARGARCIA\public\figs\marlboro-cowboy-seeklogo.svg"
          alt="Logo"
          className="w-32 h-auto object-contain"
          />
        </div>
        <nav>
          <ul className="flex gap-4">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;
  