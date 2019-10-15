import {combineReducers} from 'redux'


const init = {
    id:"",
    email:"",
    errPass:false,
    errUser:false
}

const AuthReducer=(state=init, action)=>{
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            // Akan menyalin property di state untuk kemudian di ubah id dan usernamenya 
            return {...state, id: action.payload.id, email: action.payload.email}

        case 'LOGIN_ERROR_WRONG_PASS':
            return {...state, errPass:true}

        case 'LOGIN_ERROR_NOT_FOUND':
            return {...state, errUser:true}
            
        // Hilangkan id dan username
        case "LOGOUT_SUCCESS":
            return {...state, id:"", email:""}

        default:
            return state;
    }
}

const reducers=combineReducers(
    {
        auth:AuthReducer
    } 
)

export default reducers