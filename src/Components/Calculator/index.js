import React, { Component } from 'react';
import SimpleCalculator from '../SimpleCalculator'
import ImcCalculator from '../ImcCalculator'


export default class Calculator extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <>
                <SimpleCalculator/>
                <ImcCalculator/>
            </>
        )
    }
}