import React, { Component } from 'react'




class Register extends Component{
    render() {
        return (
            <div className="container row">
                <div className="border col s6 offset-s3">
                    <div>
                        <h3 mb={4} className="center">Create your Account</h3>
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
                                <input id="username" type="text"/>
                                <label for="username">Username</label>
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
                            <button className="waves-effect waves-light btn indigo lighten-2">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register