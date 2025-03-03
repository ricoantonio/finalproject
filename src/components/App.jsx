import React, { Component } from 'react'
import {Route,BrowserRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import moment from 'moment'

import urlApi from '../helpers'
import {onRefresh} from '../action/index'

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
import Notif from './Notif'
import NotifRed from './NotifRed'
import HomeSearch from './HomeSearch'
import { Nav } from './Nav'

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

    renderNotif=()=>{

    }

    render() {
        if(this.state.check){
            if(moment(this.props.dateEnd)>=moment()){
                Axios.post(urlApi+'/auth/lastactive',{
                    lastActive:moment().format('YYYY-MM-DD H:mm:ss'),
                    email:this.props.email 
                }).then((res)=>{
                }).catch((err)=>{
                     
                })
                console.log('premium');
                return (   
                    <> 
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
                            <Route path="/search" component={HomeSearch}/>
                        </BrowserRouter>
                    </>
         
                )
                
            }else{
                if(this.props.email==='admin'){
                    Axios.post(urlApi+'/auth/lastactive',{
                        lastActive:moment().format('YYYY-MM-DD H:mm:ss'),
                        email:this.props.email
                    }).then((res)=>{
    
                    }).catch((err)=>{
                        
                    })
                    console.log('ini admin');
                    return (
                        <>
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
                                <Route path="/search" component={HomeSearch}/>
                            </BrowserRouter>
                        </>
                    )
                }else{
                    if(this.props.email && this.props.plan === 'premium' && moment(this.props.dateEnd)<=moment()){
                        // console.log('update to free');
                        // console.log(this.props.id);
                        // console.log('a');
                        
                        Axios.post(urlApi+'/payment/tofree',{
                            email:this.props.email,
                            id:this.props.id
                            
                        }).then((res)=>{
                            // console.log('b');
                            // console.log(res);
                            this.props.onRefresh(this.props.email)
                            Axios.post(urlApi+'/auth/lastactive',{
                                lastActive:moment().format('YYYY-MM-DD H:mm:ss'),
                                email:this.props.email
                            }).then((res)=>{
                                // console.log('c');
                                console.log(res);
                                
                            }).catch((err)=>{
                                console.log(err);
                                
                            })
                            
                        }).catch((err)=>{
                            console.log(err);
                            
                        })
                        
                        return (
                            <>
                                <BrowserRouter>
                                    <Nav/>
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
                                    <Route path="/search" component={HomeSearch}/>
                                </BrowserRouter>
                            </>
                        )
    
                    }else{
                        Axios.post(urlApi+'/auth/lastactive',{
                            lastActive:moment().format('YYYY-MM-DD H:mm:ss'),
                            email:this.props.email
                        }).then((res)=>{
        
                        }).catch((err)=>{
                            
                        })
                        console.log('free user');
                        return (
                            <>
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
                                    <Route path="/search" component={HomeSearch}/>
                                </BrowserRouter>
                            </>
                        )
                    }
                }
            }
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
      plan:state.auth.plan,
      email:state.auth.email,
      id:state.auth.id
    }
}

export default connect(mapStateToProps,{keepLogin, onRefresh })(App)