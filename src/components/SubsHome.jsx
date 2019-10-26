import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Bogo from '.././Webpic/BOGOlogo.svg'

export class SubsHome extends Component {
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
                <div className="">
                    <h2 className="center sideText black-text" style={{paddingTop:"2%",marginTop:0}}>Select Your Plan</h2>
                    <div className="container row center" style={{marginTop:'5%',marginBottom:0}}>
                        <div className='col s10 offset-s1'style={{marginBottom:"10%"}}>
                            <div className="col s5 zoom  white z-depth-2" style={{padding:20}}>
                                <img src={Bogo} style={{height:20}} alt=""/>
                                <p style={{fontSize:"20px"}}>
                                    Get 1 month subscription, for
                                </p>
                                <p style={{fontSize:"30px"}}>Rp.50.000/<span style={{fontSize:"20px"}}>month</span></p>
                                <div className="btn-trial" style={{marginTop:"20px",marginBottom:"120px"}}>
                                    <button className="btn-large black">select plan</button>
                                </div>
                            </div>
                            <div className="col s5 offset-s2 zoom white z-depth-2" style={{padding:20}}>
                                <img src={Bogo} style={{height:20}} alt=""/>
                                <p style={{fontSize:"20px"}}>
                                    Get 1 year subscription and save some money, for only
                                </p>
                                <p style={{fontSize:"30px"}}>Rp.350.000/<span style={{fontSize:"20px"}}>year</span></p>
                                <div className="btn-trial" style={{marginTop:"20px",marginBottom:"120px"}}>
                                    <button className="btn-large black">select plan</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SubsHome
