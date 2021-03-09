const selectedChatReducer = (selected={}, action) => {
    switch(action.type){
        case "SELECTED_CHAT":
            return action.payload;
        default:
            return selected
    }
}

export default selectedChatReducer;