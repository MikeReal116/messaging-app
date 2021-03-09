const initialState = {
    isSignedIn:null,
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case "SIGN_IN":
            return {...state, isSignedIn: true, uid:action.payload.uid,photo:action.payload.photo,email:action.payload.email,displayName:action.payload.displayName };
        case "SIGN_OUT":
            return{...state, isSignedIn: false};
        default:
            return state;
    }

}

export default authReducer;