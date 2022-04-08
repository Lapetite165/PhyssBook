import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
//import {connect} from 'react-redux'
import { Agenda} from 'react-native-calendars'
import { AgendaItem } from './AgendaItem'
import { markedEvents } from './MarkedEvents'
//Importer les fonctions pour vérifier les permissions de l'utilisateur
import { calendarStatusCheck } from '../../API/Permissions'
import { createEventAsync } from 'expo-calendar'
import { connect } from 'react-redux'
import { getCalendars } from '../../API/CalendarAPI'

class CalendarComponent extends React.Component {

    constructor(props){
        super(props)
        this.state={
            selectedDay:undefined,
            isVisible:false,
            calendars:undefined
        }
    }

    componentDidMount(){
        calendarStatusCheck().then(() => console.log('Calendar Component Did Mount'))
        this._createEvents()
    }

    _createEvents = async () => {
        const calendars = await getCalendars()
        .then(() => {
            this.setState({calendars:calendars})
            console.log(calendars)
        })
        //createEventAsync()
    }

    _displayDetailsInTheList = (idDetails) => {
        console.log("Display post " + idDetails)
        this.props.navigation.navigate('Détails', {idDetails: idDetails})
        console.log('navigate')
    }

    render(){
        return(
            <View>
                <Text style={styles.text} >Calendrier</Text>
                <View style={styles.calendar_container} >
                    <Agenda
                    items={markedEvents}
                      renderItem={(item) => (
                            <AgendaItem
                            data={item}
                            displayDetailsInTheList={this._displayDetailsInTheList}
                            />
                        )}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text:{
        flex:1
    },
    calendar_container:{
        height:800
    }
})

const mapStateToProps = (state) => {
    console.log('MapStateToProps')
    return {
      favorite: state.asso.favoriteAsso
    }
}

export default connect(mapStateToProps)(CalendarComponent)