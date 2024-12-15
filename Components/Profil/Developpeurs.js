import React from "react"
import { Text, ScrollView, StyleSheet } from "react-native"
import MemberItem from "../List/MembersItem"
import { DevData } from "../../Helpers/AssoData"

export default class Developpeurs extends React.Component{

    render(){
        const members=DevData
        return(
            <ScrollView>
                <Text style={styles.description}>
                    Les personnes ayant participés au développement de l'application:
                </Text>
                <MemberItem
                    data={members}
                />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    description:{
        marginVertical:5,
        marginHorizontal:3
    }
})