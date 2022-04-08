//Importer React
import React from "react"
//Importer les components à utiliser pour la navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Ionicons from '@expo/vector-icons/Ionicons'
//Importer les vues
import Organigramme from "../Components/Organigramme/Organigramme"
import AssoDetails from "../Components/List/AssoDetails"

//Regarder la documentation React Navigation sur internet, tout est expliqué



export default class StackNavigationAsso extends React.Component{

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
                    name='Asso et Comités'
                    options={{
                        headerShown:true
                    },
                        ()=>({headerRight: ()=>(this._displayIcon('search-outline'))})
                    }
                >
                    {(props)=><Organigramme {...props} extraData={properties}/>}
                </Stack.Screen>
                <Stack.Screen
                    name="Détails"
                    component={AssoDetails}
                    options={{
                        headerTitle:"Détails de l'asso recherchée"
                    }}
                />
            </Stack.Navigator>
        )
    }
}