const initialState = {favoritePost:[]}

export default function favoritePostReducer(state=initialState, action){
    
    let nextState

    switch (action.type) {
        case 'TOGGLE_FAVORITE_POST':
            console.log('TogglePost infernss')
            const favoritePostIndex = state.favoritePost.findIndex(item => item.id === action.payload.id)
            console.log(action.payload)
            console.log('Oh belle')
            console.log(favoritePostIndex)
            console.log('Stop')
            if (action.payload !== undefined) {
                if (favoritePostIndex !== -1){
                    console.log('Remove_favorite')
                    nextState={
                        ...state,
                        favoritePost: state.favoritePost.filter((index) => index == favoritePostIndex)
                    }
                } else {
                    console.log('Add_favorite')
                    nextState={
                        ...state,
                        favoritePost: [...state.favoritePost, action.payload]
                    }
                    console.log(nextState)
                }
            }
            return nextState || state
        default:
            return state
    }
}