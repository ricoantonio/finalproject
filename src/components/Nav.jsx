import React, { Component } from 'react'
import BogoWhite from '.././Webpic/BOGOlogoWhite.svg'
import {Link} from 'react-router-dom'
import Sidenav from './Sidenav'

class Nav extends Component{
    

    render() {
        return (
            <div className="navbar-fixed" style={{margin:0}}>
                <div className="z-depth-0">
                    <nav>
                        <div class="nav-wrapper black">
                        <Link to="/" class="brand-logo center"><img className="" src={BogoWhite} style={{height:"29px"}} alt="BOGO"/></Link>
                        <ul id="nav-mobile" class="right">
                            <li  style={{marginBottom:0}}><Link className="navMenu"  style={{marginBottom:0}} to="/register">Register</Link></li>
                            <li  style={{margintop:0}}><Link className="navMenu" to="/login">Sign In</Link></li>
                        </ul>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <span style={{marginLeft:10,marginRight:10}}>|</span>
                            <li id="searchBar">
                                <div className="white not-square btn">
                                    <div>
                                        <input className="noStyle teal-text text-darken-1" type="text" placeholder="Search..."/>
                                    </div>
                                </div>
                                    <i className="material-icons left valign-wrapper" style={{fontSize:"200%",marginRight:0,marginTop:0,paddingTop:3}}>search</i>
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