import React from 'react'
import moment from 'moment'
import {StyleSheet, View, Button, TextInput, ActivityIndicator} from 'react-native'
import List from '../List/List'
import { PostData } from '../../Helpers/AssoData'


class Search extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      posts : [],
      isLoading : false
    }
    this.searchedText = ""
    this.page = 0
    this.totalPages = 0
  }

  componentDidMount(){
  this._loadPosts(moment(Date.now()).format('YYYY-MM-DD'))
  }

  //Fonction permettant de récupérer les post via l'Api
  _loadPosts = () => {
    this.setState({isLoading: true})
    this.setState({
      posts: this.state.posts.concat(PostData),
      isLoading: false 
    })
  }
  
  //Fonction permettant d'afficher le chargement
  _displayLoading=()=>{
    if (this.state.isLoading){
      return(
        <View style={styles.loading_container}>
          <ActivityIndicator size='large'color='#00ff00'/>
        </View>
      )
    }
  }

  //Fonction recupérant le texte écrit
  _searchText = (text) => {
    this.searchedText = text
  }

  //Fonction permettant de rechercher un post dans la barre de recherche
  //page, totalPage et posts sont remis à zero à chaque fois que la fonction est appelée
  _searchPosts = () => {
    if (this.searchedText != '' && this.searchedText != undefined) {
      this.page = 0
      this.totalPages = 0
      this.setState(
        {posts: []},
        () => {this._loadPosts(this.searchedText)}
      )
    }
  }

  //Fonction permettant d'afficher 
  _toggleSearchBar=()=>{
    console.log('DisplaySearchBar')
    //console.log(this.props.extraData)
    if(this.props.extraData){
      return (
        <View style={styles.header_container}>
          <TextInput 
            onChangeText={(text) => this._searchText(text)}
            onSubmitEditing={() => {this._searchPosts()}}
            placeholder= 'Titre du post'
            style={styles.textInput}
          />
          <Button title="Rechercher" onPress={() => {this._searchPosts()} }/>
        </View>
      )
    }
  }

  render(){
    console.log('Search')
    //console.log(this.props)
    //console.log(this.props.extraData)
    return(
      <View style={styles.main_container}>
        {this._toggleSearchBar()}
        {this._displayLoading()}
        {}
        <View style={styles.main_container}>
          <List
            type='post'
            data={this.state.posts}
            navigation={this.props.navigation}
            loadData={this._loadPosts}
            searchedText={this.searchedText}
            page={this.page}
            totalPages={this.totalPages}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header_container:{
    paddingHorizontal:5,
    height:110
  },
  main_container:{
    flex:1,
    backgroundColor:'gray'
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
  list:{
    height:10,
  },
  loading_container:{
    position:'absolute',
    left:0,
    right:0,
    top:200,
    bottom:0,
    alignItems:'center',
    justifyContent:'center'
  }
})

export default Search
