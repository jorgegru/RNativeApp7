import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Numero from './Numero'

export default props => (
    <View style={ styles.numeros }>
        <Numero name='num1' num={ props.num1 } atualizaValor={ props.atualizaValor } />
        <Numero name='num2' num={ props.num2 } atualizaValor={ props.atualizaValor } />
    </View>
)

const styles = StyleSheet.create({
    numeros: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});