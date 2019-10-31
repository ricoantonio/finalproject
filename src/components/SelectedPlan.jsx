import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'
import Bogo from '.././Webpic/BOGOlogo.svg'
import { connect } from "react-redux";
import Home from './Home';
import moment from 'moment'
import PaymentMethod from './PaymentMethod';
export class SelectedPlan extends Component {

    state={
        plan:null,
        done:false,
        continue:false
    }

    componentDidMount() {
        console.log(this.props.location.state);
        console.log();
        
        this.setState({done:true})
    }
    
    renderSelPlan=()=>{
        if(!this.state.continue){
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
                    <div className="row" style={{marginTop:"3%"}}>
                        <div className="center">
                            <h2  style={{marginTop:0}}>
                                <b>
                                    Your Billing Info
                                </b>
                            </h2>
                            <p>
                                Confirm your selections and add a payment method to your account.
                            </p>
                        </div>
                        <div className="col s4 offset-s4 white" style={{padding:"2%"}}>
                            <div>
                                <div className="center">
                                    <h4 style={{marginTop:0}}>{this.props.email}</h4>
                                </div>
                                <div className="col s12" style={{marginTop:"3%"}}>
                                    <span>{this.props.location.state.plan === 'month' ?  <span><b>Monthly subscription:</b> Rp50.000/m</span> : <span><b>Yearly subscription:</b> Rp350.000/yr</span>}</span> 
                                    <Link to='/subs'><span className="right teal-text text-darken-1"><b>change plan</b></span></Link>
                                </div>
                                <div className="col s12" style={{marginTop:"2%"}}>
                                    <div className="left">
                                        <span>Your subscription start from:</span>
                                    </div>
                                    <div className="right">
                                        <span>
                                            <b>
                                                {moment(new Date()).format('DD-MM-YYYY')}
                                            </b>
                                        </span>
                                    </div>
                                </div>
                                <div className="col s12">
                                    <div className="left">
                                        <span>Your subscription ends at:</span>
                                    </div>
                                    <div className="right">
                                        <span>
                                            <b>
                                                {this.props.location.state.plan === 'month'
                                                ?(moment(new Date()).add(1,'month').format('DD-MM-YYYY'))
                                                :(moment(new Date()).add(1,'year').format('DD-MM-YYYY'))}
                                            </b>
                                        </span>
                                    </div>
                                </div>
                                <div className="col s8 offset-s2" style={{marginTop:"4%"}}>
                                    <div className="left">
                                        <h4>Total :</h4>
                                    </div>
                                    <div className="right">
                                        <h4>{this.props.location.state.plan ==='month' ? 'Rp.50.000' : 'Rp.350.000' }</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s4 offset-s4" style={{paddingLeft:0, paddingRight:0, marginTop:"1%"}}>
                            <button className=" btn-large right black col s12" onClick={()=>this.setState({continue:true})}>
                                COUNTINUE
                                <i className="material-icons right" style={{position:'absolute'}}>arrow_forward</i>
                            </button>
                        </div>
                    </div>
                </div>
            )
        }else{
            return(
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
                    <div className="row" style={{marginTop:"3%"}}>
                        <div className="center">
                            <h2  style={{marginTop:0}}>
                                <b>
                                    Your Billing Info
                                </b>
                            </h2>
                            <p>
                                Confirm your selections and add a payment method to your account.
                            </p>
                        </div>
                        <div className="col s4 offset-s4 white" style={{padding:"2%"}}>
                            <div>
                                <div className="center">
                                    <h4 style={{marginTop:0}}>{this.props.email}</h4>
                                </div>
                                <div className="col s12" style={{marginTop:"3%"}}>
                                    <span>{this.props.location.state.plan === 'month' ?  <span><b>Monthly subscription:</b> Rp50.000/m</span> : <span><b>Yearly subscription:</b> Rp350.000/yr</span>}</span> 
                                    <Link to='/subs'><span className="right teal-text text-darken-1"><b>change plan</b></span></Link>
                                </div>
                                <div className="col s12" style={{marginTop:"2%"}}>
                                    <div className="left">
                                        <span>Your subscription start from:</span>
                                    </div>
                                    <div className="right">
                                        <span>
                                            <b>
                                                {moment(new Date()).format('DD-MM-YYYY')}
                                            </b>
                                        </span>
                                    </div>
                                </div>
                                <div className="col s12">
                                    <div className="left">
                                        <span>Your subscription ends at:</span>
                                    </div>
                                    <div className="right">
                                        <span>
                                            <b>
                                                {this.props.location.state.plan === 'month'
                                                ?(moment(new Date()).add(1,'month').format('DD-MM-YYYY'))
                                                :(moment(new Date()).add(1,'year').format('DD-MM-YYYY'))}
                                            </b>
                                        </span>
                                    </div>
                                </div>
                                <div className="col s8 offset-s2" style={{marginTop:"4%"}}>
                                    <div className="left">
                                        <h4>Total :</h4>
                                    </div>
                                    <div className="right">
                                        <h4>{this.props.location.state.plan ==='month' ? 'Rp.50.000' : 'Rp.350.000' }</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PaymentMethod/>
                </div>
            )
        }
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

// moment(new Date()).format('YYYY-MM-DD').add(1,'month')
// moment(new Date()).format('YYYY-MM-DD').add(1,'year')

const mapStateToProps=state=>{
    return {
      email: state.auth.email
    }
}

export default connect(mapStateToProps)(SelectedPlan)

