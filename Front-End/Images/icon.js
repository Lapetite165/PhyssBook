import React from "react"
import Ionicons from '@expo/vector-icons/Ionicons'

export function getIcon(name,action){
    return <Ionicons onChange = {() => action} name = {name} size = {25}/>
    
}