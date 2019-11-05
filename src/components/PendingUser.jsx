import React, { Component } from 'react'
import Axios from 'axios'
import urlApi from '../helpers'
import moment from 'moment'
import ovo from '.././Webpic/ovo.jpg'
import dana from '.././Webpic/dana.jpg'
import Nav from './Nav'
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom'

export class PendingUser extends Component {

    state={
        data:[]

    }

    componentDidMount() {
        this.getData()
    }
    
    getData=()=>{
        Axios.get(urlApi+'/payment/getpending')
        .then((res)=>{
            this.setState({data:res.data})    
            console.log(this.state.data);
                    
        }).catch((err)=>{
            console.log(err);
        })
    }

    approve=(email,plan)=>{
        // console.log(email);
        if(plan === 'year'){
            Axios.post(urlApi+'/payment/topremium',{
                email:email,
                dateStart:moment().format('YYYY-MM-DD H:mm:ss'),
                dateEnd:moment().add(1,'year').format('YYYY-MM-DD H:mm:ss')
            }).then((res)=>{
                this.getData()
                console.log(res);
            }).catch((err)=>{
                console.log(err);
            })
        } 
        if(plan === 'month'){
            Axios.post(urlApi+'/payment/topremium',{
                email:email,
                dateStart:moment().format('YYYY-MM-DD H:mm:ss'),
                dateEnd:moment().add(1,'month').format('YYYY-MM-DD H:mm:ss')
            }).then((res)=>{
                this.getData()
                console.log(res);
            }).catch((err)=>{
                console.log(err);
            })
        }
    }

    decline=(email)=>{
        // console.log(email);
        
    }

    renderPending=()=>{
        let list = this.state.data.map((val,index)=>{
            return(
                <div className="row card not-square center valign-wrapper" style={{padding:0}}>
                    <div className="col s1">
                        {index+1}
                    </div>
                    <div className="col s2">
                        <p style={{marginBottom:0}}>{val.name}</p>
                        <p style={{marginTop:0}}>{val.email}</p>
                    </div>
                    <div className="col s3">
                        {moment(val.dateupload).format(`DD-MM-YYYY H:mm:ss`)}
                    </div>
                    <a className="col s1" href={`${urlApi}/payments/${val.pic}`} target="_blank">
                        <div>
                            <img src={urlApi+'/payments/'+val.pic} style={{width:"50%"}} alt=""/>
                        </div>
                    </a>
                    <div className="col s2">
                        <p style={{marginBottom:0}}>
                            {
                                val.type === 'OVO' ? 
                                <img className='circle' style={{width:"15%"}} src={ovo} alt=""/> :
                                val.type === 'DANA' ? 
                                <img className='circle' style={{width:"25%"}} src={dana} alt=""/> : ''
                            }
                        </p>
                        <p style={{marginTop:0}} >{val.phone}</p>
                    </div>
                    <div className="col s1">
                        {val.plan}
                    </div>
                    <div className="col s2">
                        <button onClick={()=>{this.approve(val.email,val.plan)}} className="btn not-square green btn-floating waves-effect" style={{marginRight:20}}><i className="material-icons">check</i></button>
                        <button onClick={()=>{this.decline(val.email)}} className="btn not-square red btn-floating waves-effect"><i className="material-icons">close</i></button>
                    </div>
                </div>
            )
        })
        return list
    }

    render() {
        if (this.props.email === 'admin'){
            if(this.state.data.length == 0){
                return(
                    <div>
                        <Nav/>
                        <h4 className="center">Pending User</h4>
                        <div className="center" style={{marginTop:"5%"}}>
                            No pending user
                        </div>
                    </div>
                )
            }else{
                return (
                    <div>
                        <Nav/>
                        <h4 className="center">Pending User</h4>
                        <div className="container" style={{marginTop:"2%"}}>
                            <div className="row card center valign-wrapper" style={{padding:10}}>
                                <div className="col s1"> 
                                    <b>No.</b>
                                </div>
                                <div className="col s2">
                                    <b>Name/Email</b>
                                </div>
                                <div className="col s3">
                                    <b>Upload Date / Time</b>
                                </div>
                                <div className="col s1">
                                    <b>Pic</b>
                                </div>
                                <div className="col s2">
                                    <b>Payment Method Phone</b>
                                </div>
                                <div className="col s1">
                                    <b>Plan</b>
                                </div>
                                <div className="col s2">
                                    <b>Action</b>
                                </div>
                            </div>
                            {this.renderPending()}
                        </div>
                    </div>
                )
            }
        } else {
            return(
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

export default connect(mapStateToProps)(PendingUser)
