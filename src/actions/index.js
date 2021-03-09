import db from "../firebase";
import firebase from "firebase";

export const signIn = (uid, photo, email, displayName) => {
    return{
        type: "SIGN_IN",
        payload: {uid,photo, email, displayName }
    }
};
 export const signOut = () => {
    return {
        type: "SIGN_OUT"
    }
};
 export const addChat = (chatName) => dispatch =>{
    db.collection("chats").add({chatName})
        dispatch({type:"ADD_CHAT", payload: chatName})
 }
 
 export const fetchChat = () => dispatch =>{
   
    db.collection("chats").onSnapshot(snapshot =>{
        const response = snapshot.docs.map(doc =>({ id:doc.id, data:doc.data()}));
        dispatch({type:"FETCH_CHAT", payload: response})
    })
 }
 export const selectedChat = (chatId, chatName) => {
     return{type:"SELECTED_CHAT", payload: {chatId, chatName}}
 }

 export const addMessage = (inputValue) => (dispatch, getState) =>{
     const { uid, photo, email, displayName } = getState().auth;
     const { chatId } = getState().selected;
     const response = {
        time: firebase.firestore.FieldValue.serverTimestamp(),
        message: inputValue,
        uid, 
        photo,
        email,
        displayName
     }
    db.collection("chats").doc(chatId).collection("messages").add(response)
    dispatch({type:"ADD_MESSAGE", payload: response});
 }

 export const fetchMessage = () => (dispatch,getState)=> {
    const { chatId } = getState().selected;
     db.collection("chats").doc(chatId).collection("messages").orderBy("time", "desc").onSnapshot(snapshot=>{
         const response = snapshot.docs.map((doc)=>({id:doc.id, data: doc.data()}));
         dispatch({type: "FETCH_MESSAGE", payload: response});
     })
 };

