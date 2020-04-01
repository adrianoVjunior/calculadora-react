import React, { Component } from 'react';
import './index.css'


export default class SimpleCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            param1: 0,
            param2: 0,
            resultado: 0,
            lista: [5, 3, 8, 9]
        }
    }

    soma = (p) => {
        const { param1, param2 } = p
        let result = param1 + param2
        this.setState({ resultado: result })
    }
    subtrai = (p) => {
        const { param1, param2 } = p
        let result = param1 - param2
        this.setState({ resultado: result })
    }
    divide = (p) => {
        const { param1, param2 } = p
        let result = param1 / param2
        this.setState({ resultado: result })
    }
    multiplica = (p) => {
        const { param1, param2 } = p
        let result = param1 * param2
        this.setState({ resultado: result })
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
                <label>SimpleCalculator</label>
                <div className='inputs'>
                    <input placeholder='1° número' name='param1' onKeyUp={this.handleChange} type='number' />
                    <input  placeholder='2° número' name='param2' onKeyUp={this.handleChange} type='number' />
                </div>
                <div className='actions'>
                    <button className='btn' onClick={() => this.soma(this.state)}>Somar</button>
                    <button className='btn' onClick={() => this.subtrai(this.state)}>Subtrair</button>
                    <button className='btn' onClick={() => this.divide(this.state)}>Dividir</button>
                    <button className='btn' onClick={() => this.multiplica(this.state)}>Multiplicar</button>
                </div>
                <button className='btn' onClick={() => this.clear()}>Limpar</button>
                <label>Resultado: {this.state.resultado}</label>
            </div >
        )
    }
}