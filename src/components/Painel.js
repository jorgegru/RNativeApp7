import React, { Component } from 'react';
import { View, Text} from 'react-native';
import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';


class Painel extends Component {
    constructor(props) {
        super(props);

        this.state = { num1: '1', num2: '2', operacao: ''}

        this.calcular = this.calcular.bind(this);
        this.atualizaValor = this.atualizaValor.bind(this);
        this.atualizaOperacao = this.atualizaOperacao.bind(this);
    }

    calcular() {
        let resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
        
        switch (this.state.operacao) {
            case 'soma':
                resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
                break;
            case 'subtracao':
                resultado = parseFloat(this.state.num1) - parseFloat(this.state.num2);
                break;
        
            default:
                resultado = 0;
                break;
        }

        console.log(resultado);
    }

    atualizaOperacao(operacao) {
        this.setState({ operacao: operacao });
    }

    atualizaValor(name, num) {
        const obj = {};
        obj[name] = num;
        this.setState(obj);
    }

    render() {
        return (
            <View>
                <Entrada atualizaValor={ this.atualizaValor } num1={ this.state.num1 }  num2={ this.state.num2 }/>
                <Operacao atualizaOperacao={ this.atualizaOperacao } operacao={ this.state.operacao }/>
                <Comando acao={ this.calcular } />
            </View>
        );
    }
}


export { Painel };