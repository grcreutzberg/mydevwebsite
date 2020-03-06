import React, { Component } from 'react';
import diceAPI from '../../services/diceAPI.js';
import "./styles.css";

export default class diceRoll extends Component {

    state = {
        listHistory: [],
        history: null,
        result: null
    }

    clear = () => {
        this.setState({ result: null, history: null, listHistory: [] });
        document.querySelector('textarea#rollHistory').value = null;
    }


    rollDice = () => {
        this.diceRequest();
    }

    diceRequest = async () => {
        const data = new Date();
        const hora = data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds();

        const timeDice = document.querySelector('input#timesDice').value;
        const typeDice = document.querySelector('select#typeDice').value;
        const modDice = document.querySelector('input#modDice').value;
        const operador = (modDice < 0 ? "-" : "+");
        const mod = (modDice < 0 ? modDice * -1 : modDice);

        const response = await diceAPI.get(`/json/${timeDice}d${typeDice}`);

        let sumDice = 0;
        let listDice = [];
        for (var i = 0; i < response.data.dice.length; i++) {
            sumDice += response.data.dice[i].value;
            listDice.push(response.data.dice[i].value);
        }

        //[20:26:53] Jogador rolou 3d20 + 5 = 19 {[7, 2, 5] + 5}
        let resultado = '';
        let output = '';
        if (modDice !== '') {
            resultado = (parseInt(sumDice) + parseInt(modDice));
            output = '[' + hora + '] Rolou ' 
                    + timeDice + 'd' 
                    + typeDice + ' ' 
                    + operador + ' ' + 
                    + mod + ' = ' 
                    + resultado + ' {[' 
                    + listDice + ']' 
                    + operador + ' ' + 
                    + mod +'}';
        } else {
            resultado = (parseInt(sumDice));
            output = '[' + hora + '] Rolou ' 
                    + timeDice + 'd' 
                    + typeDice + ' = ' 
                    + resultado + ' {[' 
                    + listDice + ']}'; 
        }
        let newListHistory = this.state.listHistory;
        newListHistory.unshift(output);
        let newHistory = '';
        for (var i = 0; i < newListHistory.length; i++) {
            newHistory += newListHistory[i] + '\n';
        }
        this.setState({ result: resultado, history: newHistory, listHistory: newListHistory });
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
                        id="timesDice"
                        placeholder="1"
                        min="1"
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
                        type="number"
                        id="modDice"
                        placeholder="Modificador (Ex.: -2, +5, etc.)"
                    />
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
                    <br />
                    <button onClick={this.clear}>Limpar!</button>
                </div>
            </div>
        );
    }
}