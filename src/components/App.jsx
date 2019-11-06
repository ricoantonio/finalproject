import React, { Component } from 'react'
import {Route,BrowserRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import moment from 'moment'


import Login from './Login'
import Register from './Register'
import Home from './Home'
import HomeAnime from './HomeAnime'
import HomeDrama from './HomeDrama'
import HomeVariety from './HomeVariety'
import HomeMovie from './HomeMovie'
import MyAccount from './MyAccount'
import MovieDetail from './MovieDetal'
import VerifyHome from './VarifyHome'
import SubsHome from './SubsHome'
import RegisPlan  from './RegisPlan'
import LoginPlan from './LoginPlan'
import SelectedPlan from './SelectedPlan'
import Admin from './Admin'
import PendingUser from './PendingUser'
import Axios from 'axios'

const keepLogin =(objUser)=>{
    return{
        type:"LOGIN_SUCCESS",
        payload:{
            id:objUser.id,
            email: objUser.email,
            role:objUser.role,
            plan:objUser.plan,
            dateEnd:objUser.dateEnd
        }
    }
}

class App extends Component{
    state={
        check:false
    }

    componentDidMount() {
        // check LocalStorage
        
        let userStorage=JSON.parse(localStorage.getItem("userData"))
        
        if (userStorage){
            //kirim ke redux
            this.props.keepLogin(userStorage)
        } 
        
        this.setState({check: true})
    }

    cekUser=()=>{
        if (moment(this.props.dateEnd).format('DD-MM-YYYY H:mm:ss')>=moment().format('DD-MM-YYYY H:mm:ss')){
            // console.log(moment(this.props.dateEnd).format('DD-MM-YYYY H:mm:ss'));
            
            console.log('a');
            
        }else{
            // console.log(moment(this.props.dateEnd).format('DD-MM-YYYY H:mm:ss'));
            
            console.log('b');
            
        }
    }


    

    render() {
        if(this.state.check){
            
            return (
                <BrowserRouter>
                    <Route path="/" exact component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/anime" component={HomeAnime}/>
                    <Route path="/drama" component={HomeDrama}/>
                    <Route path="/variety" component={HomeVariety}/>
                    <Route path="/movie" component={HomeMovie}/>
                    <Route path="/myaccount" component={MyAccount}/>
                    <Route path="/movie-detail/:link" component={MovieDetail}/>
                    <Route path="/admin-dashboard" component={Admin}/>
                    <Route path="/admin-pendinguser" component={PendingUser}/>
                    <Route path="/verify" component={VerifyHome}/>
                    <Route path="/subs" component={SubsHome}/>
                    <Route path="/subregis" component={RegisPlan}/>
                    <Route path="/sublogin" component={LoginPlan}/>
                    <Route path="/plan" component={SelectedPlan}/>
                </BrowserRouter>
     
            )
        }else{
           return(
            <p>Loading</p>
           )
        }
    }
}

const mapStateToProps=state=>{
    return {
      dateEnd:state.auth.dateEnd,
      plan:state.auth.plan
    }
}

export default connect(mapStateToProps,{keepLogin})(App)