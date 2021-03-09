import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {Button} from "@material-ui/core";
import Message from "./Message";
import { addMessage, fetchMessage } from "../actions";
import "./Messaging.css";


const Messaging = props => {
    const [input, setInput] = useState("");

    useEffect(()=>{
        if(props.chatId){
            props.fetchMessage();
        }
    }, [props.chatId]);

    const onSubmit = (e) => {
        e.preventDefault();
         props.addMessage(input);
        setInput(" ");
    }
    return (
        <div className="messaging">
            <div className="messaging__header">
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