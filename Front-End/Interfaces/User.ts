import { Asso } from "./Asso"
import { Post } from "./Post"

export interface User {
    name:string,
    bucque:string,
    fams:string,
    email:string,
    id?:number,
    userStatus:number,
    assoBools?:AssoBools[],
    posts?:Post[]
}

interface AssoBools {
    id?:number,
    name:string,
    title:string,
    description:string,
    com:boolean,
    asso:Asso
}