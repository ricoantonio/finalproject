import React, { Component } from 'react'

class Nav extends Component{
    render() {
        return (
            <div>
                <div className="row z-depth-2">
                    <nav className="col indigo lighten-2">
                        <div class="nav-wrapper indigo lighten-2">
                        <a href="/" class="brand-logo">Logo saya</a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><input className="white-text" type="text" placeholder="Search.." /></li>
                            <li><a className="waves-effect waves-light" href="/register">Register</a></li>
                            <li><a className="waves-effect waves-light" href="/login">Sign In</a></li>
                        </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Nav