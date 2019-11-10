import axios from 'axios'

import urlApi from '../helpers'

export const onLoginClick=()=>{
    return (dispatch)=>{
        dispatch({
            type:"LOGIN_CLICK"
        })
    }
}


export const onLoginUser=(EMAIL, PASSWORD)=>{

    return (dispatch)=>{
        // console.log(EMAIL);
        // console.log(PASSWORD);
        
        axios.get(
            urlApi+ "/auth/login", 
            {
                params:{
                    email:EMAIL,
                    password:PASSWORD
                }
            }
        ).then((res)=>{
            
            
 
            // res.data merupakan sebuah array
            // jika data ditemukan, length > 0
            // jika data tidak ditemukan, length = 0
            if (res.data.status==='404'){
                // user not found
                dispatch(
                    { 
                       type:"LOGIN_ERROR_NOT_FOUND"
                    }
                )
            }else if (res.data.status==='401'){
                // wrong pass
                dispatch(
                    { 
                       type:"LOGIN_ERROR_WRONG_PASS"
                    }
                )
            }else if (res.data.status==='200'){
                //success
                // console.log(res.data.result);
                
                let {id,email,role,plan,dateEnd}=res.data.result

                localStorage.setItem(
                    'userData',
                    JSON.stringify({id,email,role,plan,dateEnd})
                )
                
                
                dispatch(
                    { 
                        type:"LOGIN_SUCCESS",
                        payload:{
                            id,email,role,plan,dateEnd
                        }
                    }
                )
            }
        }).catch((err)=>{
            
        })
    }
    
}

export const onRefresh=(EMAIL)=>{

    return (dispatch)=>{
        // console.log(EMAIL);
        // console.log(PASSWORD);
        
        axios.get(
            urlApi+ "/auth/getdata", 
            {
                params:{
                    email:EMAIL,
                }
            }
        ).then((res)=>{
            
                //success
                // console.log(res.data.result);
                console.log('s');
                console.log(res.data);
                
                let {id,email,role,plan,dateEnd}=res.data[0]

                localStorage.setItem(
                    'userData',
                    JSON.stringify({id,email,role,plan,dateEnd})
                )
                
                
                dispatch(
                    { 
                        type:"REFRESH",
                        payload:{
                            id,email,role,plan,dateEnd
                        }
                    }
                )
        }).catch((err)=>{
            
        })
    }
    
}

export const onLogoutUser=()=>{
    // menghapus data di local storage
    
    localStorage.removeItem('userData')
    window.location.reload();
    // menghapus data di redux
    return {
        type:"LOGOUT_SUCCESS"
    }
}


export const premiumPromo=()=>{
    console.log('a');
    return(dispatch)=>{
        
        dispatch ({

            type:"PREMIUM_USER"
        
        })
    }
}
