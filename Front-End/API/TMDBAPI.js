import moment from "moment"


const API_TOKEN = '0b651518508abb6d776c65eb592d8c59'

export async function getFilmsFromApi (text,page) {
    const url='https://api.themoviedb.org/3/search/movie?api_key='+API_TOKEN+'&language=fr&query='+text+'&page='+page
    const response = await fetch(url)
    .then((response) => response.json())
    return response
}

export async function getFilmsSortByDateFromApi (page) {
    const url='https://api.themoviedb.org/3/discover/movie?api_key='+API_TOKEN+'&sort_by=release_date.desc&language=fr&release_date.lte='+moment(Date.now()).format('YYYY-MM-DD')+'&page='+page
    const response = await fetch(url)
    .then((response) => response.json())
    return response
}

export async function getFilmsFromApi2(text, page) {
    if ( text === moment(Date.now()).format('YYYY-MM-DD') ){
        const url='https://api.themoviedb.org/3/discover/movie?api_key='+API_TOKEN+'&sort_by=release_date.desc&language=fr&release_date.lte='+text+'&page='+page
        const response = await fetch(url)
        .then((response) => response.json())
        return response
    } else if (text != undefined) {
        const url='https://api.themoviedb.org/3/search/movie?api_key='+API_TOKEN+'&language=fr&query='+text+'&page='+page
        const response = await fetch(url)
        .then((response) => response.json())
        return response
    }
}

export async function getFilmsDetailFromApi (id) {
    const url='https://api.themoviedb.org/3/movie/'+id+'?api_key='+API_TOKEN+'&language=fr'
    const response = await fetch(url)
    .then((response) => response.json())
    return response
}

export const getImageFromApi = (url) => {
    if ( url !== null) {
        return 'https://image.tmdb.org/t/p/w300'+url;
    } else {
        return 'http://www.linternaute.com/cinema/image/v2/film/avatar-cinema-220.png';
    }
}


export async function getAssoFromApi (id) {
    const url='../../Helpers/AssoData'
    const response = await fetch(url)
    .then((response) => response.json())
    return response
}