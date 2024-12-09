import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export class AgendaItem extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        const {data, displayDetailsInTheList} = this.props
        console.log(data)
        return(
            <Pressable onPress={() => displayDetailsInTheList(data.id)} >
                <View style={styles.agenda_item} >
                    <Text>De {data.startingDate} à {data.endingDate}</Text>
                    <Text style={styles.event_name}>{data.title}</Text>
                    <Text style={styles.description_text} >
                        Organisateurs de la manip : {data.organizers.join(', ')}
                    </Text>
                    <Text></Text>
                </View>
            </Pressable>
            
        )
    }
}

const styles = StyleSheet.create({
    agenda_item:{
        height:100,
        backgroundColor:'white',
        padding:5
    },
    date_container:{
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    event_name:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center'
    },
    description_text:{
        color:'gray',
        fontStyle:'italic'
    }
})