//Importer la fonction de création du Store
import { createStore } from "redux";
//Importer le root reducer
import rootReducer from "./Reducers/RootReducer";
//Importer les fonctions pour créer des actions asynchrones avec des requetes
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
//Importer les fonction pour garder en memoire les préférences de l'utilisateur via Redux-Persist
import {persistReducer, persistStore} from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { readPost } from "./Actions";

const rootPersistConfig = {
    key:'root',
    storage:AsyncStorage
}

const persistedReducer = persistReducer(rootPersistConfig,rootReducer)
const middleware = applyMiddleware(thunk)

export const Store = createStore(persistedReducer, middleware)
export const persistor = persistStore(Store)

