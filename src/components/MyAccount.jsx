import React, { Component } from 'react'
import {connect} from 'react-redux'
import {onLogoutUser} from '../action/index'
import Axios from 'axios';
import {Redirect, Link} from 'react-router-dom'

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
          <div className="row">
            <div className="center" style={{marginTop:"8%"}}>
              <span style={{fontSize:"30px"}}>My Account</span>
              {/* <span className="right" style={{fontSize:"30px"}}>#{id}</span> */}
            </div>
            <div className="card z-depth-1 not-square2 col s6 offset-s3 center" style={{marginTop:"2%"}}>
              <div style={{padding:"4%"}}>
                <h4 style={{marginBottom:"5%", marginTop:"1%"}}>{email}</h4>
                <h5>Hi! {name}</h5>
                <h5>{plan==='free'? <div><p>FREE</p> <Link to="/subs" ><button className="btn-small not-square black white-text">Go Premium</button></Link></div> : plan==='pending'? 'PENDING' : 'PREMIUM'}</h5>
                <div class="input-field" style={{marginRight:"20px"}} >
                    <input className="not-square promocode center" id="search" style={{height:"30px", fontSize:"18px", paddingLeft:10, paddingRight:10}} type="search" placeholder='Enter Promo Code' required/>
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
