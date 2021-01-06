import './Nav.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'

export default props=>
<aside className="menu-area">
    <nav className="menu">
        <a href="#/">
            <i className="fa fa-home"></i>Inicio
        </a>
        <a href="#/users">
            <i className="fa fa-users"></i>Clientes
        </a>
        <a href="#/servicos">
        <i class="fas fa-tooth"></i>Serviços
        </a>
        <a href="#/estoque">
            <i class="fa fa-tooth"></i>Estoque
        </a>



    </nav>
</aside>