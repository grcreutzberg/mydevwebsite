import React, { Component } from 'react';
import diceAPI from '../../services/diceAPI.js';
import "./styles.css";

export default class diceRoll extends Component {

    state = {
        history: [],
        result: null
    }

    rollDice = () => {
        this.diceRequest();
    }

    diceRequest = async () => {
        const timeDice = document.querySelector('input#timeDice').value;
        const typeDice = document.querySelector('select#typeDice').value;

        const response = await diceAPI.get(`/json/${timeDice}d${typeDice}`);
        console.log(response.data.dice);

        const data = new Date();
        const hora = data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds();
        const output = '[' + hora + '] Jogador rolou ' + timeDice + 'd' + typeDice + ' = ' + response.data.dice[0].value
        this.setState({ result: output, history: response })
    }

    render() {
        return (
            <div className="dice-form">
                <h2>Rolador de dados</h2>
                <p>Rolagem de dados de RPG, selecione a quantidade de dados e o tipo de dado a ser jogado.</p>
                <div className="dice-input">
                    <h3>Rolador de dados (RPG)</h3>
                    <br />
                    <input
                        type="number"
                        id="timeDice"
                        placeholder="1"
                    />
                    <select id="typeDice">
                        <option value="4">d4</option>
                        <option value="6">d6</option>
                        <option value="8">d8</option>
                        <option value="10">d10</option>
                        <option value="12">d12</option>
                        <option value="20" selected>d20</option>
                    </select>
                    <input
                        type="text"
                        id="result"
                        value={this.state.result}
                        readonly='true'
                    />                    
                    <br />
                    <button onClick={this.rollDice}>Rolar!</button>
                    <br />
                    <textarea 
                        id="rollHistory" 
                        placeholder="Histórico de resultados das rolagens..."
                        value={this.state.history}
                        readonly='true' 
                        rows="10" 
                        cols="50">
                    </textarea>
                </div>
            </div>
        );
    }
}