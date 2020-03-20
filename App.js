import React from 'react';
import { View } from 'react-native';

import { Topo, Resultado, Painel } from './src/components';

export default function App() {
  return (
    <View >
      <Topo />
      <Resultado />
      <Painel />
    </View>
  );
}


