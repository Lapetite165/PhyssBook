import React from "react"
import { View, StyleSheet, TextInput, Button } from "react-native"
import List from "../List/List"
import { AssoData } from "../../Helpers/AssoData"

export default class Organigramme extends React.Component {

  constructor(props){
    super(props)
    this.state={
      asso: AssoData,
      isLoading:false
    },
    this.page = 1,
    this.totalPages = 5,
    this.searchedText = ''
  }

  //Fonction pour changer de vue
  _displayDetails(){
    this.props.navigation.navigate("Détails de l'asso")
  }

  //Fonction pour charger plus de posts
  _loadAsso = () => {
    this.setState({isLoading: true})
    this.setState({
      asso: this.state.asso.concat(AssoData),
      isLoading: false 
    })
  }
  
  //Fonction permettant d'afficher l'indicateur de chargement
  _displayLoading(){
    if (this.state.isLoading){
      return(
        <View style={styles.loading_container}>
          <ActivityIndicator size='large'color='#00ff00'/>
        </View>
      )
    }
  }

  //Fonction permettant d'afficher 
  _toggleSearchBar = () => {
    console.log('DisplaySearchBar')
    //console.log(this.props.extraData)
    if(this.props.extraData){
      return (
        <View style={styles.header_container}>
          <TextInput 
            onChangeText={(text) => this.searchedText = text}
            onSubmitEditing={() => {this._searchAssos()}}
            placeholder= 'Titre du post'
            style={styles.textInput}
          />
          <Button title="Rechercher" onPress={() => {this._searchAssos()} }/>
        </View>
      )
    }
  }
  
  //Fonction permettant de rechercher un post dans la barre de recherche
  //page, totalPage et posts sont remis à zero à chaque fois que la fonction est appelée
  _searchAssos = () => {
    if (this.searchedText != '' && this.searchedText != undefined) {
    }
  }

  //On fait passer les props utilisée dans le component List
  render(){
    console.log('Organigramme')
    return (
      <View style={styles.main_container}>
        {this._toggleSearchBar()}
        <List
          type='asso'
          data={this.state.asso}
          navigation={this.props.navigation}
          loadData={this._loadAsso}
          searchedText = {undefined}
          page={this.page}
          totalPages={this.totalPages}
        />
      </View>
      )
  }
}

const styles = StyleSheet.create({
  main_container:{
    flex:1,
    backgroundColor:'gray'
  },
    image_container: {
      height:180,
      width:120,
      margin:5,
      backgroundColor:'#000000'
    },
    image: {
      height:180,
      width:120,
      backgroundColor:'#00ff00'
    },
    content_container:{
      flex:2,
      flexDirection:'column',
      padding:5
    },
    header_container:{
      paddingHorizontal:5,
      height:110
    },
    textInput: {
      marginHorizontal: 8,
      marginBottom: 5,
      marginTop:10,
      height: 50,
      borderColor: '#000000',
      backgroundColor:'white',
      borderWidth: 2,
      paddingLeft: 5
    },
    favorite_image:{
      width:30,
      height:30
    },
    title_text: {
      textAlign:'center',
      textAlignVertical:'center',
      flex:3,
      fontSize:20,
      flexWrap:'wrap',
      fontWeight:'bold'
    },
    description_container:{
      flex:6,
      padding:2
    },
    description_text:{
      fontStyle:'italic',
      fontSize:13
    },
    loading_container:{
      position:'absolute',
      left:0,
      right:0,
      top:100,
      bottom:0,
      alignItems:'center',
      justifyContent:'center'
    }
  })