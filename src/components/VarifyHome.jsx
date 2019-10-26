import React, { Component } from 'react'
import Bogo from '.././Webpic/BOGOlogo.svg'
import {Link} from 'react-router-dom'


export class VerifyHome extends Component {
    render() {
        return (
            <div className="container">
                <div className="center-align">
                    <Link className="center-align" to="/"><img className="logo" src={Bogo} alt="BOGO"/></Link>
                </div>
                <div id="wrapper">
                    <h3 className="center sideText black-text">
                        Please Verify Your Account
                    </h3>
                </div>
            </div>
        )
    }
}

export default VerifyHome
