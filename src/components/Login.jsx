import React, { Component } from 'react'
import Logo from "../logo1.svg"
import {Link} from 'react-router-dom'

class Login extends Component{
    render() {
        return (
            <div>
                <div className="container row">
                    <div className="center-align">
                        <Link className="center-align" to="/"><img className="logo" src={Logo} alt="LABS"/></Link>
                    </div>
                    <div className="border col s4 offset-s4">
                        <div>
                            <h5 className="center grey-text text-darken-2" style={{marginTop:"0px"}}>Sign In</h5>
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
                                <button className="waves-effect waves-light btn indigo lighten-2" style={{marginTop:"5%"}}>Sign In</button>
                            </div>
                            <div className="center-align">
                                <p className="center grey-text text-darken-2">Don't have an account? <Link className="indigo-text text-lighten-1" to="/register">Register</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login