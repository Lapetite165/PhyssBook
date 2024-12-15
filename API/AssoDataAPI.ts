import { AssoData } from "../Helpers/AssoData";

export function getAssoDetailsFromApi (id:any):object {
    const response = AssoData.filter(item => item.id === id)[0]
    return response
}