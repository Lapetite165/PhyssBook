//Importer React
import React from 'react'
//Importer les components à utiliser pour la navigation et les icons
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'
//Importer les vues
import StackNavigationProfil from './StackNavigationProfil'
import StackNavigationSearch from './StackNavigationSearch'
import StackNavigationAsso from './StackNavigationOrganigramme'



export default class Navigation extends React.Component{

    constructor(props){
        super(props)
    }

    //Récupérer le component Ionicons 
    _getIcon = (nameIcon) => () => (
        <Ionicons 
            name = {nameIcon}
            size = {25}
        />
    )

    //Récupérer le nombre de post non-lu depuis la dernière connexion à l'application
    _getNotificationBadges = () => {

    }

    //Ecriture de la navigation avec React Navigation 5+
    render(){
        const Tab = createBottomTabNavigator()
        return(
            <Tab.Navigator 
                initialRouteName='Profil' 
                screenOptions={{
                    tabBarActiveBackgroundColor: '#78FF00',
                    tabBarInactiveBackgroundColor:'#939393',
                    tabBarHideOnKeyboard:true,
                    tabBarShowLabel:false,
                    headerShown:false
                    }}
            >
                <Tab.Screen
                    name='Posts'
                    component={StackNavigationSearch}
                    options={{
                        tabBarIcon:this._getIcon('create'),
                        tabBarBadge:3 //this._getNotificationBadges()
                    }}
                />
                <Tab.Screen
                    name='Asso'
                    component={StackNavigationAsso}
                    options={{
                        tabBarIcon:this._getIcon('people-outline')
                    }}
                />
                <Tab.Screen
                    name='Profil'
                    component={StackNavigationProfil}
                    options={{
                        tabBarIcon:this._getIcon('person-circle-outline')
                    }}
                />
            </Tab.Navigator>
        )
    }
}
