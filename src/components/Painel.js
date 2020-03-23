import React, { Component } from 'react';
import { View, Text} from 'react-native';
import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';


class Painel extends Component {
    render() {
      return (
        <View>
          <Entrada atualizaValor={ this.props.atualizaValor } num1={ this.props.num1 }  num2={ this.props.num2 }/>
          <Operacao atualizaOperacao={ this.props.atualizaOperacao } operacao={ this.props.operacao }/>
          <Comando acao={ this.props.calcular } />
        </View>
      );
    }
}


export { Painel };