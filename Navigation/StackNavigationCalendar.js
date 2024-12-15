//Importer React
import React from "react"
//Importer les components à utiliser pour la navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack"
//Importer les vues
import CalendarView from "../Components/Calendar/CalendarView"
import PostDetails from "../Components/Post/PostDetails"

//Regarder la documentation React Navigation sur internet, tout est expliqué



export default class StackNavigationCalendar extends React.Component{

    //Ecriture de la navigation avec React Navigation 5+
    render(){
        const Stack = createNativeStackNavigator()
        return(
            <Stack.Navigator>
                <Stack.Screen 
                    name='Calendrier'
                    component={CalendarView}
                    options={{
                        headerShown:true
                    }}
                />
                <Stack.Screen
                    name="Détails"
                    component={PostDetails}
                    options={{
                        headerTitle:"Détails du post"
                    }}
                />
            </Stack.Navigator>
        )
    }
}
