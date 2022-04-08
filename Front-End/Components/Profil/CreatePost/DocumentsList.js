import React from "react";
import { View ,StyleSheet, Text, FlatList, Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'


export default class DocumentsList extends React.Component {

    constructor(props){
        super(props)
    }


    _getIcon(){
        return(
            <Ionicons 
                name = {"close-circle-outline"}
                size = {25}
            />
        )
    }
    //Afficher les documents sélectionnés
    _showDocuments = () => {
        const {items, documentype, removeFromList} = this.props
        console.log("ShowDocuments" + documentype)
        console.log(items)
        if (items != 0 && items != undefined) {
            return(
                <View>
                    <FlatList
                        scrollEnabled={false}
                        data={items}
                        keyExtractor={(item) => items.indexOf(item) }
                        renderItem={({item}) => (
                            <View style={styles.document_item} >
                                <Text>{">" + item.name}</Text>
                                <Pressable onPress={()=>{removeFromList(documentype, item)}}>
                                    {this._getIcon()}
                                </Pressable>
                            </View>  
                        )}
                    />
                </View>
            )
        }
    }


    render(){
        const {documentype} = this.props
        return (
            <View>
                <Text>{documentype}</Text>
                {this._showDocuments()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    document_item:{
        height:50,
        marginVertical:2,
        flexDirection:'row',
        justifyContent:'space-between'
    }
})