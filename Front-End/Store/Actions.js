//Importer les Action Types
import { TOGGLE_FAVORITE_ASSO, TOGGLE_FAVORITE_POST, READ_POST, SEND_NOTIFICATION_TOKEN, CALENDAR_ID } from "./ActionTypes"
//Importer les fonctions à utiliser par les Actions Creators
import { createCalendarAsync, EntityTypes, getDefaultCalendarSource, CalendarAccessLevel, getCalendarsAsync } from "expo-calendar";
import { Platform } from "react-native";
import { manageCalendarColors } from "../Themes/ApplyTheme";

//Action Creator pour les actions directes
export const toggleFavoriteAsso = (content) => ({
    type: TOGGLE_FAVORITE_ASSO,
    payload: content
})

export const toggleFavoritePost = (content) => ({
    type: TOGGLE_FAVORITE_POST,
    payload: content
})

export const readPost = (content) => ({
    type: READ_POST,
    payload: content
})

export const sendNotificationToken = (content) => ({
    type: SEND_NOTIFICATION_TOKEN,
    payload: content
})

export const calendarId = (content) => ({
    type: CALENDAR_ID,
    payload: content
})

//Action Creator pour les actions différées 
export const toggleFavoriteAssoAsync = (asso) => {
    console.log('ActionSynchrone')
    console.log(asso)
        return async (dispatch) => {
            const calendarID2 = await getCalendarsAsync(EntityTypes.EVENT)
            let newAsso
            const cal = calendarID2.filter((item) => item.title === asso.title).id
            if (calendarID2 === undefined || cal === undefined) {
                    const defaultCalendarSource = Platform.OS === 'ios' ? getDefaultCalendarSource() : { isLocalAccount: true, name: asso.title }
                    const calendarID = await createCalendarAsync({
                        title:asso.title,
                        color:manageCalendarColors(asso.color),
                        entityType:EntityTypes.EVENT,
                        sourceId: defaultCalendarSource.id,
                        source: defaultCalendarSource,
                        name: 'internalCalendarName',
                        ownerAccount: 'personal',
                        accessLevel: CalendarAccessLevel.OWNER,
                    })
                    console.log(calendarID)
                    newAsso = {
                        ...asso,
                        calendarId:calendarID
                    }
                    console.log(newAsso)
            } else {
                console.log("Else")
                console.log(cal)
                newAsso = {
                    ...asso,
                    calendarId:cal
                }
            }                
                return dispatch(toggleFavoriteAsso(newAsso))
        }
}