import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Bogo from '.././Webpic/BOGOlogo.svg'


export class RegisPlan extends Component {
    render() {
        return (
            <div>
                <div className="navbar-fixed" style={{margin:0}}>
                    <div className="z-depth-0">
                        <nav>
                            <div class="nav-wrapper white">
                                <Link to="/" class=" left"><img className="" src={Bogo} style={{height:"29px", marginLeft:"30%",marginTop:"20%"}} alt="BOGO"/></Link>
                                <Link className="right" to='/login' style={{marginRight:"2%"}}><b className="black-text">SIGN IN</b></Link>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="row" style={{marginTop:"5%"}}>
                        <div className="border col s4 offset-s4 white" style={{padding:"2%"}}>
                            <div> 
                                <div className="">
                                    <div class="input-field col s12">
                                        <input onChange={e=>this.setState({name:e.target.value})} style={{fontSize:"20px"}} className="teal-text text-darken-1" id="name" type="text" placeholder='Your Name'/>
                                    </div>
                                    <div class="input-field col s12">
                                        <input onChange={e=>this.setState({email:e.target.value})} style={{fontSize:"20px"}} className="teal-text text-darken-1" id="email" type="text" placeholder='E-mail'/>
                                    </div>
                                    <div class="input-field col s6" style={{marginBottom:"5%"}}>
                                        <input onChange={e=>this.setState({password:e.target.value})} className="teal-text text-darken-1" id="password" type="password" placeholder='Password'/>
                                    </div>
                                    <div class="input-field col s6" style={{marginBottom:"5%"}}>
                                        <input onChange={e=>this.setState({confirmpass:e.target.value})} className="teal-text text-darken-1" id="confirm" type="password" placeholder='Confirm Password'/>
                                    </div>
                                </div>
                                <div >
                                    <p className="center" style={{fontSize:"12px"}}>By clicking "Continue", you agree to the <a href="/" className="teal-text text-darken-1">Terms of Service</a> and <a href="/" className="teal-text text-darken-1">Privacy Policy</a>.</p>
                                </div>
                                <div className="center">
                                    <button onClick={this.onRegister} className="waves-effect waves-light btn black btn-large" style={{marginTop:"5%"}}>CONTINUE</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default RegisPlan
