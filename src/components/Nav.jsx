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
                        <Link to="/" class=" left"><img className="" src={BogoWhite} style={{height:"29px", marginLeft:"30%",marginTop:"20%"}} alt="BOGO"/></Link>
                        <Link to='/drama' className="navMenu2" style={{marginLeft:"5%",marginRight:"2%"}}>KOREAN DRAMA</Link>
                        <Link to='/variety' className="navMenu2" style={{marginRight:"2%"}}>KOREAN VARIETY</Link>
                        <Link to='/movie' className="navMenu2" style={{marginRight:"2%"}}>MOVIES</Link>
                        <Link to='/anime' className="navMenu2" style={{marginRight:"2%"}}>ANIME</Link>
                        {/* <span className="not-square white">
                        <input className="noStyle teal-text text-darken-1 white" type="text" placeholder="Search..."/>
                        <i className="material-icons black-text left top" style={{fontSize:"200%",marginRight:0,marginTop:0,paddingTop:0}}>search</i>
                        </span> */}

                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li>
                                <a class="waves-effect waves-black btn not-square white black-text"><i class="material-icons left" style={{paddingTop:1,marginRight:1}}>search</i>search</a>
                            </li>
                            
                            <li  style={{marginBottom:0}}><Link className="navMenu"  style={{marginBottom:0}} to="/register">Register</Link></li>
                            <li  style={{margintop:0}}><Link className="navMenu" to="/login">Sign In</Link></li>
                        </ul>
                        {/* <Sidenav/> */}
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Nav