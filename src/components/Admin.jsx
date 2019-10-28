import React, { Component } from 'react'
import AdminDashboard from './AdminDashboard'
import {Redirect} from 'react-router-dom'
import { connect } from "react-redux";

export class Admin extends Component {
    render() {
        if(this.props.role==='admin'){
            return(
                <AdminDashboard/>
            )
        }else{
            return(
                <Redirect to='/' /> 
            )
        }
    }
}


const mapStateToProps=state=>{
    return {
      role: state.auth.role
    }
}


export default connect(mapStateToProps)(Admin)
