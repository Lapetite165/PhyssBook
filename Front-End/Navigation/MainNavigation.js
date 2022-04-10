//Importer React
import React from 'react'
//Importer les components à utiliser pour la navigation et les icons
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { getIcon } from '../Images/icon'
//Importer les vues
import StackNavigationProfil from './StackNavigationProfil'
import StackNavigationSearch from './StackNavigationSearch'
import StackNavigationAsso from './StackNavigationOrganigramme'




export default class Navigation extends React.Component{

    constructor(props){
        super(props)
    }

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
                        tabBarIcon:getIcon('create'),
                        tabBarBadge:3 //this._getNotificationBadges()
                    }}
                />
                <Tab.Screen
                    name='Asso'
                    component={StackNavigationAsso}
                    options={{
                        tabBarIcon:getIcon('people-outline')
                    }}
                />
                <Tab.Screen
                    name='Profil'
                    component={StackNavigationProfil}
                    options={{
                        tabBarIcon:getIcon('person-circle-outline')
                    }}
                />
            </Tab.Navigator>
        )
    }
}
