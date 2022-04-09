import React from 'react'
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import { loadAsync, isLoaded } from 'expo-font'
import registerForPushNotificationsAsync from '../../API/ManagePushNotifications'
import { getCalendarsId } from '../../API/CalendarAPI'

//Importer les fonctions pour vérifier les permissions de l'utilisateur
import { mediaLibraryStatusCheck } from '../../API/Permissions'

//Interfaces ts


class LoadingPage extends React.Component {

    constructor(props){
        super(props)
        this.expoNotificationToken=undefined
        this.state={
            areLoading:'des polices 1/3',
            Bahnschrift: isLoaded('Bahnschrift')
        }
    }

    componentDidMount = () => {
        this._areFontsLoaded()
    }

    //Chargement des polices
    _areFontsLoaded = () => {
        loadAsync({
            'Bahnschrift':{uri:require('../../Fonts/Bahnschrift.ttf')},
            'Century Gothic':{uri:require('../../Fonts/CenturyGothic.ttf')},
            'Zagots':{uri:require('../../Fonts/ZagotsBordels.ttf')},
            'Comic Sans Ms':{uri:require('../../Fonts/ComicSansMs.ttf')},
            'Helvetica':{uri:require('../../Fonts/Helvetica.ttf')},
            'Lato':{uri:require('../../Fonts/Lato.ttf')},
            'Times New Roman':{uri:require('../../Fonts/TimesNewRoman.ttf')}
        })
            .then(() => {
                this._getCalendarsId()
            })
    }

    //Récupérer les ids des calendriers
    _getCalendarsId = () => {
        this.setState({areLoading:'des calendriers 2/3'})
        getCalendarsId()
            .then(
                this._getPushToken()
            )
    }

    _getMediaLibraryPermissions = () => {
        this.setState({areLoading:'des permissions médias 3/4'})
        mediaLibraryStatusCheck()
            .then(
                () => null,
                () => alert(
                    "Media Library Permission not allowed. On your phone : go to Settings>Apps>Permissions>...>Allow media library"
                )
            )
    }

    _getPushToken = () => {
        this.setState({areLoading:'du token 4/4'})
        registerForPushNotificationsAsync().then(token => {
            //console.log(token)
            if (token != undefined){
                this.props.navigation.navigate('Mon Profil Login', {screen:'Profil'})
                //this.props.dispatch(sendNotificationToken(token))
            }
        })
    }

    render(){
        return(
            <View style={styles.mainview}>
                <ActivityIndicator size='large'color='#050C98' />
                <Text>Chargement {this.state.areLoading}</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    mainview:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

const mapStateToProps = (state) => {
    return {
      token: state.token
    }
}

export default connect(mapStateToProps)(LoadingPage)