import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import Bogo from '.././Webpic/BOGOlogo.svg'
import axios from 'axios'
import { connect } from "react-redux";

import urlApi from '../helpers'

export class LoginPlan extends Component {
    render() {
        return (
            <div>
                <div className="navbar-fixed" style={{margin:0}}>
                    <div className="z-depth-0">
                        <nav>
                            <div class="nav-wrapper white">
                                <Link to="/" class=" left"><img className="" src={Bogo} style={{height:"29px", marginLeft:"30%",marginTop:"20%"}} alt="BOGO"/></Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPlan
