import React from "react";
import { Button, Alert, View } from "react-native";

const HelloButton = () => {
    const handlePress = () => {
        Alert.alert('Hello, World!');
        // nao estava funcionando, mas a logica nao esta errada, pode ser pq eu estava rodando o app na web
        // caso rodar na web e nao funcionar descomente isso
        // alert("Hello, World!");
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Say Hello" onPress={handlePress} />
        </View>
    )
}

export default HelloButton;