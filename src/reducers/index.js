import {combineReducers} from 'redux'


const init = {
    id:"",
    email:"",
    role:"",
    plan:"",
    dateEnd:"",
    errPass:false,
    errUser:false
}

const AuthReducer=(state=init, action)=>{
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            // Akan menyalin property di state untuk kemudian di ubah id dan usernamenya 
            return {...state, id: action.payload.id, email: action.payload.email, role:action.payload.role, plan:action.payload.plan, dateEnd: action.payload.dateEnd}
        
            case 'REFRESH':
            // Akan menyalin property di state untuk kemudian di ubah id dan usernamenya 
            return {id: action.payload.id, email: action.payload.email, role:action.payload.role, plan:action.payload.plan, dateEnd: action.payload.dateEnd}

        case 'LOGIN_ERROR_WRONG_PASS':
            return {...state, errPass:true,errUser:false}

        case 'LOGIN_ERROR_NOT_FOUND':
            return {...state, errUser:true,errPass:false}
            
        // Hilangkan id dan username
        case "LOGOUT_SUCCESS":
            return {...state, id:"", email:""}

        case "LOGIN_CLICK":
            return {...state, errPass:false, errUser:false}

        case "PREMIUM_USER":
            return {...state, plan:'premium'}

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