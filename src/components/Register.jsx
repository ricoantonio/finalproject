import React, { Component } from 'react'
import Bogo from '.././Webpic/BOGOlogo.svg'
import {Link} from 'react-router-dom'
import axios from 'axios'



class Register extends Component{

    state={
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        confirmpass:'',
        onRegisterClick:0
    }   

    checkFirstname=()=>{
        if(!this.state.firstname){
            return(
                <div class="input-field col s6">
                    <input onChange={e=>this.setState({firstname:e.target.value})} className="teal-text text-darken-1 inline" id="firstname" type="text"  placeholder='First Name'/>
                    <span className="red-text" style={{fontSize:"12px"}}>Enter First Name</span>
                    <i className="material-icons left red-text">error</i>
                </div>
            )
        }else{
            return(
                <div class="input-field col s6">
                    <input onChange={e=>this.setState({firstname:e.target.value})} className="teal-text text-darken-1" id="firstname" type="text"  placeholder='First Name'/>
                    <span className="green-text" style={{fontSize:"12px"}}>Enter First Name</span>
                    <i className="material-icons left green-text">check</i>
                </div>
            )
        }
    }
    checkLastname=()=>{
        if(!this.state.lastname){
            return(
                <div class="input-field col s6">
                    <input onChange={e=>this.setState({lastname:e.target.value})} className="teal-text text-darken-1 inline" id="lastname" type="text"  placeholder='Last Name'/>
                    <span className="red-text" style={{fontSize:"12px"}}>Enter Last Name</span>
                    <i className="material-icons left red-text">error</i>
                </div>
            )
        }else{
            return(
                <div class="input-field col s6">
                    <input onChange={e=>this.setState({lastname:e.target.value})} className="teal-text text-darken-1" id="lastname" type="text"  placeholder='Last Name'/>
                    <span className="green-text" style={{fontSize:"12px"}}>Enter Last Name</span>
                    <i className="material-icons left green-text">check</i>
                </div>
            )
        }
    }
    checkEmail=()=>{
        if(!this.state.email){
            return(
                <div class="input-field col s12">
                    <input onChange={e=>this.setState({email:e.target.value})} className="teal-text text-darken-1 inline" id="email" type="text"  placeholder='Email'/>
                    <span className="red-text" style={{fontSize:"12px"}}>Enter Email</span>
                    <i className="material-icons left red-text">error</i>
                </div>
            )
        }else{
            return(
                <div class="input-field col s12">
                    <input onChange={e=>this.setState({email:e.target.value})} className="teal-text text-darken-1" id="email" type="text"  placeholder='Email'/>
                    <span className="green-text" style={{fontSize:"12px"}}>Enter Email</span>
                    <i className="material-icons left green-text">check</i>
                </div>
            )
        }
    }
    checkPassword=()=>{
        if(!this.state.password){
            return(
                <div class="input-field col s6">
                    <input onChange={e=>this.setState({password:e.target.value})} className="teal-text text-darken-1 inline" id="password" type="password"  placeholder='Password '/>
                    <span className="red-text" style={{fontSize:"12px"}}>Enter Password</span>
                    <i className="material-icons left red-text">error</i>
                </div>
            )
        }else{
            return(
                <div class="input-field col s6">
                    <input onChange={e=>this.setState({password:e.target.value})} className="teal-text text-darken-1" id="password" type="password"  placeholder='Password '/>
                    <span className="green-text" style={{fontSize:"12px"}}>Enter Password</span>
                    <i className="material-icons left green-text">check</i>
                </div>
            )
        }
    }
    
    checkConfirmPassword=()=>{
        if(!this.state.confirmpass){
            return(
                <div class="input-field col s6">
                    <input onChange={e=>this.setState({confirmpass:e.target.value})} className="teal-text text-darken-1 inline" id="confirm" type="password"  placeholder='Confirm Password '/>
                    <span className="red-text" style={{fontSize:"12px"}}>Enter Confirm Password</span>
                    <i className="material-icons left red-text">error</i>
                </div>
            )
        }else{
            return(
                <div class="input-field col s6">
                    <input onChange={e=>this.setState({confirmpass:e.target.value})} className="teal-text text-darken-1" id="confirm" type="password"  placeholder='Confirm Password '/>
                    <span className="green-text" style={{fontSize:"12px"}}>Enter Confirm Password</span>
                    <i className="material-icons left green-text">check</i>
                </div>
            )
        }
    }
    

    onRegister=()=>{
        this.setState({onRegisterClick:1})
        
    }

    render() {
        if(this.state.onRegisterClick==0){
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
                                    <div class="input-field col s6">
                                        <input onChange={e=>this.setState({firstname:e.target.value})} className="teal-text text-darken-1" id="firstname" type="text"  placeholder='First Name'/>
                                    </div>
                                    <div class="input-field col s6">
                                        <input onChange={e=>this.setState({lastname:e.target.value})} className="teal-text text-darken-1" id="lastname" type="text" placeholder='Last Name'/>
                                    </div>
                                    <div class="input-field col s12">
                                        <input onChange={e=>this.setState({email:e.target.value})} className="teal-text text-darken-1" id="email" type="text" placeholder='E-mail'/>
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
                                <div className="center-align">
                                    <p>Do you have an account? <Link className="teal-text text-darken-1" to="/login">Sign in</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else{
            return(
                <div className="container"> 
                    <div className="center-align">
                        <Link className="center-align" to="/"><img className="logo" src={Bogo} alt="BOGO"/></Link>
                    </div>
                    <div className="row">
                        <div className="border col s6 offset-s3">
                            <div> 
                                <h5 className="center" style={{marginTop:"0px"}}>Register</h5>
                                <div className="">
                                        {this.checkFirstname()}
                                        {this.checkLastname()}
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
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
export default Register