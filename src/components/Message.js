import React from "react";
import { connect}  from "react-redux"
import { Avatar } from "@material-ui/core";
import "./Message.css";


const Message = (props) => {

    return(
        <div className={`message ${props.user ===props.uid && "message__sender"}`}>
            <Avatar  src ={props.photo} className="message__avatar"/>
            <p>{props.message}</p>
            <small>{new Date(props.time?.toDate()).toLocaleString()}</small>
        </div>
    )
}
const mapStatetoProps = state => {
    return{user: state.auth.uid}
}
export default connect(mapStatetoProps)(Message);