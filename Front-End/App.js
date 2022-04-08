//Importer React
import React from 'react'
//Importer la navigation principale avec toutes les vues
import StackNavigationLogin from './Navigation/StackNavigationLogin'
//Importer React-redux pour utiliser le state global
import { Provider } from 'react-redux'
import {Store} from './Store/configureStore'
//Importer React-persist pour réhydrater notre application (sauvegarader les données existantes dans l'application)
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './Store/configureStore'
//Importer la page de chargement
import Loading from './Components/Loading'
//Importer les permissions utilisateur nécessaires au bon fonctionnement de l'appli
// import BackgroundTask from 'react-native-background-task'
// import {notificationBackgroundTask} from './Components/BackgroundTask/BT'

//BackgroundTask.define(notificationBackgroundTask)

export default class App extends React.Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){
    //BackgroundTask.schedule({period:1800,timeout:30})
    //this._checkStatus()
  }

  _checkStatus = async () => {
    const status = await BackgroundTask.statusAsync()
    
    if (status.available) {
      // Everything's fine
      return console.log('BT okay')
    }
    
    const reason = status.unavailableReason
    if (reason === BackgroundTask.UNAVAILABLE_DENIED) {
      alert('Denied', 'Please enable background "Background App Refresh" for this app')
    } else if (reason === BackgroundTask.UNAVAILABLE_RESTRICTED) {
      alert('Restricted', 'Background tasks are restricted on your device')
    }
  }

  render(){
    return(
      <Provider store={Store}>
        <PersistGate persistor={persistor} loading={<Loading/>} >
          <StackNavigationLogin/>
        </PersistGate>
      </Provider>
    )
  }
  
}

