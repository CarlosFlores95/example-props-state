import React, { Component } from 'react';

class Informacion extends Component {
    render() {
        const { marcaRef, plan, yearRef } = this.props.datos
        return (
            <div className="resumen">
                <h1>Datos de Cotización</h1>
                <p>Marca: { marcaRef }</p>
                <p>Año: { yearRef }</p>
                <p>Plan: { plan}</p>
                
            </div>
        );
    }
}

export default Informacion;