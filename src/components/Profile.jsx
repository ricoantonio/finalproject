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
    loading:false,
    total:0
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
      this.setState({loading:true})
        // console.log(this.state.data.name);
        
    }).catch((err)=>{

    })
    
  }

  renderProfile=()=>{
    if (this.state.data.role==='admin') {
      Axios.get(urlApi+'/payment/getpending')
      .then((res)=>{
          this.setState({total:res.data.length})    
          // console.log(this.state.data);
          
        }).catch((err)=>{
          console.log(err);
        })
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
          <Link to='/admin-pendinguser'>
            <MenuItem className="black-text">Pending User 
              {
                this.state.total > 0 ? <span className='circle green white-text center' style={{width:"10%", marginLeft:"3%", padding:3, fontSize:12}}>{this.state.total}</span> :
                this.state.total > 10 ? <span className='circle green white-text center' style={{width:"10%", marginLeft:"3%", padding:3, fontSize:12}}>10+</span> : ''
              } 
            </MenuItem>
          </Link>
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
        <div style={{paddingLeft:50,paddingRight:50}}>
          <div className="center" >
            <i className="material-icons" style={{fontSize:"100px",marginRight:5}}>account_circle</i>
            <h5>{this.state.data.name}</h5>
            <p style={{marginLeft:20, marginRight:20}}>{this.state.data.email}</p>
            <p className="row">
              {this.state.data.plan=== 'free' ? 'Free' : 
              this.state.data.plan === 'pending' ? <span className="green-text">Pending...</span> : 
              <span className="yellow-text text-darken-3 col s8 offset-s2 " style={{paddingRight:0,paddingLeft:0}}>PREMIUM<i className="material-icons right" style={{marginLeft:0}}>grade</i></span>}
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
