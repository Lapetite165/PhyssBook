import { Platform } from "react-native"
import { Member } from "./Member"

export interface Asso extends Object {
    id:number,
    title:string,
    peksTitle:string,
    previewImage:string,
    overview:string,
    color:Array<string>,
    font:string,
    members:Array<Member>,
    calendarId?: any
}