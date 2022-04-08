import React from 'react'
import { Text, FlatList, Image, StyleSheet, View } from 'react-native'
import { AssoData } from '../../Helpers/AssoData'

export default class MemberItem extends React.Component {

    //On récupère les props
    constructor(props){
        super(props)
    }

    //
    _displayMembers = (item) => {
        const member = item
        return(
            <View style={styles.member_container}>
                <View style={styles.title_container}>
                    <Text style={styles.member_title} adjustsFontSizeToFit={true} >{member.title}</Text>
                </View>
                <View style={styles.name_container}>
                    <Text style={styles.member_bucque}>{member.bucque}</Text>
                    <Text style={styles.member_famss}>{member.famss}</Text>
                </View>
                <View style={styles.img_container}>
                    <Image source={require('../../Images/avatar-cinema-220.png')} style={styles.img}/>
                </View>
                <Text style={styles.member_name}>{member.name}</Text>
                <Text style={styles.member_description}>{member.description}</Text>
            </View>
        )
    }


    render(){
        const members = this.props.data
        //console.log('Members')
        //console.log(this)
        return (
            <FlatList 
                data={members}
                style={styles.list}
                horizontal={true}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => this._displayMembers(item)}
            />
        )
    }
}

const styles = StyleSheet.create({
    list:{
        flex:1,
        paddingHorizontal:4
    },
    member_container:{
        borderColor:'black',
        borderWidth:1,
        width:185,
        marginHorizontal:2,
        backgroundColor:'gray'
    },
    title_container:{
        alignItems:'center',
        height:50,
        justifyContent:'center'
    },
    member_title:{
        fontWeight:'bold',
        fontSize:28,
        paddingHorizontal:5,
        textAlign:'center'
    },
    name_container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    member_bucque:{
        textAlign:'center',
        fontSize:18,
        fontFamily:'Zagots'
    },
    member_famss:{
        fontFamily:'Zagots',
        fontSize:30,
        textAlign:'center',
        paddingLeft:10
    },
    member_name:{
        textAlign:'center'
    },
    img_container:{
        alignItems:'center',
        paddingVertical:3
    },
    img:{
        resizeMode:'contain',
        height:165
    },
    member_description:{
        fontStyle:'italic',
        paddingHorizontal:5,
        textAlign:'justify',
        fontSize:12
    }
})