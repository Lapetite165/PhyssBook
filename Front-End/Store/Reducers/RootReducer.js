//Importer les reducers
import favoriteAssoReducer from "./FavoriteAssoReducer";
import favoritePostReducer from "./FavoritePostReducer";
import readPostReducer from "./ReadPostReducer";
//Importer les fonctions redux
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    asso:favoriteAssoReducer,
    post:favoritePostReducer,
    read:readPostReducer
})

export default rootReducer