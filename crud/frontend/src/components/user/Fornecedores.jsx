import React,{Component} from 'react'
import axios from 'axios'

import Main from '../templates/Main'


const headerProps={
    icon:'server ',
    title:' Fornecedores',
    subtitle:'Cadastro de fornecedores'
}

const baseURL = 'http://localhost:3001/fornecedores'
const initialState={
    user:{name:'',email:'',endereco:'',telefone:'',cnpj:'',cro:''},
    list:[]
}

export default class UserCrud extends Component{

    state={...initialState}

    componentWillMount(){
        axios(baseURL).then(resp=>{
            this.setState({list: resp.data})

        })

    }

    clear(){
        this.setState({user: initialState.user})
    }
    save(){
        const user=this.state.user
        const method=user.id ? 'put' : 'post' //put altera e post vai incluir
        const url=user.id ? `${baseURL}/${user.id}`:baseURL
        axios[method] (url,user)
        .then(resp=>{
            const list = this.getUpdatedList(resp.data)
            this.setState({user:initialState.user,list})

        })

    }

    getUpdatedList(user,add=true){
        const list=this.state.list.filter(u=>u.id !== user.id)
        if(add)list.unshift(user)
        return list

    }
    
    updateField(event){
        const user={...this.state.user}
        user[event.target.name]=event.target.value
        this.setState({user})

    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Denominação social</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite a denominação social" />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="email" className="form-control"
                                name="email"
                                value={this.state.user.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o e-mail..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Endereço</label>
                        <input type="text"className="form-control"
                        name="endereco"
                        value={this.state.user.endereco}
                        onChange={e=>this.updateField(e)}
                        placeholder="Digite o Endereço"/>
                    </div>
                    </div>
                    <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Telefone</label>
                        <input type="tel" className="form-control"
                        name="telefone"
                        value={this.state.user.telefone}
                        onChange={e=>this.updateField(e)}
                        placeholder="Digite o telefone"/>

                        </div>

                    </div>
                    <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>CNPJ/CPF</label>
                        <input type="text" className="form-control"
                        name="cnpj"
                        value={this.state.user.cnpj}
                        onChange={e=>this.updateField(e)}
                        placeholder="Digite o CNPJ/CPF"/>

                        </div>
                        </div>

                        <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>CRO</label>
                        <input type="text" className="form-control"
                        name="cro"
                        value={this.state.user.cro}
                        onChange={e=>this.updateField(e)}
                        placeholder="Digite o CRO "/>

                        </div>
                        </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    load(user){
        this.setState({user})

    }

    remove(user){
        axios.delete(`${baseURL}/${user.id}`).then(resp=>{
            const list=this.getUpdatedList(user,false)
            this.setState({list})
        })
    }

    renderTable(){
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Denominação Social</th>
                        <th>E-mail</th>
                        <th>Endereço</th>
                        <th>Telefone</th>
                        <th>CNPJ/CPF</th>
                        <th>CRO</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows(){
        return this.state.list.map(user=>{
            return(
                <tr key={user.id}>
                   <td>{user.id}</td> 
                   <td>{user.name}</td> 
                   <td>{user.email}</td>
                   <td>{user.endereco}</td>
                   <td>{user.telefone}</td>
                   <td>{user.cnpj}</td>
                   <td>{user.cro}</td>
                   <td>
                       <button className="btn btn-warning"
                           onClick={()=>this.load(user)}>
                           <i className="fa fa-pencil"></i>
                       </button>
                       <button className="btn btn-danger ml-2"
                       onClick={()=>this.remove(user)}>
                           <i className="fa fa-trash"></i>
                       </button>

                   </td>
                </tr>
            )
        })

    }

    render(){
            return(
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}