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
        comfirmpass:''
    }   

    onRegister=()=>{
        
    }

    render() {
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
                                    <input onChange={e=>this.setState({comfirmpass:e.target.value})} className="teal-text text-darken-1" id="confirm" type="password" placeholder='Confirm Password'/>
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
    }
}
export default Register