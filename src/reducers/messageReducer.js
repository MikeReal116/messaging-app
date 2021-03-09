const messageReducer = (message=[], action) => {
    switch(action.type){
        case "ADD_MESSAGE":
            return [...message, action.payload];
        case "FETCH_MESSAGE":
            return action.payload;
        default:
            return message;
    }

}

export default messageReducer;