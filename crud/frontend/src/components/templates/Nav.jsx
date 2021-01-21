import "./Nav.css";
import "font-awesome/css/font-awesome.min.css";
import React from "react";
import { Link } from "react-router-dom";
export default (props) => (
  <aside className="menu-area">
    <nav className="menu">
      <Link to="/">
        <i className="fa fa-home"></i> Inicio
      </Link>
      <Link to="/users">
        <i className="fa fa-users"></i> Clientes
      </Link>
      <Link to="/servicos">
        <i class="fa fa-envelope-square"></i> Serviços
      </Link>
      <Link to="/fornecedores">
        <i className="fa fa-archive"></i> Fornecedores
      </Link>
      <Link to="/estoque">
        <i className="fa fa-server"></i> Estoque
      </Link>
    </nav>
  </aside>
);
