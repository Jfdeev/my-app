import React from "react";
import { Button, Alert, View } from "react-native";

const HelloButton = () => {
    const handlePress = () => {
        Alert.alert('Hello, World!');
        // nao estava funcionando, mas a logica nao esta errada, pode ser pq eu estava rodando o app na web
        // caso rodar na web e nao funcionar descomente isso
        // alert("Hello, World!");
    }

    // explicando o codigo: o usuario ao pressionar o butão diapara a função handlePress 
    // que por sua vez dispara um alerta com a mensagem "Hello, World!"
    // o alerta é um componente do react native que exibe uma mensagem na tela do usuario

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Say Hello" onPress={handlePress} />
        </View>
    )
}

export default HelloButton;