//Importer React
import React from "react"
//Importer les components à utiliser pour la navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack"
//Importer les vues
import Profil from "../Components/Profil/Profil"
import Favorites from "../Components/Profil/Favorites"
import Developpeurs from "../Components/Profil/Developpeurs"
import PostDetails from "../Components/Post/PostDetails"
import AssoDetails from "../Components/List/AssoDetails"
import CreatePost from "../Components/Profil/CreatePost/CreatePost"


export default class StackNavigationProfil extends React.Component{

    //Ecriture de la navigation avec React Navigation 5+
    render(){
        const Stack = createNativeStackNavigator()
        return(
            <Stack.Navigator
                initialRouteName='Mon Profil'
            >
                <Stack.Screen 
                    name='Mon Profil'
                    component={Profil}
                    options={{
                        headerBackVisible:false
                    }}
                />
                <Stack.Screen
                    name='Favoris'
                    component={Favorites}
                />
                <Stack.Screen 
                    name='PostDetails'
                    component={PostDetails}
                    options={{
                        headerTitle:"Détails du post favori"
                    }}
                />
                <Stack.Screen 
                    name='AssoDetails'
                    component={AssoDetails}
                    options={{
                        headerTitle:"Détails de l'asso favorite"
                    }}
                />
                <Stack.Screen
                    name='Développeurs'
                    component={Developpeurs}
                />
                <Stack.Screen
                    name='CreatePost'
                    component={CreatePost}
                    options={{
                        headerTitle:''
                    }}
                />
            </Stack.Navigator>
        )
    }
}
