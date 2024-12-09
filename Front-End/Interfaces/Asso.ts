export interface Asso extends Object {
    id:number,
    title:string,
    peksTitle:string,
    previewImage:string,
    overview:string,
    color:AssoColors[],
    font:string,
    members:Member[],
    calendarId?: any
}

interface AssoColors {
    value:string
}

export interface Member extends Object {
    id:Number,
    title:String,
    bucque:String,
    famss:String,
    name:String,
    description:String,
    image:String
}