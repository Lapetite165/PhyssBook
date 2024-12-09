const initialState = {readPost:[]}

export default function readPostReducer(state=initialState, action){
    
    let nextState

    switch (action.type) {
        case 'READ_POST':
            console.log('TogglePost infernss')
            const readPostIndex = state.readPost.findIndex(item => item === action.payload)
            console.log(action.payload)
            console.log('Oh belle')
            console.log(readPostIndex)
            console.log('Stop')
            if (action.payload !== undefined) {
                if (readPostIndex === -1){
                    console.log('Post_read', action.payload)
                    nextState={
                        ...state,
                        readPost:[...state.readPost, action.payload]
                    }
                } else {
                    nextState={
                        ...state
                    }
                }
            }
            return nextState || state
        default:
            return state
    }
}