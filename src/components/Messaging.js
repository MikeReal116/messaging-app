import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {Button} from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Message from "./Message";
import { addMessage, fetchMessage } from "../actions";
import "./Messaging.css";


const Messaging = props => {
    const [input, setInput] = useState("");
    const { chatId } = props;
    useEffect(()=>{
        if(chatId){
            props.fetchMessage();
        }
    }, [chatId]);

    const onSubmit = (e) => {
        e.preventDefault();
         props.addMessage(input);
        setInput(" ");
    }
    const getClassName = () =>{
        let detail = document.querySelector(".sidemenu");
        detail.classList.remove("hidden-md-down")
    }
    
    return (
        <div className= "messaging">
            <div className="messaging__header">
               <ArrowBackIcon className="messaging__icon" onClick ={getClassName}/>
                {props.selected && <h4>{props.selected.chatName}</h4>}
                <strong>Details</strong>
            </div>
            <div className="messaging__chat">
              {props.messages && props.messages.map(({id, data}) =>
                  <Message key={id} {...data} />
              )}

            </div>
            <div className="messaging__input">
                {props.selected &&<form onSubmit={onSubmit}>
                    <input type="text" placeholder="sendMessage" onChange={(e)=>setInput(e.target.value)}  value={input}/>
                    <Button>Send</Button>
                </form>}
            </div>
        </div>
    )
}
const MapStateToProps = state => {
    return {selected : state.selected.chatName, chatId:state.selected.chatId, messages:state.messages}
}

export default connect(MapStateToProps, { addMessage, fetchMessage })(Messaging);