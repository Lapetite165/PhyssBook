//Importer les Action Types
import { TOGGLE_FAVORITE_ASSO, TOGGLE_FAVORITE_POST, READ_POST, SEND_NOTIFICATION_TOKEN } from "./ActionTypes"
//Importer les fonctions à utiliser par les Actions Creators
import { createCalendarAsync, EntityTypes, CalendarAccessLevel, Source } from "expo-calendar";
import { getDefaultCalendarSource, getCalendars } from "../API/CalendarAPI";
import { Platform } from "react-native";
import { getStringColors } from "../Themes/ApplyTheme";
//Importer les interfaces TS
import { Asso } from "../Interfaces/Asso";
import { Calendar } from "../Interfaces/Calendar";

//Action Creator pour les actions directes
export const toggleFavoriteAsso = (content:Object) => ({
    type: TOGGLE_FAVORITE_ASSO,
    payload: content
})

export const toggleFavoritePost = (content:Object) => ({
    type: TOGGLE_FAVORITE_POST,
    payload: content
})

export const readPost = (content:Object) => ({
    type: READ_POST,
    payload: content
})

export const sendNotificationToken = (content:Object) => ({
    type: SEND_NOTIFICATION_TOKEN,
    payload: content
})

//Action Creator pour les actions différées 
export const toggleFavoriteAssoAsync = (asso:Asso) => {
    //console.log('ActionSynchrone')
        return async (dispatch:Function) => {
            const calendars:Calendar[] = await getCalendars()
            let newAsso:Asso
            const calendar = calendars.filter((item) => item.title === asso.title)
            //console.log(calendar)
            if (calendar.length === 0) {
                const defaultCalendarSourceAndroid:Source = { isLocalAccount: true, name: asso.title, type:'LOCAL' }
                const defaultCalendarSource = Platform.OS === 'ios' ? getDefaultCalendarSource() : defaultCalendarSourceAndroid
                const calendarId = await createCalendarAsync({
                    title:asso.title,
                    color:getStringColors(asso.color),
                    entityType:EntityTypes.EVENT,
                    sourceId: defaultCalendarSource.id,
                    source: defaultCalendarSource,
                    name: 'internalCalendarName',
                    ownerAccount: 'personal',
                    accessLevel: CalendarAccessLevel.OWNER,
                })
                newAsso = {
                    ...asso,
                    calendarId:calendarId
                }
            } else {
                //console.log("Else2")
                //console.log(calendar)
                const calendarId = calendar[0].id
                newAsso = {
                    ...asso,
                    calendarId:calendar
                }
            }
                return dispatch(toggleFavoriteAsso(newAsso))
        }
}