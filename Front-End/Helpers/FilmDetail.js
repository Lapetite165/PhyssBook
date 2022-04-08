import moment from "moment"
import numeral from "numeral"
import React from "react"
import { StyleSheet, View, ActivityIndicator, ScrollView, Text, Image, TouchableOpacity } from "react-native"
import { getFilmsDetailFromApi, getImageFromApi } from "../API/TMDBAPI"
import { connect } from "react-redux"

class FilmDetail extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            film: undefined,
            isLoading: true
        }
    }

    componentDidMount(){
      //console.log('componentDidMount')
      getFilmsDetailFromApi(this.props.route.params.idDetails).then(data => {
        this.setState({
          film:data,
          isLoading:false
        })
      })
    }

    _toggleFavorite(){
      const action = {type: 'TOGGLE_FAVORITE', value: this.state.film}
      this.props.dispatch(action)
    }

    _displayFavoriteImage(){
      let sourceImage = require('../Images/ic_favorite_border.png')
      if (this.props.favoritesFilms.findIndex(item => item.id == this.state.film.id) !== -1){
        sourceImage = require('../Images/ic_favorite.png')
      }
      return (
        <Image 
          source={sourceImage}
          style={styles.favorite_image}
        />
      )
    }

    componentDidUpdate(){
      console.log('ComponentDidUpdate')
    }

    _displayFilm(){
      const film = this.state.film
      //console.log(film)
      if (film != undefined) {
        return(
          <ScrollView style={styles.scrollview_container}>
            <Image
              style={styles.image}
              source={{uri:getImageFromApi(film.backdrop_path)}}
            />
            <Text style={styles.title_text}>{film.title}</Text>
            <TouchableOpacity style={styles.favorite_container} onPress={() => this.toggleFavorite()}>
              {this._displayFavoriteImage()}
            </TouchableOpacity>
            <Text style={styles.description_text}>{film.overview}</Text>
            <Text style={styles.default_text}>Sorti le {moment(new Date(film.release_date)).format('DD/MM/YYYY')}</Text>
            <Text style={styles.default_text}>Note : {film.vote_average}</Text>
            <Text style={styles.default_text}>Nombre de votes : {film.vote_count}</Text>
            <Text style={styles.default_text}>Budget : {numeral(film.budget).format('0,0[.]00$')}</Text>
            <Text style={styles.default_text}>Genre(s) : </Text>
          </ScrollView>
        )
      }
    }

    _displayLoading(){
      if (this.state.isLoading==true){
        return(
          <View style={styles.loading_container}>
            <ActivityIndicator size='large'color='#00ff00'/>
          </View>
        )
      }
    }

    render() {
      //console.log('Screen :')
      //const idDetails = this.props.route.params.idDetails
      //console.log(idDetails)
      return (
          <View style={styles.main_container}>
            {this._displayFilm()}
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
    scrollview_container:{
      flex:1
    },
    image:{
      height:165,
      margin:5
    },
    title_text:{
      fontWeight:'bold',
      fontSize:35,
      flex:1,
      textAlign:'center',
      flexWrap:'wrap',
      marginLeft:5,
      marginRight:5,
      marginTop: 10,
      marginBottom:10
    },
    description_text:{
      fontStyle:'italic',
      margin:5,
      marginBottom:15,
      color:'#666666'
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
    favoritesFilms: state.favoritesFilms
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFavorite: () => dispatch(toggleFavorite({type: 'TOGGLE_FAVORITE', value: this.state.film}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetail)