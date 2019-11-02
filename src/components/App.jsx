import React, { Component } from 'react'
import {Route,BrowserRouter} from 'react-router-dom'
import {connect} from 'react-redux'

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

const keepLogin =(objUser)=>{
    return{
        type:"LOGIN_SUCCESS",
        payload:{
            id:objUser.id,
            email: objUser.email,
            role:objUser.role,
            plan:objUser.plan
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

export default connect(null,{keepLogin})(App)