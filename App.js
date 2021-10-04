import React, { useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet, 
  Text, 
  TextInput, 
  View 
} from 'react-native';

export default function EntradaDeDados() {
  const [descricao, setDescricao] = useState ('')
  const [fabricante, setFabricante] = useState('')
  const [ExibeItens, setItem] = useState([])
  const [contador, setContador] = useState(0)

  const capturarDescricao = (descricao) => {
    setDescricao(descricao)
  }

  const capturarFabricante = (fabricante) => {
    setFabricante(fabricante)
  }

  const adicionarItem = () => {
    setItem (ExibeItens => {
      setContador (contador + 1)
      let aux = [{key: contador.toString(), value: "Descrição: " + descricao + '\n' + "Fabricante: " + fabricante}, ...ExibeItens]
      setDescricao('')
      setFabricante('')
      console.log (aux)
      return aux
    })
  }

  return (
    <View
      style={styles.telaPrincipalView}>
      <View>
        <TextInput 
          placeholder="Descrição do Item"
          style={styles.itemTextInput}
          onChangeText={capturarDescricao}
          value={descricao}
        />
        <TextInput 
          placeholder="Fabricante do Item"
          style={styles.itemTextInput}
          onChangeText={capturarFabricante}
          value={fabricante}
        />
        <Button 
          title="Cadastrar"
          onPress={adicionarItem}
        />
      </View>
      <View
        style={{marginTop: 40}}>
        <FlatList 
          data={ExibeItens}
          renderItem={(ExibeItens) => (
            <View 
              style={styles.itemNaLista}>
              <Text>{ExibeItens.item.value}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  telaPrincipalView: {
    padding: 100
  },
  itemTextInput :{
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
    marginBottom: 8,
    padding: 8,
    textAlign: 'center'
  },
  itemNaLista: {
    padding: 12,
    backgroundColor: '#CCE',
    borderColor: '#CCC',
    marginBottom: 8,
    borderRadius: 8,
    textAlign: 'center',
  }
});
