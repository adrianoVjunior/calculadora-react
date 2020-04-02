import React, { Component } from 'react';
import './index.css'


export default class SimpleCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peso: 0,
            altura: 0,
            resultado: 0,
        }
    }

    calculaImc = (p) => {
        const { peso, altura } = p
        let result = peso / (altura * 2)
        return result
    }

    clear = () => {
        this.setState({ resultado: 0, param1: 0, param2: 0 })
        var teste1 = document.getElementsByName('param1')
        teste1[0].value = ''
        var teste2 = document.getElementsByName('param2')
        teste2[0].value = ''
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: parseFloat(value) })
    }

    render() {
        return (
            <div className='container'>
                <label>ImcCalculator</label>
                <div className='inputs'>
                    <input placeholder='Peso' name='peso' onKeyUp={this.handleChange} type='number' />
                    <input placeholder='altura' name='altura' onKeyUp={this.handleChange} type='number' />
                </div>
                <div className='actions'>
                    <button className='btn' onClick={() => this.calculaImc(this.state)}>Calcular</button>
                </div>
                <button className='btn' onClick={() => this.clear()}>Limpar</button>
                <label>Resultado: {this.state.resultado}</label>
            </div >
        )
    }
}