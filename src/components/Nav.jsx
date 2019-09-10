import React, { Component } from 'react'
import Labs from '../LABSwhite.svg'
import {Link} from 'react-router-dom'

class Nav extends Component{
    render() {
        return (
            <div>
                <div className="row z-depth-2">
                    <nav className="col indigo lighten-2">
                        <div class="nav-wrapper indigo lighten-2">
                        <Link to="/" class="brand-logo"><img src={Labs} style={{height:"25px"}} alt="Mix Labs"/></Link>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><input className="white-text" type="text" placeholder="Search.." /></li>
                            <li><Link className="waves-effect waves-light" to="/register">Register</Link></li>
                            <li><Link className="waves-effect waves-light" to="/login">Sign In</Link></li>
                        </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Nav