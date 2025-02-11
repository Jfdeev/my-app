import React from 'react';
import { View, FlatList, Text } from 'react-native';

interface StringListProps {
  items: { id: string; value: string }[];
}



const StringList: React.FC<StringListProps> = ({ items }) => {

    // explicando o codigo: o componente StringList recebe uma propriedade chamada items
    // e que por sua vez essa propriedade é um array de objetos que contem um id e um valor
    // o componente usa o FlatList para renderizar os itens do array
    // assim por onde a Flatlist passar pode receber diferentes parametros para redenrizar diferentes tipos de itens

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
        <FlatList
            data={items}
            renderItem={({ item }) => <Text style={{fontSize: 23}}>{item.value}</Text>}
            keyExtractor={item => item.id}
        />
      </View>  
    )

}

export default StringList;