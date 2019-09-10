import React, { Component } from 'react'
class Login extends Component{
    render() {
        return (
            <div className="container row" style={{marginTop:"3%"}}>
                <div className="center-align">
                    <a className="center-align" href="/">logo saya</a>
                </div>
                <div className="border col s4 offset-s4">
                    <div>
                        <h3 className="center grey-text text-darken-2">Sign In</h3>
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
                            <button className="waves-effect waves-light btn indigo lighten-2">Sign In</button>
                        </div>
                        <div className="center-align">
                            <p className="center grey-text text-darken-2">Don't have an account? <a className="indigo-text text-lighten-1" href="/register">Register</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login