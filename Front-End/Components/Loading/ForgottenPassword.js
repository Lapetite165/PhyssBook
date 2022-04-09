import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export class FrogottenPassword extends React.Component {
    constructor(props){
        super(props)
        this.email = ""
    }

    render(){
        return(
            <View>
                <Text style={styles.title}>Récupération du mot de passe</Text>
                <Text style={styles.body}>Bien joué champion, pense à utiliser un mot de passe dont tu te souviens la prochaine fois</Text>
                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Email"
                        placeholderTextColor="#003f5c"
                        onChangeText={(text)=> this.email = text}
                    />
                </View>  
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title:{
        padding:10
    },
    body:{
        textDecorationStyle:'dotted',
        textDecorationColor:'#FF0000',
        paddingHorizontal:10,
        paddingBottom:5
    },
    textInput: {
        paddingHorizontal: 10,
        marginHorizontal:10,
        borderWidth:1,
        height:50
    }
})