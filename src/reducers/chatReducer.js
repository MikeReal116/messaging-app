
const chatReducer = (state=[],action ) =>{
    switch(action.type){
        case "ADD_CHAT":
            return[...state, action.payload];
        case "FETCH_CHAT":
            return action.payload;
        default:
            return state;
    }
}

export default chatReducer;