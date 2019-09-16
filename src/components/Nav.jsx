import React, { Component } from 'react'
import BogoWhite from '.././Webpic/BOGOlogoWhite.svg'
import {Link} from 'react-router-dom'
import Sidenav from './Sidenav'

class Nav extends Component{
    

    render() {
        return (
            <div style={{margin:0}}>
                <div className="z-depth-2">
                    <nav>
                        <div class="nav-wrapper black">
                        <Link to="/" class="brand-logo center"><img className="" src={BogoWhite} style={{height:"29px"}} alt="BOGO"/></Link>
                        <ul id="nav-mobile" class="right">
                            {/* <li><input className="white-text" type="text" placeholder="Search.." /></li> */}
                            <li  style={{marginBottom:0}}><Link className=""  style={{marginBottom:0}} to="/register">Register</Link></li>
                            <li  style={{margintop:0}}><Link className="" to="/login">Sign In</Link></li>
                        </ul>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <span style={{marginLeft:10,marginRight:0}}>|</span>
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