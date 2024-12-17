import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>
        <Link to="/">Minha Loja</Link>
      </h1>
      <ul>
        <li>
          <Link to="/category/1">Categoria 1</Link>
        </li>
        <li>
          <Link to="/category/2">Categoria 2</Link>
        </li>
        <li>
          <Link to="/category/3">Categoria 3</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;