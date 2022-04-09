//Importer React
import React from "react"
//Importer les components à utiliser pour la navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Ionicons from '@expo/vector-icons/Ionicons'
//Importer les vues
import Search from "../Components/Post/Search"
import PostDetails from "../Components/Post/PostDetails"



class StackNavigationSearch extends React.Component{

    //On défini le state pour utiliser searchBarShown
    constructor(props){
        super(props)
        this.state={
            searchBarShown:false
        }
    }

    //Fonction appelée lorsqu'on appuie sur l'icon rechercher
    _toggleSearchBar=()=>{
        const show = !this.state.searchBarShown
        this.setState({searchBarShown:show})
    }

    //Définition de l'icon via Ionicons
    _displayIcon=(title)=>(
        <Ionicons 
            onPress={()=>this._toggleSearchBar()}
            name={title}
            size={30}
        />
    )

    //Ecriture de la navigation avec React Navigation 5+
    render(){
        const Stack = createNativeStackNavigator()
        const properties = this.state.searchBarShown
        return(
            <Stack.Navigator>
                <Stack.Screen 
                    name='Post'
                    options={()=>({
                        headerRight: ()=>(this._displayIcon('search-outline'))
                    })
                }
                >
                    {(props)=><Search {...props} extraData={properties}/>}
                </Stack.Screen>
                <Stack.Screen
                    name='Détails'
                    component={PostDetails}
                    options={{
                        headerTitle:'Détails du post recherché'
                    }}
                />
            </Stack.Navigator>
        )
    }
}


export default StackNavigationSearch