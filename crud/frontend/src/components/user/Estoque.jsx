import React,{Component} from 'react'
import Main from '../templates/Main'

const headerProps={
    icon:'database',
    title:'Estoque',
    subtitle:'Cadastro estoque'
}

export default class Estoque extends Component{
    render(){
        return(
            <Main {...headerProps}>
                Cadastro de estoque
            </Main>
        )
    }
}