import React, { Component } from 'react'
import Bogo from '.././Webpic/BOGOlogo.svg'
import {Link,Redirect} from 'react-router-dom'
import axios from 'axios'
import { connect } from "react-redux";
import moment from 'moment'

import urlApi from '../helpers'

class Register extends Component{

    state={
        name:'',
        email:'',
        password:'',
        confirmpass:'',
        onRegisterClick:0,
        usertaken:0,
        done:false
    }   

    checkName=()=>{
        if(!this.state.name){
            return(
                <div class="input-field col s12">
                    <input onChange={e=>this.setState({name:e.target.value})} style={{fontSize:"20px"}} className="teal-text text-darken-1 inline" id="firstname" type="text"  placeholder='Your Name'/>
                    <span className=" red-text text-darken-3" style={{fontSize:"12px"}}><b>Enter Your Name</b> </span>
                    <i className="material-icons left  red-text text-darken-3">error</i>
                </div>
            )
        }else{
            return(
                <div class="input-field col s12">
                    <input onChange={e=>this.setState({name:e.target.value})} style={{fontSize:"20px"}} className="teal-text text-darken-1" id="firstname" type="text"  placeholder='Your Name'/>
                    <span className="teal-text" style={{fontSize:"12px"}}><b>Enter Your Name</b></span>
                    <i className="material-icons left teal-text">check</i>
                </div>
            )
        }
    }
    checkEmail=()=>{
        if(!this.state.email){
            return(
                <div class="input-field col s12">
                    <input onChange={e=>this.setState({email:e.target.value})} style={{fontSize:"20px"}} className="teal-text text-darken-1 inline" id="email" type="text"  placeholder='E-mail'/>
                    <span className="red-text text-darken-3" style={{fontSize:"12px"}}><b>Enter Email</b> </span>
                    <i className="material-icons left red-text text-darken-3">error</i>
                </div>
            )
        }if (this.state.usertaken){
            return(
                <div class="input-field col s12">
                    <input onChange={e=>this.setState({email:e.target.value,usertaken:0})} style={{fontSize:"20px"}} className="teal-text text-darken-1 inline" id="email" type="text"  placeholder='E-mail'/>
                    <span className="red-text text-darken-3" style={{fontSize:"12px"}}><b>Email Alredy Taken </b></span>
                    <i className="material-icons left red-text text-darken-3">error</i>
                </div>
            )
        }else{
            return(
                <div class="input-field col s12">
                    <input onChange={e=>this.setState({email:e.target.value})} style={{fontSize:"20px"}} className="teal-text text-darken-1" id="email" type="text"  placeholder='Email'/>
                    <span className="teal-text" style={{fontSize:"12px"}}><b>Enter Email</b></span>
                    <i className="material-icons left teal-text">check</i>
                </div>
            )
        }
    }
    checkPassword=()=>{
        if(!this.state.password){
            return(
                <div class="input-field col s6">
                    <input onChange={e=>this.setState({password:e.target.value})} className="teal-text text-darken-1 inline" id="password" type="password"  placeholder='Password '/>
                    <span className="red-text text-darken-3" style={{fontSize:"12px"}}><b>Enter Password</b></span>
                    <i className="material-icons left red-text text-darken-3">error</i>
                </div>
            )
        }else{
            return(
                <div class="input-field col s6">
                    <input onChange={e=>this.setState({password:e.target.value})} className="teal-text text-darken-1" id="password" type="password"  placeholder='Password '/>
                    <span className="teal-text" style={{fontSize:"12px"}}><b>Enter Password</b></span>
                    <i className="material-icons left teal-text">check</i>
                </div>

            )
        }
    }
    
    checkConfirmPassword=()=>{
        if(!this.state.confirmpass){
            return(
                <div class="input-field col s6">
                    <input onChange={e=>this.setState({confirmpass:e.target.value})} className="teal-text text-darken-1 inline" id="confirm" type="password"  placeholder='Confirm Password '/>
                    <span className="red-text text-darken-3" style={{fontSize:"12px"}}><b>Enter Confirm Password</b></span>
                    <i className="material-icons left red-text text-darken-3">error</i>
                </div>
            )
        }if(this.state.password===this.state.confirmpass){
            return(
                <div class="input-field col s6">
                    <input onChange={e=>this.setState({confirmpass:e.target.value})} className="teal-text text-darken-1 inline" id="confirm" type="password"  placeholder='Confirm Password '/>
                    <span className="teal-text" style={{fontSize:"12px"}}><b>Confirm Password Match</b></span>
                    <i className="material-icons left teal-text">done_all</i>
                </div>
            )
        }else{
            return(
                <div class="input-field col s6">
                    <input onChange={e=>this.setState({confirmpass:e.target.value})} className="teal-text text-darken-1" id="confirm" type="password"  placeholder='Confirm Password '/>
                    <span className="red-text text-darken-3" style={{fontSize:"12px"}}><b>Confirm Password Does't Match</b></span>
                    <i className="material-icons left red-text text-darken-3">error</i>
                </div>
            )
        }
    }
    

