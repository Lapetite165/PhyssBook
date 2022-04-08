import favoriteAssoReducer from "./FavoriteAssoReducer";
import favoritePostReducer from "./FavoritePostReducer";
import { combineReducers } from "redux";
import readPostReducer from "./ReadPostReducer";

const rootReducer = combineReducers({
    asso:favoriteAssoReducer,
    post:favoritePostReducer,
    read:readPostReducer
})

export default rootReducer