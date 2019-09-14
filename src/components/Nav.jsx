import React, { Component } from 'react'
import Labs from '.././Webpic/LABSwhite.svg'
import {Link} from 'react-router-dom'
import Sidenav from './Sidenav'

class Nav extends Component{
    

    render() {
        return (
            <div>
                <div className="z-depth-2">
                    <nav className="indigo lighten-2">
                        <div class="nav-wrapper indigo lighten-2">
                        <Link to="/" class="brand-logo center"><img className="" src={Labs} style={{height:"25px"}} alt="LABS"/></Link>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            {/* <li><input className="white-text" type="text" placeholder="Search.." /></li> */}
                            <li id="searchBar">
                                <div className="indigo lighten-0 not-square btn">
                                    {/* <span style={{fontSize:"13px"}}>search</span> */}
                                    <div>
                                        <input className="noStyle" type="text" placeholder="Search..."/>
                                    </div>
                                </div>
                                    <i className="material-icons left" style={{fontSize:"200%",marginRight:0,marginTop:"1%"}}>search</i>
                            </li>
                            <li><Link className="waves-effect waves-light" to="/register">Register</Link></li>
                            <li><Link className="waves-effect waves-light" to="/login">Sign In</Link></li>
                        </ul>
                        <Sidenav/>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Nav