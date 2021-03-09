import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import { connect } from "react-redux";
import db from "../firebase";
import "./ChatItem.css";


const ChatItem = (props) => {
    const [messageInfo, setMessageInfo] = useState([]);

    useEffect(()=>{
        db.collection("chats").doc(props.id).collection("messages").onSnapshot(snapshot =>{
            setMessageInfo(snapshot.docs.map(doc => doc.data()));
        })

    }, [props.id]);

    return (
        <div className="chatitem">
            <Avatar src={messageInfo[0] && messageInfo[0].photo}/>
            <div className="chatitem__detail">
                <h3>{props.chatName}</h3>
                <p>{messageInfo[0] && messageInfo[0].message}</p>
                <small>{messageInfo[0] && new Date(messageInfo[0].time?.toDate()).toLocaleString()}</small>
            </div>
        </div>
    )
}

const MapStateToProps = state =>{
    return{chats : state.chats} 
}

export default connect(MapStateToProps)(ChatItem);