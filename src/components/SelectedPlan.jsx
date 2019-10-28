import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'
import Bogo from '.././Webpic/BOGOlogo.svg'
import { connect } from "react-redux";
import Home from './Home';

export class SelectedPlan extends Component {

    state={
        plan:null,
        done:false
    }

    componentDidMount() {
        console.log(this.props.location.state);
        
        this.setState({done:true})
    }
    
    renderSelPlan=()=>{
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
                <div className="row" style={{marginTop:"5%"}}>
                    <div className="col s4 offset-s4 white" style={{padding:"2%"}}>
                        <div>
                            <div className="center">
                                <h4>{this.props.email}</h4>
                            </div>
                            <div className="col s12">
                                <span>{this.props.location.state.plan === 'month' ?  "Monthly subscription Rp50.000/month" : "Yearly subscription Rp350.000/year" }</span> 
                                <Link to='/subs'><span className="right teal-text text-darken-1"><b>change plan</b></span></Link>
                            </div>
                            <div className="col s8 offset-s2">
                                <div className="left">
                                    <span>Your subscription start at:</span>
                                </div>
                                <div className="right">
                                    <span>20/10/2020</span>
                                </div>
                            </div>
                            <div className="col s8 offset-s2">
                                <div className="left">
                                    <span>Your subscription ends at:</span>
                                </div>
                                <div className="right">
                                    <span>20/11/2020</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        if(this.props.email){
            if(this.props.location.state){
                if (this.state.done){
                    return(
                        this.renderSelPlan()
                    )
                }else{
                    return(
                        <p>Loading</p>
                    )
                } 
            }else{
                return(
                    <Redirect to='/subs' /> 
                )
            }
        }else{
            return(
                <Redirect to='/subregis' />
            )
        }
    }
}



const mapStateToProps=state=>{
    return {
      email: state.auth.email
    }
}

export default connect(mapStateToProps)(SelectedPlan)

