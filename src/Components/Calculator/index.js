import React, { Component } from 'react';
import SimpleCalculator from '../SimpleCalculator'

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            param1: 0,
            param2: 0
        }
    }

    soma = (param1, param2) => {
        let result = param1 + param2
        return result
    }

    render() {
        return (
            <>
                <SimpleCalculator />
            </>
        )
    }
}