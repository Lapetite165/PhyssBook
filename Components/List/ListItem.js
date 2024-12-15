import moment from 'moment'
import React from 'react'
import { StyleSheet, View, Text, Image, Pressable } from 'react-native'
import { getImageFromApi } from '../../API/TMDBAPI'

class ListItem extends React.Component {

  constructor(props){
    super(props)
  }

  //Fonction permettant d'afficher si l'item de la liste est en favoris ou non
  //Ici ce ne sont que les assos qui peuvent être mise en favoris
  //donc la props isFavorite vaut undefined pour les posts
  _displayFavoriteImage = () => {
    //console.log(this.props)
    if (this.props.isFavorite){
      return(
        <Image
          style={styles.favorite_image}
          source={require('../../Images/ic_favorite.png')}
        />
      )
    }
  }

  //Fonction permettant de masquer la date sur la liste des asso (n'ayant pas de date de sortie) 
  _showDate = () => {
    const {data} = this.props
    if (data.startingDate != undefined){
      return (
        <View style={styles.date_container}>
          <Text style={styles.date_text}>{moment(data.startingDate).format('DD-MM-YYYY')} à {moment(data.startingDate).format('HH')}h{moment(data.startingDate).format('mm')}</Text>
        </View>
      )
    }
  }

  _displayReadBand = () => {
    const {data, readPost} = this.props
    if (readPost != undefined && readPost.findIndex(item => item === data.id) != -1 ){
      return (
        <View style={styles.read_banner} >
          <Image source={require('../../Images/logo-lu.png')} style={styles.isRead}></Image>
        </View>
      )
    }
  }

  //Rendu de la vue, 
  render() {
    const {data, displayDetailsInTheList } = this.props
    return (
      <Pressable
        onPress={() => displayDetailsInTheList(data.id)}
        style={styles.main_container} 
      >
        <View style={styles.image_container}>
          <Image
            style={styles.image}
            source={{uri: getImageFromApi(data.previewImage)}}
          />
        </View>
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            {this._displayFavoriteImage()}
            <Text style={styles.title_text} numberOfLines={2}>{data.title}</Text>
            {this._displayReadBand()}
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={6}>{data.overview}</Text>
          </View>
          {this._showDate()}
        </View>
      </Pressable>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection:'row',
    borderWidth:1
  },
  image_container: {
    height:180,
    width:120,
    margin:5,
    backgroundColor:'#000000'
  },
  image: {
    height:180,
    width:120
  },
  content_container:{
    flex:2,
    flexDirection:'column',
    padding:5
  },
  header_container:{
    flex:3,
    flexDirection:'row',
    padding:2,
    alignItems:'center',
    backgroundColor:'blue'
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
  date_container:{
    flex:1,
  },
  date_text:{
    textAlign:'right',
    flex:1,
    fontSize:16,
    paddingRight:5
  },
  isRead:{
    height:30,
    width:30
  }
})

export default ListItem