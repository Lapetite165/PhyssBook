//Importer React
import React from 'react'
//Importer les components utiles au rendu
import { Pressable, Text, View, StyleSheet } from 'react-native'
//Importer la mise en forme de la liste des posts
import List from "../List/List"
//Importer Redux
import { connect } from 'react-redux'

class FavoriteView extends React.Component {

    constructor(props){
        super(props)
        this.state={
            isLoading:false,
            favorites:'assos'
        }
    }

    _handleSelector = () => {
        switch(this.state.favorites){
            case 'assos':
                return this.props.favoriteAsso
            case 'posts':
                return this.props.favoritePost
        }
    }

    _handlePressableColor(type){
        if(this.state.favorites === type){
            return styles.selcted_selector_container
        } else {
            return styles.selector_container
        }
    }

    render(){
        console.log('Favorites')
        console.log(this.state)
        return (
            //On transmet la liste de posts favoris aux composant en tant que liste à afficher
            <View style={styles.main_container}>
                <View style={styles.pressable_container}>
                    <Pressable style={this._handlePressableColor('assos')} onPress={() => this.setState({favorites:'assos'})}>
                        <Text style={styles.text}>Assos</Text>
                    </Pressable>
                    <Pressable style={this._handlePressableColor('posts')} onPress={() => this.setState({favorites:'posts'})}>
                        <Text style={styles.text}>Posts</Text>
                    </Pressable>
                </View>
                <View style={styles.list_container}>
                    <List
                        data={this._handleSelector()}
                        navigation={this.props.navigation}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container:{
        flex: 1,
        backgroundColor:'gray'
    },
    pressable_container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderTopWidth:1,
        borderEndWidth:1
    },
    list_container:{
        flex:9,
        borderTopWidth:1,
        borderEndWidth:1
    },
    selector_container:{
        flex:1,
        borderStartWidth:1,
        borderEndWidth:1,
        opacity:0.2
    },
    selcted_selector_container:{
        flex:1,
        borderStartWidth:1,
        borderEndWidth:1
    },
    text:{
        flex:1,
        fontSize:40,
        textAlign:'center'
    }
})

//On récupère le state du store de reducers
const mapStateToProps = (state) => {
    return {
      favoritePost: state.post.favoritePost,
      favoriteAsso: state.asso.favoriteAsso
    }
}

//On connecte le state et la vue
export default connect(mapStateToProps)(FavoriteView)