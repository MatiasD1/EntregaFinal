import React from 'react';

const NavBar = ({ isVisible }) => {
  return (
    <nav className={`NavBar ${isVisible ? 'fixed' : ''}`}>
      <h2>Puerto Bueno</h2>

      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a href="/" className="nav-link">Inicio</a>
        </li>
        <li className="nav-item">
          <a href="/departamentos" className="nav-link">Departamentos</a>
        </li>
        <li className="nav-item">
          <a href="/ubicacion" className="nav-link">Ubicación</a>
        </li>
        <li className="nav-item">
          <a href="/contacto" className="nav-link">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
