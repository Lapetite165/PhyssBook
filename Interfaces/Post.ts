export interface Post {
    title:string,
    overview:string,
    startingDate:Date,
    endingDate:Date,
    creationDate:Date,
    assoId:number,
    id:number,
    userId:number,
    restrictions:Restrictions,
    keywords:Keyword[],
    backgroundImage:Image[],
    postImages:Image[]
}

interface Restrictions {
    id:number,
    name:string,
    filename:string
}

interface Keyword {
    name:string
}

interface Image {
    name:string,
    filename:string,
    id?:number,
    postId?:number,
    current?:boolean
}