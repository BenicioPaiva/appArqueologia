// Importando o React
import React, { Component } from "react";
// Importando os components necessários da lib react-materialize
import {Input} from 'react-materialize';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import "./dados.css";
import InputMask from 'react-input-mask';

const formStyle  = {  width:'100%' , height:'100%'}; 
const h1Style= {  color:  '#ffffff'}
const wellStyles = { maxWidth: 400, margin: 0 };

class Dados extends Component {
    constructor(props) {
        super(props);
        this.enviarDados = this.enviarDados.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state= {
            dados:this.props.location.state,
            descoberta:"",
            descricao:"",
            data_descoberta:"",
            pais:this.props.location.state.parametros.selectedPais.value,
            tipo:this.props.location.state.parametros.selectedTiposDescoberta.value
        }    
    };

    handleChange = (selectedOption) => {
        //this.setState({ selectedOption });
       // this.callApiOpcoes(selectedOption.value);
    }

    enviarDados(event){

        event.preventDefault();

        const data = event.target;

        if( data[0].defaultValue === "" || data[1].defaultValue === "" || data[2].defaultValue ){

            window.alert('Todos campos são obrigatórios!', 'Close after 3000ms', 3000);
  
        }
        else{         

            fetch('http://localhost:8000/cadastros/cadastrarDescoberta',{
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
            }),    
                body: "param1="+data[0].defaultValue+
                    "&param2="+data[1].defaultValue+
                    "&param3="+data[2].defaultValue+
                    "&param4="+this.state.pais+          
                    "&param5="+this.state.tipo
            })
            .then((result) => {
          
                return result.json();

            }).then((jsonResult) => {        
                window.alert(jsonResult.message,'Close after 3000ms', 3000);
            })
        }    


    }
    

    render(){
    return(
  
        <form  className="Dados" onSubmit={this.enviarDados}  style={formStyle}>

        <div className="backgroundform">
        
            <div className="container">
            <h5 style={h1Style}>Registro de Descobertas</h5>
            </div>

            <div className="divsize">
                <br></br>
                <Input defaultValue={this.state.descoberta} placeholder="Titulo da Descoberta" name="descoberta" id="descoberta" label="Descoberta" />
                <Input defaultValue={this.state.descricao} placeholder="Descição da Descoberta" name="descricao" id="descricao" label="Descriçao" />
                <label>Data da Descoberta</label>
                <InputMask mask="99/99/9999"  placeholder="Data da Descoberta" name="data_descoberta" id="data_descoberta" label  ="Data da Descoberta" />
                <Input value={this.state.pais}  placeholder="País da Descoberta" name="pais" id="pais" label="País da Descoberta" disabled />
                <Input value={this.state.tipo} placeholder="Tipo de Descoberta" name="tipo" id="tipo" label="Tipo de Descoberta" disabled />
            </div>

            <div style={wellStyles} className="center-align">
            <Button type='submit' variant="contained" color="primary" size="large">Enviar Dados</Button>
            <a>   </a>
            <Button variant="contained" color="secondary" size="large" component={Link} to="/home">Novo Registro</Button>
            </div>
        
        </div>
        </form>
    )}     
}

export default Dados;