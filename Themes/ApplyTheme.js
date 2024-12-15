import { StyleSheet } from 'react-native'

export function getStringColors(color) {
    if (typeof color === 'string' ){
      return color
    } else {
      return color[0]
    }
}

export function getArrayColors(color){
    if (typeof color === 'string' ){
        return [color,color]
      } else {
        return color
      }
}

export function applyTheme(type){
    switch (type){
        case "Comit'ss Trad'ss" :
            return comitssTheme
        break
        case 'GaSole':
            return gasoleTheme
        break
        default:
            return defaultTheme
    }
}

const comitssTheme = StyleSheet.create({
    main_container:{
        backgroundColor:'#B00000',
        color:'#000000',
        paddingHorizontal:3,
        fontFamily:"Zagots",
        flex:1
    }
})

const gasoleTheme = StyleSheet.create({
    main_container:{
        backgroundColor:'blue',
        color:'red',
        textDecorationColor:'yellow',
        paddingHorizontal:3,
        flex:1
    },
    title_text:{
        fontWeight:'bold',
        fontSize:40,
        fontFamily:'Zagots',
        flex:1,
        textAlign:'center',
        marginLeft:5,
        marginRight:5,
        marginTop: 10
      }
})

const defaultTheme = StyleSheet.create({
    main_container:{
        backgroundColor:'gray',
        paddingHorizontal:3,
        flex:1
    }
})