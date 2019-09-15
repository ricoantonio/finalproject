import React, { Component } from 'react'
import BogoWhite from '.././Webpic/BOGOlogoWhite.svg'
import {Link} from 'react-router-dom'
import Sidenav from './Sidenav'

class Nav extends Component{
    

    render() {
        return (
            <div>
                <div className="z-depth-2">
                    <nav>
                        <div class="nav-wrapper black">
                        <Link to="/" class="brand-logo center"><img className="" src={BogoWhite} style={{height:"29px"}} alt="BOGO"/></Link>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            {/* <li><input className="white-text" type="text" placeholder="Search.." /></li> */}
                            <li><Link className="waves-effect waves-light" to="/register">Register</Link></li>
                            <li><Link className="waves-effect waves-light" to="/login">Sign In</Link></li>
                        </ul>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <span style={{marginLeft:10,marginRight:0}}>|</span>
                            {/* <li><input className="white-text" type="text" placeholder="Search.." /></li> */}
                            <li id="searchBar">
                                <div className="white not-square btn">
                                    {/* <span style={{fontSize:"13px"}}>search</span> */}
                                    <div>
                                        <input className="noStyle teal-text text-darken-1" type="text" placeholder="Search..."/>
                                    </div>
                                </div>
                                    <i className="material-icons left" style={{fontSize:"200%",marginRight:0,marginTop:"1%"}}>search</i>
                            </li>
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