    onRegister=()=>{
        console.log(moment().format('YYYYY-MM-DD, H:mm:ss'));
        console.log(moment().format('YYYY-MM-DD'));
        if (!this.state.name||
            !this.state.email||
            !this.state.password||
            !this.state.confirmpass||
            this.state.password!==this .state.confirmpass||
            this.state.usertaken
        ){
            this.setState({onRegisterClick:1})
            
        }else{
            this.setState({onRegisterClick:1})
// moment(new Date()).format('YYYY-MM-DD HH:mm:ss.SSS')
            
            axios.post(urlApi+'/auth/register',{
                    name:this.state.name,
                    lastname:this.state.lastname,
                    email:this.state.email,
                    password:this.state.password,
                    date:moment().format('YYYYY-MM-DD, H:mm:ss')
            }).then((res)=>{
                if (res.data.status==='201'){
                    this.setState({done:true})
                    // done
                }else if (res.data.status==='400'){
                    //taken
                    this.setState({usertaken:1})
                }
            })
          
        }
        
    }

    renderRegis=()=>{
        if(this.state.onRegisterClick===0){
            return (
                <div className="container"> 
                    <div className="center-align">
                        <Link className="center-align" to="/"><img className="logo" src={Bogo} alt="BOGO"/></Link>
                    </div>
                    <div className="row">
                        <div className="border col s6 offset-s3">
                            <div> 
                                <h5 className="center" style={{marginTop:"0px"}}>Register</h5>
                                <div className="">
                                    <div class="input-field col s12">
                                        <input onChange={e=>this.setState({name:e.target.value})} style={{fontSize:"20px"}} className="teal-text text-darken-1" id="name" type="text" placeholder='Your Name'/>
                                    </div>
                                    <div class="input-field col s12">
                                        <input onChange={e=>this.setState({email:e.target.value})} style={{fontSize:"20px"}} className="teal-text text-darken-1" id="email" type="text" placeholder='E-mail'/>
                                    </div>
                                    <div class="input-field col s6">
                                        <input onChange={e=>this.setState({password:e.target.value})} className="teal-text text-darken-1" id="password" type="password" placeholder='Password'/>
                                    </div>
                                    <div class="input-field col s6">
                                        <input onChange={e=>this.setState({confirmpass:e.target.value})} className="teal-text text-darken-1" id="confirm" type="password" placeholder='Confirm Password'/>
                                    </div>
                                </div>
                                <div className="center">
                                    <button onClick={this.onRegister} className="waves-effect waves-light btn black not-square btn-large" style={{marginTop:"5%"}}>Register</button>
                                </div>
                                <div className="center-align" >
                                    <p>Do you have an account? <Link className="teal-text text-darken-1" to="/login">Sign in</Link></p>
                                </div>
                                <p className="center" style={{fontSize:"12px"}}>By clicking "Register", you agree to the <a href="/" className="teal-text text-darken-1">Terms of Service</a> and <a href="/" className="teal-text text-darken-1">Privacy Policy</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else{
            return(
                <div className="container bgregis"> 
                    <div className="center-align">
                        <Link className="center-align" to="/"><img className="logo" src={Bogo} alt="BOGO"/></Link>
                    </div>
                    <div className="row">
                        <div className="border col s6 offset-s3">
                            <div> 
                                <h5 className="center" style={{marginTop:"0px"}}>Register</h5>
                                <div className="">
                                        {this.checkName()}
                                        {this.checkEmail()}
                                        {this.checkPassword()}
                                        {this.checkConfirmPassword()}
                                </div>
                                <div className="center">
                                    <button onClick={this.onRegister} className="waves-effect waves-light btn black not-square btn-large" style={{marginTop:"5%"}}>Register</button>
                                </div>
                                <div className="center-align">
                                    <p>Do you have an account? <Link className="teal-text text-darken-1" to="/login">Sign in</Link></p>
                                </div>
                                <p className="center" style={{fontSize:"12px"}}>By clicking "Register", you agree to the <a href="/" className="teal-text text-darken-1">Terms of Service</a> and <a href="/" className="teal-text text-darken-1">Privacy Policy</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
    render() {
       if(this.props.email){
           return(
               <Redirect to='/'/>
           )
       }else if (this.state.done){
            return(
                <Redirect to='/verify'/>
            )
       }else{
           return(
               this.renderRegis()
           )
       }
    }
}


const mapStateToProps=state=>{
    return {
      email: state.auth.email
    }
}


export default connect(mapStateToProps)(Register)