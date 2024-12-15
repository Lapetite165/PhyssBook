import React from "react";
import {StyleSheet, Text, View, Image, TextInput, Pressable} from "react-native";
import { connect } from 'react-redux'
 
class ConnectionPage extends React.Component {
  constructor(props){
    super(props)
    this.username='',
    this.password=''
  }

  _manageOnPressLogin = () => {
    //this.props.dispatch(toggleFavoritePost(this.state.post))
    console.log({
      username:this.username,
      password:this.password
    })
    if (this.username != '' && this.username != undefined && this.password != '' && this.password != undefined){
      this.props.navigation.navigate('LoadingPage')
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("../../assets/icon.png")} />
        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            placeholder="Utilisateur"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.username=text}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            placeholder="Mot de passe"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(text) => this.password=text}
            onSubmitEditing={this._manageOnPressLogin}
          />
        </View>
        <View>
          <Text 
            style={styles.forgot_button}
            onPress={()=>{this.props.navigation.navigate("Mot de passe oublié")}}
          >Mot de passe oublié ?</Text>
        </View>
        <Pressable 
          onPress={this._manageOnPressLogin}
          style={styles.loginBtn}
        >
          <Text style={styles.loginText}>CONNEXION</Text>
        </Pressable>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    marginBottom: 40,
    height:80,
    width:80
  },
  inputView: {
    backgroundColor: "gray",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20
  },
  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20
  }, 
  forgot_button: {
    height: 30,
    marginBottom: 30
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493"
  }
})

const mapStateToProps = (state) => {
    return {
      user: state.user,
      password: state.password
    }
}

export default connect(mapStateToProps)(ConnectionPage)