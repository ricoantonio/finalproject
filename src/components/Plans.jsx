import React, { Component } from 'react'
import Bogo from '.././Webpic/BOGOlogo.svg'
import {Redirect} from 'react-router-dom'
import { connect } from "react-redux";


export class Plans extends Component {
    state={
        month: false,
        year: false
    }

    renderPlan = ()=>{
        return (
            <div className="">
                <h2 className="center sideText black-text" style={{paddingTop:"5%",marginTop:0}}>Select Your Plan</h2>
                <div className="container row center" style={{marginTop:'6%',marginBottom:0}}>
                    <div className='col s10 offset-s1'style={{marginBottom:"10%"}}>
                        <div className="col s5 zoom  white z-depth-2" style={{padding:20, height:"400px"}}>
                            <img src={Bogo} style={{height:20}} alt=""/>
                            <p style={{fontSize:"20px"}}>
                                Get 1 month subscription, for
                            </p>
                            <p style={{fontSize:"30px"}}>Rp.50.000/<span style={{fontSize:"20px"}}>month</span></p>
                            {
                                this.props.plan === 'premium' || this.props.plan == 'pending'  ? 
                                <div className="btn-trial" style={{marginTop:"10%"}}>
                                <button onClick={()=>this.setState({month:true})}  className="btn-large black disabled">select plan</button>
                                </div>:
                                <div className="btn-trial" style={{marginTop:"10%"}}>
                                <button onClick={()=>this.setState({month:true})}  className="btn-large black">select plan</button>
                                </div>
                            }
                        </div>
                        <div className="col s5 offset-s2 zoom white z-depth-2" style={{padding:20, height:"400px"}}>
                            <img src={Bogo} style={{height:20}} alt=""/>
                            <p style={{fontSize:"20px"}}>
                                Get 1 year subscription and save some money, for only
                            </p>
                            <p style={{fontSize:"30px"}}>Rp.350.000/<span style={{fontSize:"20px"}}>year</span></p>
                            {
                                this.props.plan === 'premium' || this.props.plan == 'pending'  ?
                                <div className="btn-trial" style={{marginTop:"10%"}}>
                                <button onClick={()=>this.setState({year:true})} className="btn-large black disabled">select plan</button>
                            </div>:
                                <div className="btn-trial" style={{marginTop:"10%"}}>
                                <button onClick={()=>this.setState({year:true})} className="btn-large black">select plan</button>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        if (this.state.year===false && this.state.month ===false){
            return(
                this.renderPlan()
            )
        }if(this.state.month===true){
            return(
                <Redirect to={{pathname:'/plan',state:{plan:'month'}
                }}/>
            )
        }if(this.state.year===true){
            return(
                <Redirect to={{pathname:'/plan',state:{plan:'year'}
                }}/>
            )
        }
    }

}

const mapStateToProps=state=>{
    return {
      email: state.auth.email,
      plan: state.auth.plan
    }
}

export default connect(mapStateToProps)(Plans) 
