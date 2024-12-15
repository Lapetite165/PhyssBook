import React from "react"
import { StyleSheet, View, ActivityIndicator, ScrollView, Text, Image, Pressable, Button } from "react-native"
import { connect } from "react-redux"
import { readPost, toggleFavoritePost } from "../../Store/Actions"
import { getImageFromApi } from '../../API/TMDBAPI'
import { PostData } from "../../Helpers/AssoData"
import { applyTheme } from "../../Themes/ApplyTheme"
//Importer les interfaces TS
import { Post } from "../../Interfaces/Post"

class PostDetails extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      post: undefined,
      isLoading: true,
      test:false
    }
  }

  //Après le rendu (fonction render), la fonction componentDidMount() est appelée
  //On recupère l'id du post dans une const id
  //on recupère les données du post grâce à l'id
  //on modifie le state avec les données du post et on arrête l'Activity Indicator
  //La Vue se re-rend
  componentDidMount(){
    //console.log('componentDidMount')
    const id = this.props.route.params.idDetails
    const data = PostData.filter(item => item.id === id)[0] || this.props.route.params.post
    if (data === this.props.route.params.post){
      this.setState({test:true})
    }
    this.setState({
      post: data,
      isLoading: false
    })
    console.log('ComponentDidMount')
    console.log(this.state.post)
    if (!this.state.test){
      this.props.dispatch(readPost(data.id))
    }
  }

  //Fonction qui permet d'ajouter/retirer une asso des favoris dans le state global redux
  _toggleFavorite(){
    console.log('ToggleFavorite')
    this.props.dispatch(toggleFavoritePost(this.state.post))
  }

  //Animation qui permet de voir si l'asso est dans les favoris et retourne une image coeur plein/vide
  _displayFavoriteImage(){
    console.log('DisplayFavoriteImage')
    let sourceImage = require('../../Images/ic_favorite_border.png')
    console.log(this.props)
    if (this.props.favorite.findIndex(item => item.id == this.state.post.id) !== -1){
      sourceImage = require('../../Images/ic_favorite.png')
    }
    return (
      <Image 
        source={sourceImage}
        style={styles.favorite_image}
      />
    )
  }

  //Une fois que la vue se re-rend, on appelle la fonction displayPost (analogua à displayAsso) pour faire afficher les détails
  _displayPost(){
    const post = this.state.post
    console.log('Readed post number')
    console.log(this.props.read)
    //J'ai externalisé cette partie du code dans une fonction pour utiliser la condition avec if
    if (post != undefined) {
      return(
        <ScrollView style={applyTheme(post.organizers[0].title).main_container}>
          <Image
            style={styles.image}
            source={{uri:getImageFromApi(post.poster_path)}}
          />
          <Text style={styles.title_text}>{post.title}</Text>
          <Text style={styles.peks_title_text}>{post.peks_title}</Text>
          <Pressable style={styles.favorite_container} onPress={() => this._toggleFavorite()}>
            {this._displayFavoriteImage()}
          </Pressable>
          <Text style={styles.description_text}>{post.description}</Text>
          <Text style={styles.member_text}>Organisateurs de l'évenement :</Text>
          <Text style={styles.default_text}>{post.organizers.map(function(organizers) {return organizers.title}).join('/')}</Text>
          <Text style={styles.default_text}></Text>
          {this._displaySendPostButton()}
        </ScrollView>
      )
    }
  }

  //Faire afficher le chargement lors de la récupération des informations du post
  _displayLoading(){
    if (this.state.isLoading==true){
      return(
        <View style={styles.loading_container}>
          <ActivityIndicator size='large'color='#00ff00'/>
        </View>
      )
    }
  }

  //Afficher le boutton pour envoyer le post lors de la création de posts
  _displaySendPostButton(){
    if (this.state.test){
      return(
        <View>
          <Button title='Send Post' onPress={this._handleSendPost()}></Button>
        </View>
      )
    }
  }

  //Gérer ce que fait le boutton Send Post
  _handleSendPost(){
    //this.props.dispatch()
  }

  //Première fonction appelée à l'affichage de la vue
  render() {
    const idDetails = this.props.route.params.idDetails
    console.log('Details Screen :')
    console.log(idDetails)
    console.log(this.state.post)
    return (
        <View style={styles.main_container}>
          {this._displayPost()}
          {this._displayLoading()}
        </View>
    )
  }
}

const styles = StyleSheet.create({
    main_container:{
        flex:1
    },
    loading_container:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    image:{
      height:165,
      margin:5
    },
    title_text:{
      fontWeight:'bold',
      fontSize:40,
      flex:1,
      textAlign:'center',
      marginLeft:5,
      marginRight:5,
      marginTop: 10
    },
    peks_title_text:{
      fontStyle:'italic',
      fontSize:16,
      flex:1,
      textAlign:'center',
      marginBottom:10
    },
    description_text:{
      fontStyle:'italic',
      margin:5,
      marginBottom:15
    },
    member_text:{
      fontSize:25,
      textDecorationLine:'underline',
      marginBottom:5
    },
    default_text:{
      marginLeft:5,
      marginRight:5,
      marginTop:5
    },
    favorite_container:{
      alignItems:'center'
    },
    favorite_image:{
      width: 40,
      height:40
    }
})

const mapStateToProps = (state) => {
  return {
    favorite: state.post.favoritePost,
    read:state.read.readPost
  }
}

export default connect(mapStateToProps)(PostDetails)