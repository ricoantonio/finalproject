import React, { Component } from 'react'
import Bogo from '.././Webpic/BOGOlogo.svg'

export class Plans extends Component {
    render() {
        return (
            <div style={{marginTop:'5%',marginBottom:'8%'}}>
                <h3 className="center">Select Your Plan</h3>
                <div className="container row center" style={{marginTop:'3%'}}>
                    <div className="col s4 offset-s1 not-square zoom promocode " style={{height:"500%",padding:20}}>
                        <img src={Bogo} style={{height:30}} alt=""/>
                        <p>Get 1 month subscription, for</p>
                        <p style={{fontSize:"30px"}}>Rp.50.000/<span style={{fontSize:"20px"}}>month</span></p>
                        <div className="btn-trial">
                            <button className="btn-large not-square black">select plan</button>
                        </div>
                    </div>
                    <div className="col s4 offset-s2 not-square zoom promocode " style={{height:"500%",padding:20}}>
                        <img src={Bogo} style={{height:30}} alt=""/>
                        <p>Get 1 year subscription and save some money, for only</p>
                        <p style={{fontSize:"30px"}}>Rp.350.000/<span style={{fontSize:"20px"}}>year</span></p>
                        <div className="btn-trial">
                            <button className="btn-large not-square black">select plan</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Plans
