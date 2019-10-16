import axios from 'axios'


const urlApi = 'http://localhost:2019'

export const onLoginClick=()=>{
    return (dispatch)=>{
        dispatch({
            type:"LOGIN_CLICK"
        })
    }
}


export const onLoginUser=(EMAIL, PASSWORD)=>{

    return (dispatch)=>{
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
            if (res.data.status=='404'){
                // user not found
                dispatch(
                    { 
                       type:"LOGIN_ERROR_NOT_FOUND"
                    }
                )
            }else if (res.data.status=='401'){
                // wrong pass
                dispatch(
                    { 
                       type:"LOGIN_ERROR_WRONG_PASS"
                    }
                )
            }else if (res.data.status=='200'){
                //success
                console.log(res.data);
                
                let {id,email}=res.data.result

                localStorage.setItem(
                    'userData',
                    JSON.stringify({id,email})
                )
                
                
                dispatch(
                    { 
                        type:"LOGIN_SUCCESS",
                        payload:{
                            id,email
                        }
                    }
                )
            }
        }).catch((err)=>{
            
        })
    }
    
}


export const onLogoutUser=()=>{
    // menghapus data di local storage
    localStorage.removeItem('userData')

    // menghapus data di redux
    return {
        type:"LOGOUT_SUCCESS"
    }
}
