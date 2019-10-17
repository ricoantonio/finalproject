import React, { Component } from 'react'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'
import {connect} from 'react-redux'
import {onLogoutUser} from '../action/index'
import Axios from 'axios';
import {Link,Redirect} from 'react-router-dom'

const urlApi = 'http://localhost:2019'

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
      
      console.log(this.state.data.name);
      
      this.setState({loading:true})
    }).catch((err)=>{

    })
    
  }

  renderProfile=()=>{
    return(
      <div>
      {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button> */}
      <a onClick={this.handleClick}><i className="material-icons right" style={{marginLeft:10,fontSize:"30px"}}>account_circle</i></a>  
      
      <Menu
        id="simple-menu"
        anchorEl={this.state.anchorEl}
        keepMounted
        open={Boolean(this.state.anchorEl)}
        onClose={this.handleClose}
      > 
      <div style={{paddingLeft:20,paddingRight:20}}>
        <div className="center">
          <i className="material-icons" style={{fontSize:"100px",marginRight:5}}>account_circle</i>
          <h5>{this.state.data.name}</h5>
          <p>{this.state.data.email}</p>
          <p>{this.state.data.plan=='free'?'FREE':'PREMIUM'}</p>
        </div>
      </div>
        <Link to='/myaccount'><MenuItem className="black-text">My Account</MenuItem></Link>
        <MenuItem onClick={this.props.onLogoutUser} href="/">Log Out</MenuItem>
      </Menu>
    </div>
    )
  }

  render() {
    if(this.state.loading){
      return (
       this.renderProfile()
      )
    }else{
      return(
        <a onClick={this.handleClick}><i className="material-icons right" style={{marginLeft:10,fontSize:"30px"}}>account_circle</i></a>  
      )
    }
  }
}

const mapStateToProps=state=>{
  return {
    email: state.auth.email
  }
}

export default connect(mapStateToProps,{onLogoutUser})(Profile)
