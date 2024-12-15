//Importer React
import React from "react"
//Importer les components à utiliser pour la navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native'
//Importer les vues
import Navigation from "./MainNavigation"
import LoadingPage from "../Components/Loading/LoadingPage"
import ConnectionPage from "../Components/Loading/ConnectionPage"
import { FrogottenPassword } from "../Components/Loading/ForgottenPassword"


export default class StackNavigationLogin extends React.Component{

    //Ecriture de la navigation avec React Navigation 5+
    render(){
        const Stack = createNativeStackNavigator()
        return(
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='ConnectionPage'
                    screenOptions={{
                        headerShown:false
                    }}
                >
                    <Stack.Screen
                        name="ConnectionPage"
                        component={ConnectionPage}
                    />
                    <Stack.Screen
                        name="LoadingPage"
                        component={LoadingPage}
                    />
                    <Stack.Screen 
                        name='Mon Profil Login'
                        component={Navigation}
                        options={{
                            headerBackVisible:false
                        }}
                    />
                    <Stack.Screen
                        name="Mot de passe oublié"
                        component={FrogottenPassword}
                        options={{
                            headerShown:true
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
