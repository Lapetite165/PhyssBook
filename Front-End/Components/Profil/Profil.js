import React from "react";
import { Button, StyleSheet, Text, View, Linking } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { user } from "../../Helpers/AssoData";
import Avatar from "./Avatar";

class Profil extends React.Component {

    constructor(props){
        super(props)
        this.state={
            user:user
        }
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
        const user = this.state.user
        return (
            <View style={styles.body}>
                <Text style={styles.header}>Bonjoür</Text>
                <Avatar/>
                <Text style={styles.header}>{user.bucque} {user.famss}</Text>
                <Text style={styles.title}>Description</Text>
                <Text style={styles.description}>
                    Ici tu pourras retrouver toütes les informations nécessaires poür vivre un an'ss incr au TBK.
                </Text>
                <Text onPress={() => {this._openLink()}} style={styles.borgia}>Borgia</Text>
                <Text onPress={() => {this.props.navigation.navigate('Favoris')}} style={styles.borgia} >Mes favoris</Text>
                <View style={styles.button_container}>
                    <Button
                        title='Développement'
                        onPress={() => {this.props.navigation.navigate('Développeurs')}}
                    />
                    <Button
                        title='Create Post'
                        onPress={() => {this.props.navigation.navigate('CreatePost')}}
                    />
                    <Button
                        title='Clear Storage'
                        onPress={() => {this._clearStorage()}}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        textAlign:'center',
        fontSize:60,
        fontFamily:'Zagots',
        paddingVertical:3
    },
    body:{
        paddingVertical:5,
        paddingHorizontal:3
    },
    title:{
        fontFamily:'Zagots',
        marginVertical:5,
        fontSize:30,
        textDecorationLine:"underline"
    },
    description:{
        marginBottom:5,
        fontFamily:'Zagots', 
        fontSize:20
    },
    button_container:{
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