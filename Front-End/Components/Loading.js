import React from "react";
import { View, StyleSheet, Image } from "react-native";

export default class Loading extends React.Component {

    constructor(props){
        super(props)
    }
    
    render(){
        return (
            <View style={styles.body} >
                <Image source={require('../assets/splash.png')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body:{
        flex:1
    }
})