import React,{Component} from 'react'
import Main from '../templates/Main'


const headerProps={
    icon:'envelope-square',
    title:'Serviços',
    subtitle:'Cadastro de lista de serviços'
}

export default class Servicos extends Component{
    render(){
        return(
            <Main {...headerProps}>
                Cadastro de serviços
            </Main>
        )
    }
}