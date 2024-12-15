import { StyleSheet, Platform } from 'react-native';
import { 
  getCalendarPermissionsAsync, 
  getDefaultCalendarAsync, 
  getCalendarsAsync, 
  createCalendarAsync, 
  EntityTypes,
  CalendarAccessLevel
} from 'expo-calendar';
import { calendarStatusCheck } from './Permissions'
//Interfaces ts


export async function getCalendars(){
  const calendars = await getCalendarsAsync(
    EntityTypes.EVENT
  )
  return calendars
}

export async function getCalendarsId(){
  calendarStatusCheck()
    .then(
      getCalendars()
        .then(calendars => {
          if (calendars != undefined){
            const filteredCalendars = calendars.filter(item => item.ownerAccount === "personal")
          }
        })
    )
}
  
export async function getDefaultCalendarSource() {
  const defaultCalendar = await getDefaultCalendarAsync();
  return defaultCalendar.source;
}

export async function createCalendar() {
  const defaultCalendarSource =
    Platform.OS === 'ios'
      ? await getDefaultCalendarSource()
      : {isLocalAccount: true, name: 'Expo-calendar'};
  const newCalendarID = await createCalendarAsync({
    title: 'Expo Calendar',
    color: 'blue',
    entityType: EntityTypes.EVENT,
    sourceId: defaultCalendarSource.id,
    source: defaultCalendarSource,
    name: 'internalCalendarName',
    ownerAccount: 'personal',
    accessLevel: CalendarAccessLevel.OWNER,
  });
  console.log(`Your new calendar ID is: ${newCalendarID}`)
}

export async function requestPermission() {
  const permission = await getCalendarPermissionsAsync()
  console.log('Calendar permission')
  console.log(permission.granted)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
