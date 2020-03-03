import React, { Component } from 'react';
import "./styles.css";

export default class binToDec extends Component {

    state = {
        binaryValue: null,
        decimalValue: null
    }

    convertValue = () => {
        const newDecimalValue = parseInt(document.querySelector('input#binary').value,2);
        this.setState({
            decimalValue: newDecimalValue
        });
    }

    render() {
        return (
            <div className="binToDec-form">
                <h2>Converter número binário em decimal</h2>
                    <label>Número binário</label>
                    <br />
                    <input
                        type="text"
                        placeholder="0 ou 1"
                        autoComplete="off"
                        id="binary"
                        value={this.state.binaryValue}
                    />
                    <br />
                    <label>Número decimal</label>
                    <br />
                    <input
                        type="text"
                        id="decimal"
                        value={this.state.decimalValue}                        
                        readonly='true'
                    />
                    <br />
                    <button onClick={this.convertValue}>Converter</button>
            </div>
        );
    }
}