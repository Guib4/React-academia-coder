import React from "react";
import "./NavBar.css"; // Opcional: arquivo para estilos personalizados

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="brand">Minha Loja</div>
      <ul className="categories">
        <li><a href="#categoria1">Categoria 1</a></li>
        <li><a href="#categoria2">Categoria 2</a></li>
        <li><a href="#categoria3">Categoria 3</a></li>
        <li><a href="#categoria4">Categoria 4</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;