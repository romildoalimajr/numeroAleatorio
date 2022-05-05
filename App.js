import React, { useState } from 'react';
import { 
  Text, 
  SafeAreaView, 
  TouchableOpacity,
  StyleSheet 
} from 'react-native';

const App = () => {
  const [numero, setNumero] = useState(0);

  function handleNumero(){
    const newNumero = Math.floor(Math.random() * 10000);

    setNumero(newNumero);
  }

  return (
    
      <SafeAreaView style={style.container}>
        <Text style={style.numero}>{numero}</Text>
        <TouchableOpacity onPress={handleNumero} style={style.botao}>
          <Text>Gerar Número</Text>
        </TouchableOpacity>
      </SafeAreaView>
    
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#ff00bb',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numero: {
    fontSize: 38,
    color: '#fff',
    fontWeight: 'bold',
  },
  botao: {
    backgroundColor: '#fff',
    width: '80%',
    paddingHorizontal: 5,
    paddingVertical: 10, 
    borderRadius: 5,
    borderColor:'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;