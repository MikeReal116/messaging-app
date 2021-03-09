import React from "react";
import  { connect } from "react-redux";
import './App.css';
import Sidemenu from "./Sidemenu";
import Messaging from "./Messaging";
import Login from "./Login";
import { auth } from "../firebase";
import { signIn, signOut } from "../actions";

class App extends React.Component{
    componentDidMount(){
      auth.onAuthStateChanged(authUser=>{
        if(authUser){
          this.props.signIn(authUser.uid, authUser.photoURL, authUser.email,authUser.displayName);
        }
        else{
          this.props.signOut();
        }
      });
    }
  
  renderView(){
    if(this.props.auth.isSignedIn===null){
      return<div></div>
    }else if(this.props.auth.isSignedIn){
      return(
        <React.Fragment>
            <Sidemenu />
            <Messaging />
          </React.Fragment>
      );
    }else{
      return <Login />
    }
  }

    render(){
      return (
        <div className ="app">
          {this.renderView()}
        </div>
      );
    }
  
} 

const MapStateToProps = (state) =>{
  return{auth:state.auth}
}
export default connect(MapStateToProps, {signIn, signOut})(App);
