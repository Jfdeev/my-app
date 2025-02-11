import React from 'react';
import { View, FlatList, Text } from 'react-native';

interface StringListProps {
  items: { id: string; value: string }[];
}



const StringList: React.FC<StringListProps> = ({ items }) => {
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