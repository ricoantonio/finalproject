import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";


export class Trial extends Component {

    renderTrial=()=>{
        return (
            <div className="trial-banner center white-text" style={{marginTop:0,height:'300px'}}>
                <p className="sideText" style={{marginTop:0,marginBottom:10, fontSize:"38px",paddingTop:35}}> <b>Stream Favourite Movie & Show Now</b> </p>
                <p  className="" style={{marginTop:10, fontSize:'20px'}}>Premium Video-on-Demand service and better viewing experience, with plans starting <br/> at Rp.50.000/month.</p>
                <div className="btn-trial">
                    <Link to='/subs'><button className="btn-large not-square white black-text"><b>start your subscription</b></button></Link>
                </div>
                <span className="grey-text text-lighten-1" style={{fontSize:"12px"}}>New subscribers only.</span>
            </div>
        )
    
    }
    render() {
        if (this.props.plan==='free'||!this.props.plan){
            return(
                this.renderTrial()
            )
        }else{
            return(
                true
            )
        }
    }
}



const mapStateToProps=state=>{
    return {
      plan: state.auth.plan
    }
}

export default connect(mapStateToProps)(Trial)

