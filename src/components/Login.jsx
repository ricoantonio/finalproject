import React, { Component } from 'react'
import Bogo from '.././Webpic/BOGOlogo.svg'
import {Link} from 'react-router-dom'

class Login extends Component{
    
    state={
        onLoginClick:0,
        email:'',
        password:''
    }

    onLogin=()=>{
        this.setState({onLoginClick:1})
    }

    checkEmail=()=>{
        // <div class="input-field col s12">
        //     <input style={{fontSize:"20px"}} className="teal-text text-darken-1" id="username" type="text" placeholder='E-mail'/>
        // </div>
        if(!this.state.email){
            return(
                <div class="input-field col s12">
                    <input onChange={e=>this.setState({email:e.target.value})} style={{fontSize:"20px"}} className="teal-text text-darken-1" id="email" type="text"  placeholder='E-mail'/>
                    <span className="red-text text-darken-3" style={{fontSize:"12px"}}><b>Enter Email</b> </span>
                    <i className="material-icons left red-text text-darken-3">error</i>
                </div>
            )
        }else{
            return(
                <div class="input-field col s12">
                    <input onChange={e=>this.setState({email:e.target.value})} style={{fontSize:"20px"}} className="teal-text text-darken-1" id="email" type="text"  placeholder='E-mail'/>
                </div>
            )
        }

    }

    checkPassword=()=>{
        // <div class="input-field col s12">
        //     <input style={{fontSize:"20px"}} className="teal-text text-darken-1" id="password" type="password" placeholder='Password' />
        // </div>
        if(!this.state.password){
            return(
                <div class="input-field col s12">
                    <input onChange={e=>this.setState({password:e.target.value})} style={{fontSize:"20px"}} className="teal-text text-darken-1 inline" id="password" type="password"  placeholder='Password '/>
                    <span className="red-text text-darken-3" style={{fontSize:"12px"}}><b>Enter Password</b></span>
                    <i className="material-icons left red-text text-darken-3">error</i>
                </div>
            )
        }else{
            return(
                <div class="input-field col s12">
                    <input onChange={e=>this.setState({password:e.target.value})} style={{fontSize:"20px"}} className="teal-text text-darken-1" id="password" type="password"  placeholder='Password '/>
                </div>

            )
        }
    }

    render() {
        if(this.state.onLoginClick==0){
            return (
                <div>
                    <div className="container row">
                        <div className="center-align">
                            <Link className="center-align" to="/"><img className="logo" src={Bogo} alt="LABS"/></Link>
                        </div>
                        <div className="border col s4 offset-s4">
                            <div>
                                <h5  className="center" style={{marginTop:"0px"}}>Sign In</h5>
                                <div className="">
                                    <div class="input-field col s12">
                                        <input  onChange={e=>this.setState({email:e.target.value})} style={{fontSize:"20px"}} className="teal-text text-darken-1" id="username" type="text" placeholder='E-mail'/>
                                    </div>
                                    <div class="input-field col s12">
                                        <input  onChange={e=>this.setState({password:e.target.value})} style={{fontSize:"20px"}} className="teal-text text-darken-1" id="password" type="password" placeholder='Password' />
                                    </div>
                                </div>
                                <div className="center">
                                    <button onClick={this.onLogin} className="waves-effect waves-light btn black not-square btn-large" style={{marginTop:"5%"}}>Sign In</button>
                                </div>
                                <div className="center-align">
                                    <p>Don't have an account? <Link className="teal-text text-darken-1" to="/register">Register</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else{
            return(
                <div>
                    <div className="container row">
                        <div className="center-align">
                            <Link className="center-align" to="/"><img className="logo" src={Bogo} alt="LABS"/></Link>
                        </div>
                        <div className="border col s4 offset-s4">
                            <div>
                                <h5  className="center" style={{marginTop:"0px"}}>Sign In</h5>
                                <div className="">
                                    {this.checkEmail()}
                                    {this.checkPassword()}
                                </div>
                                <div className="center">
                                    <button onClick={this.onLogin} className="waves-effect waves-light btn black not-square btn-large" style={{marginTop:"5%"}}>Sign In</button>
                                </div>
                                <div className="center-align">
                                    <p>Don't have an account? <Link className="teal-text text-darken-1" to="/register">Register</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
export default Login