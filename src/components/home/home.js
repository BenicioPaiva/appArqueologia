import React, { Component } from "react";
import {Card, CardTitle,Input } from 'react-materialize';
import logo1 from "./logo.jpg";
import "./home.css";
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Select from 'react-select';
import PropTypes from 'prop-types';

const wellStyles = { maxWidth: 400, margin: 0 };
const formStyle  = {  width:'100%' , height:'100%'}; 
const h1Style= {  color:  '#ffffff'}
const headerStyle= {  background:  '#385381' , height: '50px' }
const imgStyle = { maxHeight: '100%' , maxWidth: '100%' }

class Home extends Component {

    constructor(props) {
      super(props);

      this.handleChangePais = this.handleChangePais.bind(this);
      this.handleChangeTipoDescoberta = this.handleChangeTipoDescoberta.bind(this);
      this.state = {
        selectedPais: null,
        selectedTiposDescoberta: null,
        paises : [{value: 'Africa do Sul' , label: 'Africa do Sul' }, { value: 'Afeganistão' , label: 'Afeganistão' } , { value: 'Egito', label: 'Egito'  }, {value: 'Grecia',label:'Grecia' } , { value:'Irã' , label:'Irã' },{ value:'Israel' , label:'Israel' } ],
        tipodescoberta : [{value:'Artefato de Pedra',label:'Artefato de Pedra'},{value:'Campo de Batalha',label:'Campo de Batalha'} ,{value:'Moedas Antigas',label:'Moedas Antigas'},{value:'Ossadas',label:'Ossadas'},{value:'Tumulo',label:'Tumulo'},{value:'Outros',label:'Outros'}],
      }
    }

    handleChangePais = (selectedPais) => {
      this.setState({ selectedPais });
    }

    handleChangeTipoDescoberta = (selectedTiposDescoberta) => {
      this.setState({ selectedTiposDescoberta });
    }

    navigate = (e) =>{
      e.preventDefault();
      this.props.history.push({
        pathname:"/dados" ,
        state:{
          parametros : this.state           
        }
    
      });
    }

    render(){   
       
       return(
        
       <div className="backgroundform"> 

            <div className="container">
              <h5 style={h1Style}>Registro de Descobertas</h5>
            </div>
               
            <div className="containerImage">
               <img className="divImagem" src={logo1} alt="logo" />
            </div>

            <div className="divsize">

            <Select  
              value={this.selectedPais}
              options={this.state.paises}
              onChange={this.handleChangePais}
              placeholder='Pais da Descoberta'
            />
             
            
            <Select
              value={this.selectedTiposDescoberta}
              options={this.state.tipodescoberta}
              onChange={this.handleChangeTipoDescoberta}
              placeholder='Tipo de Descoberta'
            />

            <br></br>

            <div className="center-align">
              <Button variant="contained" color="primary" size="large" onClick={this.navigate.bind(this) }>Descoberta</Button>
              <Button variant="contained" color="primary" size="large">Comentários</Button>
            </div>

            </div>
            
        </div>
        
    )
    }    
};

export default Home;
  

