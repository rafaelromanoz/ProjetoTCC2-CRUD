{/*Importando as dependencias
O redirect funciona se você colocar a url que não tem nada a ver com nenhum dos componentes ele redireciona para a home*/}

import React from 'react'
import {Switch,Route,Redirect} from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

export default props=>
 <Switch> {/* Mapeamento entre a url e os componentes*/}
     <Route exact path='/' component={Home} />
     <Route path ='/users' component={UserCrud} />
     <Redirect from='*' to='/' />
 </Switch>