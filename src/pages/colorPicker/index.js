import React, { Component } from 'react';
import "./styles.css";

export default class colorPicker extends Component {

    state = {
        history: null
    }

    changeColor = () => {
        const selectElement = document.querySelector('input#head');
        //this.setState({ history: selectElement });
        console.log(selectElement);
    }

    pickerColor = () => {
        
    }

    render() {
        return (
            <div className="colorPicker-main">
                <h2>Color Picker</h2>
                <p>Rolagem de dados de RPG, selecione a quantidade de dados e o tipo de dado a ser jogado.</p>
                <div className="colorPicker-form">
                    <h3>Color Picker</h3>
                    <br />
                    <input
                        type="number"
                        id="timesDice"
                        placeholder="1"
                        min="1"
                    />
                    <br />
                    <input type="color" id="head" name="head" value="#e66465" onChange={() => this.changeColor()} />
                    <br />
                    <textarea
                        id="rollHistory"
                        placeholder="Histórico de resultados das rolagens..."
                        value={this.state.history}
                        readonly='true'
                        rows="10"
                        cols="50">
                    </textarea>
                    <br />
                </div>
            </div>
        );
    }
}