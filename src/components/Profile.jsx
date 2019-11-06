import React, { Component } from 'react'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'
import {connect} from 'react-redux'
import {onLogoutUser} from '../action/index'
import Axios from 'axios';
import {Link} from 'react-router-dom'

import urlApi from '../helpers'

export class Profile extends Component {
    
  state={
    anchorEl:null,
    data:[],
    loading:false
  }

  handleClick = event => {
    this.setState({anchorEl:event.currentTarget})
  };

  handleClose = () => {
    this.setState({anchorEl:null})
  };

  componentDidMount() {
    Axios.get(urlApi+'/auth/getdata',{
      params:{
        email:this.props.email
      }
    }).then((res)=>{
      this.setState({data:res.data[0]})
      
      // console.log(this.state.data.name);
      
      this.setState({loading:true})
    }).catch((err)=>{

    })
    
  }

  renderProfile=()=>{
    if (this.state.data.role==='admin') {
      return(
        <div>
        {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          Open Menu
        </Button> */}
        <i className="material-icons right" onClick={this.handleClick} style={{marginLeft:10,fontSize:"30px",cursor:'pointer', marginRight:10}}>account_circle</i>
        
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          keepMounted
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}
        > 
        <div style={{paddingLeft:100,paddingRight:100}}>
          <div className="center">
            <i className="material-icons" style={{fontSize:"100px",marginRight:5}}>account_circle</i>
            <h5>{this.state.data.name}</h5>
            <p>{this.state.data.email}</p>
            <p>
              {this.state.data.plan=== 'free' ? 'FREE' : 
              this.state.data.plan === 'pending' ? <span className="green-text">PENDING...</span> : 
              <span className="yellow-text text-darken-3">PREMIUM<i className="material-icons right" style={{marginLeft:0}}>grade</i></span>}
            </p>
          </div>
        </div>
          <Link to='/admin-pendinguser'><MenuItem className="black-text">Pending User</MenuItem></Link>
          <Link to='/admin-dashboard'><MenuItem className="black-text">Admin Dashboard</MenuItem></Link>
          <MenuItem onClick={this.props.onLogoutUser} href="/">Log Out</MenuItem>
        </Menu>
      </div>
      )
    }else{

      return(
        <div>
        {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          Open Menu
        </Button> */}
        <i className="material-icons right" onClick={this.handleClick} style={{marginLeft:10,fontSize:"30px",cursor:'pointer', marginRight:10}}>account_circle</i>
        
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          keepMounted
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}
        > 
        <div style={{paddingLeft:70,paddingRight:70}}>
          <div className="center">
            <i className="material-icons" style={{fontSize:"100px",marginRight:5}}>account_circle</i>
            <h5>{this.state.data.name}</h5>
            <p>{this.state.data.email}</p>
            <p className="row">
              {this.state.data.plan=== 'free' ? 'Free' : 
              this.state.data.plan === 'pending' ? <span className="green-text">Pending...</span> : 
              <span className="yellow-text text-darken-3 col s8 offset-s2">PREMIUM<i className="material-icons right" style={{marginLeft:0}}>grade</i></span>}
            </p>
          </div>
        </div>
          <Link to='/myaccount'><MenuItem className="black-text">My Account</MenuItem></Link>
          <MenuItem onClick={this.props.onLogoutUser} href="/">Log Out</MenuItem>
        </Menu>
      </div>
      )
    }
  }

  render() {
    if(this.state.loading){
      return (
       this.renderProfile()
      )
    }else{
      return(
        <i className="material-icons right" onClick={this.handleClick} style={{marginLeft:10,fontSize:"30px",cursor:'pointer', marginRight:10}}>account_circle</i>      )
    }
  }
}

const mapStateToProps=state=>{
  return {
    email: state.auth.email
  }
}

export default connect(mapStateToProps,{onLogoutUser})(Profile)
