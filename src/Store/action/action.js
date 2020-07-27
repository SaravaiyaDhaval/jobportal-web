export function changeState(updatedStories){
    return(dispatch)=>{
        dispatch({
            type:'CHANGESTORIES',
            payload:updatedStories
        }) 
    }
}
