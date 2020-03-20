import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

import Cabecalho from './Cabecalho';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default props => (
    <View style={ styles.topo }>
        <Text style={ styles.txtTitulo }>Calculadora 1.0</Text>
    </View>
);

const styles = StyleSheet.create({
    topo: {
        backgroundColor: '#2196F3',
        padding: 10,
        alignItems: 'center'
    },
    txtTitulo: {
        fontSize: 25,
        textAlign: 'center',
        color: '#FFF'
        
    }
});
