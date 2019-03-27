import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Informacion from './Informacion';



class App extends Component {
  state = {
    datos: {}
  }

  cotizarSeguro = (datos) => {

    const { marcaRef, plan, yearRef } = datos;

    const datosAuto = {
      marcaRef: marcaRef,
      yearRef: yearRef, 
      plan: plan 
    }

    this.setState({
      datos : datosAuto
    })
  }

  render() {
    return (
      <div className="contenedor">
      
        <Header 
          titulo ="Cotizador de Autos"
        />
      <div className="contenedor-formulario">
        <Formulario 
          cotizarSeguro = {this.cotizarSeguro}
        />

      </div>  
      <div className="resultado">
        <Informacion 
        datos = {this.state.datos}
        />

      </div>
      </div>
    );
  }
}

export default App;
