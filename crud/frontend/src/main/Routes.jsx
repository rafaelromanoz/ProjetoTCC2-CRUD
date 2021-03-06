import React from 'react'
import {Switch,Route,Redirect} from 'react-router'
import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'
import Servicos from '../components/user/Servicos'
import Estoque from '../components/user/Estoque'
import Fornecedores from '../components/user/Fornecedores'

export default props=>
 <Switch> 
     <Route exact path='/' component={Home} />
     <Route path ='/users' component={UserCrud} />
     <Route path='/servicos'component={Servicos}/>
     <Route path='/estoque'component={Estoque}/>
     <Route path='/fornecedores'component={Fornecedores}/>
     <Redirect from='*' to='/' />
 </Switch>