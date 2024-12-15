import {requestCalendarPermissionsAsync, getCalendarsAsync, EntityTypes} from 'expo-calendar'
import { requestMediaLibraryPermissionsAsync } from 'expo-image-picker'

export const calendarStatusCheck = async () => {
    const calendarStatus = await requestCalendarPermissionsAsync()
    console.log(calendarStatus)
    if (calendarStatus.granted) {
      const calendars = await getCalendarsAsync(
        EntityTypes.EVENT
      )
    } else {
        console.log('Calendar Permission Denied')
    }
}

export const mediaLibraryStatusCheck = async () => {
    const mediaLibraryStatus = await requestMediaLibraryPermissionsAsync()
    if (mediaLibraryStatus.granted) {
        console.log('Media Library Permission Granted')
    } else {
        console.log('Media Library Permission Denied')
    }
}