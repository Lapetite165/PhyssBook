import { StyleSheet } from 'react-native'

export function manageCalendarColors(color) {
    console.log('ManageCalendarColors')
    console.log(typeof color) 
    if (typeof color === 'string' ){
      return color
    } else {
      console.log('Color2')
      return color[0]
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