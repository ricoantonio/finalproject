import React, { Component } from 'react'
import Bogo from '.././Webpic/BOGOlogo.svg'
import {Link} from 'react-router-dom'

class Login extends Component{
    render() {
        return (
            <div>
                <div className="container row">
                    <div className="center-align">
                        <Link className="center-align" to="/"><img className="logo" src={Bogo} alt="LABS"/></Link>
                    </div>
                    <div className="border col s4 offset-s4">
                        <div>
                            <h5 className="center" style={{marginTop:"0px"}}>Sign In</h5>
                            <div className="">
                                <div class="input-field col s12">
                                    <input id="username" type="text"/>
                                    <label for="username">Username</label>
                                </div>
                                <div class="input-field col s12">
                                    <input id="password" type="password"/>
                                    <label for="password">Password</label>
                                </div>
                            </div>
                            <div className="center">
                                <button className="waves-effect waves-light btn black not-square" style={{marginTop:"5%"}}>Sign In</button>
                            </div>
                            <div className="center-align">
                                <p>Don't have an account? <Link className="teal-text" to="/register">Register</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login