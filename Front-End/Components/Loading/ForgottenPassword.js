import React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

export class FrogottenPassword extends React.Component {
    constructor(props){
        super(props)
        this.email = ""
    }

    render(){
        return(
            <View>
                <Text style={styles.title}>Récupération du mot de passe</Text>
                <Text style={styles.body}>Bien joué jeune gadz sauvage, pense à utiliser un mot de passe dont tu te souviens la prochaine fois !</Text>
                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Email"
                        placeholderTextColor="#003f5c"
                        onChangeText={(text)=> this.email = text}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonLeft}></View>
                    <View style={styles.buttonRight}>
                        <Button
                            title="Send"
                            onPress={()=>{
                                console.log(this.email)
                                alert("Contacte un administrateur")
                            }}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title:{
        padding:10,
        fontSize:25,
        fontWeight:"bold"
    },
    body:{
        paddingHorizontal:10,
        paddingBottom:5,
        color:'gray',
        fontStyle:"italic",
        fontSize:15
    },
    textInput: {
        paddingHorizontal: 10,
        marginHorizontal:10,
        borderWidth:1,
        height:50
    },
    buttonContainer:{
        flexDirection:'row',
        marginTop:10,
        margin:5
    },
    buttonLeft:{
        height:50,
        flex:2
    },
    buttonRight:{
        height:50,
        flex:1
    }
})