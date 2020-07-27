const INITIAL_STATE={
    stories:'data'
}
export default(states=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'CHANGESTORIES':
            return({
                ...states,
                stories:action.payload
            })
        default:
            return states;
    }
}