import { combineReducers } from "redux";
import authReducer from "./authReducer";
import chatReducer from "./chatReducer";
import selectedChatReducer from "./selectedChatReducer";
import messageReducer from "./messageReducer";

const reducers = combineReducers({
    auth: authReducer,
    chats: chatReducer,
    selected: selectedChatReducer,
    messages: messageReducer
});
export default reducers;