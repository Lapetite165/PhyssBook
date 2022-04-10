
export function getIcon(name,action){
    return(
        <Ionicons 
            onChange = {() => action}
            name = {name}
            size = {25}
        />
    )
}