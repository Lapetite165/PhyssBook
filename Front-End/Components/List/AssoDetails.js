//Importer React
import React from "react"
//Importer les components React Native
import { StyleSheet, View, ActivityIndicator, ScrollView, Text, Image, Pressable } from "react-native"
//Importer React-redux pour le state global
import { connect } from "react-redux"
//Importer les actions à effectuer par Redux
import { toggleFavoriteAssoAsync } from "../../Store/Actions"
//Importer les fonctions et les données via l'API
import { getImageFromApi } from '../../API/TMDBAPI'
import { getAssoDetailsFromApi } from "../../API/AssoDataAPI"
//Importer la liste pour afficher les membres
import MemberItem from "./MembersItem"
//Importer les thêmes pour les assos
import { LinearGradient } from "expo-linear-gradient"
import { applyTheme } from "../../Themes/ApplyTheme"

class AssoDetails extends React.Component {

  //Au chargement de la vue, on lance l'indicateur et on défini asso dans le state 
  constructor(props){
    super(props)
    this.state = {
      asso: undefined,
      isLoading: true,
      calendarId:undefined
    }
  }

  //Une fois le rendu (render) effectué, on va chercher les données de l'asso et on re-rend la vue
  componentDidMount(){
    //console.log('componentDidMount')
    this.setState({
      asso: getAssoDetailsFromApi(this.props.route.params.idDetails),
      isLoading: false
    })
  }

  //Animation qui permet de voir si l'asso est dans les favoris et retourne une image coeur plein/vide
  _displayFavoriteImage = () => {
    console.log('DisplayFavoriteImage')
    console.log(this.props)
    let sourceImage = require('../../Images/ic_favorite_border.png')
    //Si l'asso fait partie du state global favoriteAsso
    if (this.props.favorite.findIndex(item => item.id == this.state.asso.id) !== -1) {
      sourceImage = require('../../Images/ic_favorite.png')
    }
    return (
      <Image 
        source={sourceImage}
        style={styles.favorite_image}
      />
    )
  }

  
  //Fonction qui permet d'ajouter/retirer une asso des favoris dans le state global redux
  _handleToggleFavorite = () => {
    console.log('HandleToggleFavorite')
    //console.log(this)
    this.setState({isLoading:true})
    this.props.toggleFavoriteAssoAsync(this.state.asso)
    this.setState({isLoading:false})
  }

  //Une fois que la vue se re-rend, on appelle la fonction displayAsso (analogue à displayPost) pour faire afficher les détails
  _displayAsso = () => {
    const asso = this.state.asso
    console.log('DisplayAsso')
    if (asso != undefined) {
      console.log(asso)
      //style={applyTheme(asso.title).main_container}
      return(
        <LinearGradient colors={this._manageColors()}>
          <Image
            style={styles.image}
            source={{uri:getImageFromApi(asso.previewImage)}}
          />
          <Text style={styles.title_text}>{asso.title}</Text>
          <Text style={styles.peks_title_text}>{asso.peksTitle}</Text>
          <Pressable style={styles.favorite_container} onPress={() => this._handleToggleFavorite(asso)}>
            {this._displayFavoriteImage()}
          </Pressable>
          <Text style={styles.description_text}>{asso.overview}</Text>
          <Text style={styles.member_text}>Membres de l'asso :</Text>
          <MemberItem
            data={asso.members}
          />
          <Text></Text>
          <Text style={styles.default_text}>Companie(s) : film.production_companies.map(function(company)return company.name;).join('/')</Text>
        </LinearGradient>
      )
    }
  }

  //permet aux assos de choisir un fond uni ou un fond en dégradé
  _manageColors = () => {
    const color = this.state.asso.color
    console.log('ManageColors')
    console.log(typeof color) 
    if (typeof color === 'string' ){
      return [color, color]
    } else {
      console.log('Color2')
      return color
    }
  }

  _displayLoading(){
    if (this.state.isLoading){
      return(
        <View style={styles.loading_container}>
          <ActivityIndicator size='large'color='#00ff00'/>
        </View>
      )
    }
  }

  render() {
    //const idDetails = this.props.route.params.idDetails
    console.log('Render')
    //console.log(idDetails)
    //console.log(this)
    return (
      <ScrollView style={styles.main_container}>
        {this._displayAsso()}
        {this._displayLoading()}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  main_container:{
    flex:1
  },
  loading_container:{
    alignItems:'center',
    justifyContent:'center'
  },
  image:{
    height:165,
    margin:5,
    resizeMode:'contain'
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
  console.log('MapStateToProps')
  return {
    favorite: state.asso.favoriteAsso
  }
}

const mapDispatchToProps = {
  toggleFavoriteAssoAsync
}

export default connect(mapStateToProps, mapDispatchToProps)(AssoDetails)