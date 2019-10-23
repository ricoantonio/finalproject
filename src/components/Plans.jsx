import React, { Component } from 'react'
import Bogo from '.././Webpic/BOGOlogo.svg'

export class Plans extends Component {
    render() {
        return (
            <div className="">
                <h2 className="center sideText black-text" style={{paddingTop:"5%",marginTop:0}}>Select Your Plan</h2>
                <div className="container row center" style={{marginTop:'6%',marginBottom:0}}>
                    <div className="col s4 offset-s1 zoom  white z-depth-2" style={{padding:20}}>
                        <img src={Bogo} style={{height:20}} alt=""/>
                        <p style={{fontSize:"20px"}}>
                            Get 1 month subscription, for
                        </p>
                        <p style={{fontSize:"30px"}}>Rp.50.000/<span style={{fontSize:"20px"}}>month</span></p>
                        <div className="btn-trial" style={{marginTop:"20px",marginBottom:"120px"}}>
                            <button className="btn-large black">select plan</button>
                        </div>
                    </div>
                    <div className="col s4 offset-s2 zoom white z-depth-2" style={{padding:20,marginBottom:"10%"}}>
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
        )
    }
}

export default Plans
