import axios from 'axios'


const urlApi = 'http://localhost:2019'

export const onLoginUser=(EMAIL, PASSWORD)=>{

   

    return (dispatch)=>{
        // Hanya ketika menggunakan get yang terdapat params:
            // axios.get(urlApi + '/auth/login', {
            //     params: {
            //         email: this.state.email,
            //         password: this.state.password
            //     }
            // })
            // .then(res => {
            //     console.log(res.data)
            //     // 401 wrong pass
            //     // 404 user not found
            //     if(res.data.status=='404'){
            //         this.setState({noUser:1})
            //     }else if(res.data.status=='401'){
            //         this.setState({wrongPass:1})
            //     }else if(res.data.status=='200'){
            //         // success
            //         return{

            //             type :"LOGIN_SUCCESS",
            //             payload:{
            //                 id,email
            //             }
            //         }
            //     }
            // })
            // .catch(err => {
            //     console.log(err)
            // })
          

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
            // if (res.data.length == 0) {
            //     dispatch(
            //         {
            //             type:"LOGIN_ERROR",
                        
            //         }
            //     )
            // }else{

            //     let {id, username}=res.data[0]
            //     // 1. mengirim data ke redux
            //     // res.data[0] ={id, email, username , password}

            //     // this.state({login:true})

            //     // 2. Mengirim data ke local storage
            //     localStorage.setItem(
            //         'userData',
            //         JSON.stringify({id,email}) 
            //     )
            //     // menyimpan data di redux 
            //     dispatch(
            //         {
            //             type :"LOGIN_SUCCESS",
            //             payload:{
            //                 id,email
            //             }
            //         }
            //     )

            // }
        }).catch((err)=>{
            
        })
    }
    
}


// export const onLogoutUser=()=>{
//     // menghapus data di local storage
//     localStorage.removeItem('userData')

//     // menghapus data di redux
//     return {
//         type:"LOGOUT_SUCCESS"
//     }
// }
