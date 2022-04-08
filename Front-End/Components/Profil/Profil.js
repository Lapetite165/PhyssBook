import React from "react";
import { Button, StyleSheet, Text, View, Linking, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

class Profil extends React.Component {

    constructor(props){
        super(props)
    }

    _displayView = (view) => {
        console.log('Display Favorites')
        this.props.navigation.navigate(view)
    }

    _openLink(){
        const url = 'https://bordels.borgia-app.com/'
        if (Linking.canOpenURL(url)) {
            Linking.openURL(url)
        }
    }

    _clearStorage = () => {
        console.log('Clearing')
        AsyncStorage.clear(error => console.log(error)).then(() => console.log('Storage cleaned'))
    }


    render () {
        console.log('Profil')
        console.log(this)
        return (
            <View>
                <Text style={styles.header}>Bonjoür Utilisateur</Text>
                <Text style={styles.title}>Description</Text>
                <Text style={styles.description}>
                    Ici tu pourras retrouver toütes les informations nécessaires poür vivre un an'ss incr au TBK.
                </Text>
                <Text onPress={() => {this._openLink()}} style={styles.borgia}>Borgia</Text>
                <Text onPress={() => {this._displayView('Favoris')}} style={styles.borgia} >Favoris</Text>
                <View style={styles.button_container}>
                    <Button
                        title='Développement'
                        onPress={() => {this._displayView('Développeurs')}}
                    />
                    <Button
                        title='CreatePost'
                        onPress={() => {this._displayView('CreatePost')}}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        textAlign:'center',
        fontSize:40,
        fontFamily:'Zagots'
    },
    title:{
        fontFamily:'Zagots',
        marginVertical:5,
        marginLeft:3,
        fontSize:20
    },
    description:{
        marginBottom:5,
        fontFamily:'Zagots', 
        fontSize:15
    },
    button_container:{
        width:100,
        height:100,
        alignItems:'center',
        backgroundColor:'gray'
    },
    borgia:{
        fontSize:40,
        color:'blue',
        textDecorationLine:'underline',
        marginLeft:3
    }
})

export default Profil