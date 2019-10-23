import React, { Component } from 'react'
import {connect} from 'react-redux'
import {onLogoutUser} from '../action/index'
import Axios from 'axios';
import {Redirect} from 'react-router-dom'

import Nav from './Nav'
import urlApi from '../helpers'

export class MyAccount extends Component {
    
  state={
    data:[],
    loading:false
  }

  componentDidMount() {
    Axios.get(urlApi+'/auth/getdata',{
      params:{
        email:this.props.email
      }
    }).then((res)=>{
      this.setState({data:res.data[0]})
      console.log(this.state.data.name);
      this.setState({loading:true})
      
    }).catch((err)=>{

    })
    
  }
    
  renderMy=()=>{
   let {name,email,plan}=this.state.data

    return(
      <div>
        <Nav/>
        <div className="container">
          <div style={{marginTop:"2%"}}>
            <span style={{fontSize:"30px"}}>My Account</span>
            <div class="input-field inline-block right" style={{width:"20%", marginRight:28}} >
                <input className="not-square promocode center" id="search" style={{height:"30px", fontSize:"18px", paddingLeft:10, paddingRight:10}} type="search" placeholder='Enter Promo Code' required/>
            </div>
            {/* <span className="right" style={{fontSize:"30px"}}>#{id}</span> */}
          </div>
          <div className="card large z-depth-3 not-square promocode" style={{marginTop:"2%"}}>
            <div style={{padding:"4%"}}>
              <h4>Hi! {name}</h4>
              <h5>Email : {email}</h5>
              <h5>Plan : {plan==='free'?'FREE':'PREMIUM'}</h5>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    if(this.props.email){
      if(this.state.loading){
        return(
          this.renderMy()
        )
      }else{
        return(
          <p>Loading</p>
        )
      }
    }else{
      return (
        <Redirect to='/'/>
      )
    }
  }
}

const mapStateToProps=state=>{
  return {
    email: state.auth.email
  }
}

export default connect(mapStateToProps,{onLogoutUser})(MyAccount)
