import { Source } from "expo-calendar"


export class defaultCalendarSourceAndroid implements Source{
    isLocalAccount: true;
    name: 'Expo-calendar';
    id?: string;
    type: string
}