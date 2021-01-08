//importando dos outros arquivos
import './Logo.css'
import logo from '../../assets/imgs/logo.jpg'
import React from 'react'
import {Link} from 'react-router-dom'

export default props=> //todos serão componentes funcionais
<aside className="logo">
   <Link to="/" className="logo">
       <img src={logo} alt="logo"/>   
       </Link>
</aside>