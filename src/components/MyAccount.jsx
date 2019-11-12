import React, { Component } from 'react'
import {connect} from 'react-redux'
import {onLogoutUser} from '../action/index'
import {onRefresh} from '../action/index'
import Axios from 'axios';
import {Redirect, Link} from 'react-router-dom'
import moment from 'moment'
import Nav from './Nav'
import urlApi from '../helpers'
import NotifPromo from './NotifPromo'
import NotifPromoRed from './NotifPromoRed'
import NotifPromoRedAlreadyUsed from './NotifPromoRedAlreadyUsed'
export class MyAccount extends Component {
    
  state={
    data:[],
    loading:false,
    promo:0
  }

  componentDidMount() {
    
    this.getData()
  }
    
  getData=()=>{
    Axios.get(urlApi+'/auth/getdata',{
      params:{
        email:this.props.email
      }
    }).then((res)=>{
      this.setState({data:res.data[0]})
      // console.log(this.state.data);
      // console.log(moment(this.state.data.dateEnd).format('DD-MM-YYYY'));
      
      this.setState({loading:true})
      
    }).catch((err)=>{

    })
  }

  promoInput=(promo)=>{
    promo.preventDefault();
    // console.log(promo);


    Axios.get(urlApi+'/payment/promo',{
      params:{
        promo:promo.target[0].value
      }
    }).then((res1)=>{
      
      if(res1.data.length>0){
        console.log(res1.data[0]);
        
        if (res1.data[0].promo === '7-DAYSFREETRIAL' ){
         
          Axios.get(urlApi+'/payment/checkpromouser',{
            params:{
              iduser:this.props.id,
              idpromo:res1.data[0].idpromo
            }
          }).then((res2)=>{
            console.log(res2.data);
            
            if(res2.data.length===0){
              Axios.post(urlApi+'/payment/insertuserpromo',{
                iduser:this.props.id,
                idpromo:res1.data[0].idpromo
              }).then((res3)=>{
                if(this.props.plan==='premium'){
                  // console.log(this.props.date);  
                  
                  Axios.post(urlApi+'/payment/userpromoplus',{
                    email:this.props.email,
                    promo:res1.data[0].promo,
                    dateEnd:moment(this.props.dateEnd).add(7, 'days').format('YYYYY-MM-DD, H:mm:ss')
      
                  }).then((res)=>{
                    this.getData()
                    this.setState({promo:1})
                    this.props.onRefresh(this.props.email)
                    // setInterval(()=>{window.location.reload()}, 1000);
                    
                  }).catch((err)=>{
                    
                  })
                }else{
                  // console.log('else');
                  Axios.post(urlApi+'/payment/userpromo',{
                    email:this.props.email,
                    promo:res1.data[0].promo,
                    dateStart:moment().format('YYYYY-MM-DD, H:mm:ss'),
                    dateEnd:moment().add(7, 'days').format('YYYYY-MM-DD, H:mm:ss')
      
                  }).then((res)=>{
                    this.getData()
                    this.setState({promo:1})
                    this.props.onRefresh(this.props.email)
                    // setInterval(()=>{window.location.reload()}, 1000);
                    
                  }).catch((err)=>{
                    console.log(err);
                  })
                }
              }).catch((err)=>{
                console.log(err);
              })
            }else{
              console.log('eh kamu udah punya');
              this.setState({promo:3})
            }
          }).catch((err)=>{
            console.log(err);
            
          })
         
        }
      }else{
        // console.log('b');
        this.setState({promo:2})
      }
    }).catch((err)=>{
      console.log(err);
      
    })

    
    this.setState({promo:0})
  }


  renderMy=()=>{
   let {name,email,plan,dateEnd}=this.state.data

    return(
      <div>
        {
          this.state.promo === 1 ? 
          <>
            <Nav/>
            <NotifPromo/>
          </> :
          this.state.promo === 2 ? 
          <>
            <Nav/>
            <NotifPromoRed/>
          </> :
          this.state.promo === 3 ?
          <>
            <Nav/>
            <NotifPromoRedAlreadyUsed/>
          </> :
          <Nav/>
        }
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
                <h5 className="row">
                  {plan==='free' ? <div><p>Free</p> <Link to="/subs" ><button className="btn-small not-square black white-text">Go Premium</button></Link></div> : 
                  plan==='pending'? <span className="green-text">Pending...</span> :
                  <span className="yellow-text text-darken-3 col s4 offset-s4">PREMIUM<i className="material-icons right" style={{marginLeft:0,fontSize:"30px"}}>grade</i></span>}
                </h5>
                {
                  plan==='premium'?
                  <span>Your subscription will end on : <b>{moment(dateEnd).format(`DD-MM-YYYY`)}</b></span>:''
                }
                <div className="input-field" style={{marginRight:"20px"}} >
                   <form onSubmit={this.promoInput}>
                      <input className="not-square promocode center" style={{height:"30px", fontSize:"18px", paddingLeft:10, paddingRight:10}} type="text" placeholder='Enter Promo Code'/>
                   </form>
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
    id:state.auth.id,
    email: state.auth.email,
    plan:state.auth.plan,
    dateEnd:state.auth.dateEnd
  }
}

export default connect(mapStateToProps,{onLogoutUser, onRefresh})(MyAccount)
