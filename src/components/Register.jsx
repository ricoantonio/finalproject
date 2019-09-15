import React, { Component } from 'react'
import Bogo from '.././Webpic/BOGOlogo.svg'
import {Link} from 'react-router-dom'



class Register extends Component{
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
                                    <input className="underlineColor" id="firstname" type="text"/>
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
                                <button className="waves-effect waves-light btn black not-square" style={{marginTop:"5%"}}>Register</button>
                            </div>
                            <div className="center-align">
                                <p>Do you have an account? <Link className="teal-text" to="/login">Sign in</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register