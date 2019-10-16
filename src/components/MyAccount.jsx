import React, { Component } from 'react'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'
import {connect} from 'react-redux'
import {onLogoutUser} from '../action/index'
import Axios from 'axios';
import {Link,Redirect} from 'react-router-dom'

const urlApi = 'http://localhost:2019'

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
    return(
      <div className="container">
        <h1>HI! {this.state.data.name}</h1>
     
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
