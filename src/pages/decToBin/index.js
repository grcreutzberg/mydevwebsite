import React, { Component } from 'react';
import "./styles.css";

export default class binToDec extends Component {

    state = {
        binaryValue: null,
        decimalValue: null
    }

    convertValue = () => {
        const newBinaryValue = parseInt(document.querySelector('input#decimal').value, 10).toString(2);
        this.setState({
            binaryValue: newBinaryValue
        });
    }

    render() {
        return (
            <div className="binToDec-form">
                <h2>Converter número decimal em binário</h2>
                    <label>Número decimal</label>
                    <br />
                    <input
                        type="text"
                        placeholder="0 ou 1"
                        autoComplete="off"
                        id="decimal"
                        value={this.state.decimalValue}
                    />
                    <br />
                    <label>Número binário</label>
                    <br />
                    <input
                        type="text"
                        id="binary"
                        value={this.state.binaryValue}
                        readonly='true'
                    />
                    <br />
                    <button onClick={this.convertValue}>Converter</button>
            </div>
        );
    }
}