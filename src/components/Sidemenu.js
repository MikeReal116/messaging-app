import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import  { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import ChatItem from "./ChatItem";
import { addChat, fetchChat, selectedChat} from "../actions";
import  { auth } from "../firebase"
import "./Sidemenu.css";




const Sidemenu = props =>{
    useEffect(()=>{
        props.fetchChat();
    }, []);

    const addChat = () =>{
        const chatName = prompt("Enter a chat name");
        if(chatName){
            props.addChat(chatName);
        }  
    }

    const getClassName = () =>{
        let detail = document.querySelector(".sidemenu");
        detail.classList.add("hidden-md-down")
    }
    return (
        <div className="sidemenu" >
            <div className="sidemenu__header">
                <Avatar className="sidemenu__avatar" src={props.user.photo} onClick={()=> auth.signOut()}/>
                <div className="sidemenu__input">
                    <SearchIcon />
                    <input placeholder="Search" />
                </div>
                <IconButton onClick={addChat}>
                    <AddIcon  />
                </IconButton>
            </div>
            
            <div className="sidemenu__chats" onClick ={()=> getClassName()}>
                {props.chats.map(( { id, data }) =>
                    <div onClick={()=> props.selectedChat(id, data) } key={id}> <ChatItem chatName={data.chatName}  id={id}/></div>
                )}
            </div>
            
        </div>
    )
}

const MapStateToProps = (state) =>{
    return{user: state.auth, chats: state.chats}
}

export default connect(MapStateToProps, { addChat, fetchChat, selectedChat })(Sidemenu);