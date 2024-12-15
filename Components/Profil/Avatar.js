import React from 'react'
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native'
//Importer le document picker 
import { getDocumentAsync } from "expo-document-picker";

class Avatar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      avatar: require('../../Images/avatar-cinema-220.png')
    }
  }

  _avatarClicked() {
    getDocumentAsync().then((result) => {
        if (!result.cancelled) {
            let source = {uri:result.uri}
            console.log(source)
            //this.setState({avatar:source})
        } else {
            alert("Choix de l'image annulé")
        }
    })
  }

  render() {
    return(
        <View style={styles.body}>
            <TouchableOpacity
                style={styles.touchableOpacity}
                onPress={this._avatarClicked}
            >
                <Image style={styles.avatar} source={this.state.avatar} />
            </TouchableOpacity>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    body: {
        alignItems:'center'
    },
    touchableOpacity: {
        margin: 5,
        width: 100,
        height: 100
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: '#9B9B9B',
        borderWidth: 2
    }
})

export default Avatar