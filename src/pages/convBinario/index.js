import React, { Component } from 'react';
import "./styles.css";

export default class convBinario extends Component {

    state = {
        binaryValue: null,
        decimalValue: null
    }

    convertValueBinToDec = () => {
        const newDecimalValue = parseInt(document.querySelector('input#BinToDecBinary').value, 2);
        this.setState({
            decimalValue: newDecimalValue
        });
    }

    convertValueDecToBin = () => {
        const newBinaryValue = parseInt(document.querySelector('input#DecToBinDecimal').value, 10).toString(2);
        this.setState({
            binaryValue: newBinaryValue
        });
    }

    render() {
        return (
            <div className="convBin-form">
                <h2>Calculadora binária</h2>
                <p>A calculadora para conversão binaria converte facilmente números decimais em binários e vice-versa</p>
                <div className="convBin-div">
                    <h3>Converter binário para decimal</h3>
                    <br />
                    <label>Número binário</label>
                    <br />
                    <input
                        type="text"
                        placeholder="0 ou 1"
                        autoComplete="off"
                        id="BinToDecBinary"
                    />
                    <br />
                    <br />
                    <label>Número decimal</label>
                    <br />
                    <input
                        type="text"
                        id="BinToDecDecimal"
                        value={this.state.decimalValue}
                        readonly='true'
                    />
                    <br />
                    <button onClick={this.convertValueBinToDec}>Converter</button>
                </div>
                <br />
                <div className="convBin-div">
                    <h3>Converter decimal para binário</h3>
                    <br />
                    <label>Número decimal</label>
                    <br />
                    <input
                        type="text"
                        placeholder="0 .. 10000"
                        autoComplete="off"
                        id="DecToBinDecimal"
                    />
                    <br />
                    <br />
                    <label>Número binário</label>
                    <br />
                    <input
                        type="text"
                        id="DecToBinBinary"
                        value={this.state.binaryValue}
                        readonly='true'
                    />
                    <br />
                    <button onClick={this.convertValueDecToBin}>Converter</button>
                </div>
            </div>
        );
    }
}