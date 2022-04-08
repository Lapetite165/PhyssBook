import { deleteCalendarAsync } from "expo-calendar"

const initialState = {favoriteAsso:[]}

export default function favoriteAssoReducer(state=initialState, action){
    let nextState

    switch (action.type) {
        case 'TOGGLE_FAVORITE_ASSO':
            const favoriteAssoIndex = state.favoriteAsso.findIndex(item => item.id === action.payload.id)
            if (favoriteAssoIndex !== -1){
                console.log('Remove_favorite')
                deleteCalendarAsync(state.favoriteAsso[favoriteAssoIndex].calendarId).then(console.log(state.favoriteAsso[favoriteAssoIndex]))
                nextState={
                    ...state,
                    favoriteAsso: state.favoriteAsso.filter((index) => index == favoriteAssoIndex)
                }  
            } else {
                console.log('Add_favorite')
                console.log(action.payload)
                nextState={
                ...state,
                favoriteAsso: [...state.favoriteAsso, action.payload]
                }
            }
            return nextState || state
        default:
            return state
    }
}