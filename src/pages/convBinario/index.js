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
                <br></br>
                <div className="convBin-extra">
                    <h3>Sistema de numeração binário</h3>
                    <p>
                        O sistema binário ou de base 2 é um sistema de numeração posicional em que todas as quantidades se representam com base em dois números, ou seja, zero e um (0 e 1).
                        Os computadores digitais trabalham internamente com dois níveis de tensão, pelo que o seu sistema de numeração natural é o sistema binário. Com efeito, num sistema simples como este é possível simplificar o cálculo, com o auxílio da lógica booliana. Em computação, chama-se um dígito binário (0 ou 1) de bit, que vem do inglês Binary Digit. Um agrupamento de 8 bits corresponde a um byte (Binary Term). Um agrupamento de 4 bits, ainda, é chamado de nibble.
                        Um processador é formado por milhares de blocos lógicos complexos, formados por portas lógicas básicas, e o funcionamento destas está amparado por um postulado fundamental à eletrônica digital que determina que um circuito opere apenas com dois níveis de tensão bem definidos. Em um circuito digital TTL (Transistor Transistor Logic ou simplesmente TTL é uma classe de circuitos digitais construídos de transistores de junção bipolar (BJT), e resistores), os dois níveis de tensão padronizados são 0V (zero volt) e 5V (cinco volts). Ao projetar um sistema digital, ao invés de trabalhar com níveis de tensão trabalha-se com níveis lógicos, então, no caso do circuito TTL, 0V será representado por “0” e 5V será representado por “1”, e os níveis de tensão entre eles serão ignorados, ou seja, adotar-se-á uma faixa até a qual será considerado nível lógico zero, e a partir dela, nível lógico 1. Neste caso, de 0V a 2,5V temos “0”, e a partir daí até 5V temos “1”.
                        O sistema binário é base para a Álgebra booliana (de George Boole — matemático inglês), que permite fazer operações lógicas e aritméticas usando-se apenas dois dígitos ou dois estados (sim ou não, verdadeiro ou falso, tudo ou nada, ligado ou desligado, 1 ou 0). Toda a electrónica digital e computação estão baseadas nesse sistema binário e na lógica de Boole, que permite representar por circuitos electrónicos digitais (portas lógicas) os números, caracteres, realizar operações lógicas e aritméticas. Os programas de computadores são codificados sob forma binária e armazenados nas mídias (memórias, discos, etc) sob esse formato. Assim, para informação armazenada na memória RAM do computador, o formato será de voltagem mais alta (1) ou mais baixa (0). Em discos magnéticos a binariedade se dará por diferença de polaridade, positiva ou negativa.
                    </p>
                    <br></br>
                    <h3>História</h3>
                    <p>
                        O matemático indiano Pingala apresentou a primeira descrição conhecida de um sistema numérico binário no século III a.C., representando os números de 1 a 8 com a sequência (usando símbolos modernos) 001, 010, 011, 100, 101, 110, 111 e 1000.
                        Um conjunto de 8 trigramas e 64 hexagramas, análogos a números binários com precisão de 3 e 6 bits, foram utilizados pelos antigos chineses no texto clássico I Ching. Conjuntos similares de combinações binárias foram utilizados em sistemas africanos de adivinhação tais como o Ifá, bem como na Geomancia do medievo ocidental.
                        Uma sistematização binária dos hexagramas do I Ching, representando a sequência decimal de 0 a 63, e um método para gerar tais sequências, foi desenvolvida pelo filósofo e estudioso Shao Yong no século XI. Entretanto, não há evidências que Shao Yong chegou à aritmética binária.
                        O sistema numérico binário moderno foi documentado de forma abrangente por Gottfried Leibniz no século XVIII em seu artigo "Explication de l'Arithmétique Binaire". O sistema de Leibniz utilizou 0 e 1, tal como o sistema numérico binário corrente nos dias de hoje.
                        Em 1854, o matemático britânico George Boole publicou um artigo fundamental detalhando um sistema lógico que se tornaria conhecido como Álgebra Booleana. Seu sistema lógico tornou-se essencial para o desenvolvimento do sistema binário, particularmente sua aplicação a circuitos eletrônicos.
                        Em 1937, Claude Shannon produziu sua tese no MIT que implementava Álgebra Booleana e aritmética binária utilizando circuitos elétricos pela primeira vez na história. Intitulado "A Symbolic Analysis of Relay and Switching Circuits", a tese de Shannon praticamente fundou o projeto de circuitos digitais.
                    </p>
                    <br></br>
                    <h3>Códigos Binários</h3>
                    <p>
                        A conversão de um número decimal no seu equivalente binário é chamada codificação. Um número decimal é expresso como um código binário ou número binário. O sistema numérico binário, como apresentado, é conhecido como código binário puro. Este nome o diferencia de outros tipos de códigos binários.
                    </p>
                    <br></br>
                    <h3>Decimal Codificado em Binário</h3>
                    <p>
                        O sistema numérico decimal é fácil de se usar devido à familiaridade. O sistema numérico binário é menos conveniente de se usar pois nos é menos familiar. É difícil olhar em número binário e rapidamente reconhecer o seu equivalente decimal.
                        Por exemplo, o número binário 1010011 representa o número decimal 83.
                        É difícil dizer imediatamente, por inspeção do número, qual seu valor decimal. Entretanto, em alguns minutos, usando os procedimentos descritos anteriormente, pode-se prontamente calcular seu valor decimal. A quantidade de tempo que leva para converter ou reconhecer um número binário é uma desvantagem no trabalho com este código, a despeito das numerosas vantagens de "hardware".
                        Os engenheiros reconheceram este problema cedo, e desenvolveram uma forma especial de código binário que era mais compatível com o sistema decimal. Como uma grande quantidade de dispositivos digitais, instrumentos e equipamentos usam entradas e saídas decimais, este código especial tornou-se muito difundido e utilizado. Esse código especial é chamado decimal codificado em binário (BCD - binary coded decimal). O código BCD combina algumas das características dos sistemas numéricos binário e decimais.
                    </p>
                </div>
            </div>
        );
    }
}