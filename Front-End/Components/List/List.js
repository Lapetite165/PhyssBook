import React from 'react'
import moment from 'moment'
import { StyleSheet, FlatList } from 'react-native'
import ListItem from './ListItem'
import { connect } from 'react-redux'

class List extends React.Component {

  constructor(props) {
    super(props)
  }

  _displayDetailsInTheList = (idDetails) => {
    console.log("Display post " + idDetails)
    this.props.navigation.navigate('Détails', {idDetails: idDetails})
    console.log('navigate')
  }

  _dispatchProps = (type, item) => {
    console.log('DispatchProps')
    //console.log(this)
    switch (type){
      case 'post':
        console.log('Post')
        console.log(this.props.favorite.Post)
        return (this.props.favorite.Post.findIndex(data => data.id === item.id) !== -1) ? true : false
      case 'asso':
        //console.log(this.props.favorite.Asso)
        return (this.props.favorite.Asso.findIndex(data => data.id === item.id) !== -1) ? true : false
      default :
        return false
    }
  }

  render() {
      console.log('List')
    return (
      <FlatList
        style={styles.list}
        data={this.props.data}
        extraData={this.props.favorite}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <ListItem
            data={item}
            isFavorite={this._dispatchProps(this.props.type, item)}
            displayDetailsInTheList={this._displayDetailsInTheList}
            readPost={this.props.readPost}
          />
        )}
        onEndReachedThreshold={0.8}
        onEndReached={() => {
          if (this.props.page < this.props.totalPages) {
            if (this.props.searchedText != '') {
              this.props.loadData(this.props.searchedText)
            } else {
              this.props.loadData(moment(Date.now()).format('YYYY-MM-DD'))
            }
          }
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1
  }
})

//On récupère le state du store de reducers
const mapStateToProps = (state) => {
  console.log('MapStateToProps for List')
  console.log(state)
  console.log('Promise.result')
  return {
    favorite: {
      Post: state.post.favoritePost,
      Asso: state.asso.favoriteAsso
    },
    readPost:state.read.readPost
  }
}

//On connecte le state et la vue
export default connect(mapStateToProps)(List)