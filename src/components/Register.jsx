import React, { Component } from 'react'
import Logo from "../logo1.svg"
import {Link} from 'react-router-dom'



class Register extends Component{
    render() {
        return (
            <div className="container"> 
                <div className="center-align">
                    <Link className="center-align" to="/"><img className="logo" src={Logo} alt="Mix Labs"/></Link>
                </div>
                <div className="row">
                    <div className="border col s6 offset-s3">
                        <div> 
                            <h5 className="center grey-text text-darken-2" style={{marginTop:"0px"}}>Register</h5>
                            <div className="">
                                <div class="input-field col s6">
                                    <input id="firstname" type="text"/>
                                    <label for="firstname">First Name</label>
                                </div>
                                <div class="input-field col s6">
                                    <input id="lastname" type="text"/>
                                    <label for="lastname">Last Name</label>
                                </div>
                                <div class="input-field col s12">
                                    <input id="email" type="text"/>
                                    <label for="email">E-mail</label>
                                </div>
                                <div class="input-field col s6">
                                    <input id="password" type="password"/>
                                    <label for="password">Password</label>
                                </div>
                                <div class="input-field col s6">
                                    <input id="confirm" type="password"/>
                                    <label for="confirm">Confirm</label>
                                </div>
                            </div>
                            <div className="center">
                                <button className="waves-effect waves-light btn indigo lighten-2" style={{marginTop:"5%"}}>Register</button>
                            </div>
                            <div className="center-align">
                                <p className="center grey-text text-darken-2">Do you have an account? <Link className="indigo-text text-lighten-1" to="/login">Sign in</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register