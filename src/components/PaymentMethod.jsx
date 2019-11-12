import React, {Component} from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ovo from '.././Webpic/ovo.jpg'
import dana from '.././Webpic/dana.jpg'
import ovobarcode from '.././Webpic/ovo-barcode.jpg'
import danabarcode from '.././Webpic/dana-barcode.jpg'
import { connect } from "react-redux";
import moment from 'moment'

import Axios from 'axios'

import urlApi from '../helpers'

export class PaymentMethod extends Component {

    state={
        type:'' ,
        done:false ,
        file:null ,
        phone:'' ,
        rop:null
    }
   
    handleChange = event => {
        this.setState({
            file:null,
            phone:'',
            type:event.target.value
        })
        // console.log(this.state.phone);
        
    };

    show=(event)=>{
        this.setState({
            file: URL.createObjectURL(event.target.files[0]),
            rop:event.target.files[0]

        })
        // console.log(event.target.files[0]);
        
    }
    
    angka=(e)=>{
        // console.log(this.props.plan);
        // console.log(this.state.file);
        // console.log(this.state.phone);
        if (e.match(/\d/g) || e==''){
            this.setState({phone:e})
        }

    }

    onDone=()=>{
        
        var fd = new FormData()

        var data = {
            email: this.props.email,
            phone: this.state.phone,
            plan: this.props.plan,
            type: this.state.type === 1 ? 'OVO' : 'DANA',
            totalpay: this.props.plan === 'month' ? 50000 : 350000,
            dateupload: moment().format('YYYY-MM-DD H:mm:ss')
        }

        fd.append('img', this.state.rop, this.state.rop.name)
        fd.append('data', JSON.stringify(data))
        
        Axios.post(urlApi+'/payment/postdatapayment', fd)
        .then((res)=>{
            // console.log(res);
            // update
            Axios.post(urlApi+'/payment/pending',{
                id:this.props.id
            }).then((res)=>{
                this.setState({done:true})
                console.log(data);
                console.log(this.state.rop);
                
            }).catch((err)=>{
                console.log(err);
            })
        }).catch((err)=>{
            console.log(err);
        })
        
        // console.log(data);
        // console.log(this.state.phone);
    }

    renderPay=()=>{
        if (this.state.type==1){
            return (
                <div className="container input-field">
                    <div className="row">
                        <div className="col s2 offset-s5" style={{marginBottom:"2%"}}>
                            <img className='circle' style={{width:"100%"}} src={ovo} alt=""/>
                        </div>
                        <p className="col s12"><b>|BOGO - 081932377129</b></p>
                        <div className="col s12">
                            <img className='' style={{width:"80%"}} src={ovobarcode} alt=""/> 
                        </div>
                    </div>
                    <span>OVO phone number:</span>
                    <input className="center teal-text text-darken-1" onChange={(e)=>{this.angka(e.target.value)}} 
                        value={this.state.phone} style={{marginTop:"5%", fontSize:'25px'}} 
                        type="number" placeholder="OVO phone number" />
                    <img style={{width:"60%", marginTop:"1%"}} src={this.state.file} alt=""/>
                    <div className="input-field file-field">
                        <div class="btn black white-text">
                            <i className="material-icons">publish</i>
                            <input type="file" onChange={(e)=>{this.show(e)}}/>
                        </div>
                        <div class="file-path-wrapper">
                            <input placeholder='Upload YOUR receipt of transfer' class="file-path validate" type="text"/>
                        </div>
                    </div>
                    <span className='grey-text text-lighten-1' style={{fontSize:"10px"}}>
                        You need to input your OVO phone number and upload your receipt of transfer to complete the process
                    </span>
                </div>
            )
        }if (this.state.type==2){
            return (
                <div className="container input-field">
                    <div className="row">
                        <div className="col s4 offset-s4" style={{marginBottom:"2%"}}>
                            <img className='' style={{width:"100%"}} src={dana} alt=""/>
                        </div>
                        <p className="col s12"><b>|BOGO - 081932377129</b></p>
                        <div className="col s12">
                            <img className='' style={{width:"80%"}} src={danabarcode} alt=""/> 
                        </div>
                    </div>
                    <span>DANA phone number:</span>
                    <input className="center teal-text text-darken-1" onChange={(e)=>{this.angka(e.target.value)}} 
                        value={this.state.phone} style={{marginTop:"5%", fontSize:'25px'}} 
                        type="number" placeholder="DANA phone number"/>
                    <img style={{width:"60%", marginTop:"1%"}} src={this.state.file} alt=""/>
                    <div className="input-field file-field">
                        <div class="btn black white-text">
                            <i className="material-icons">publish</i>
                            <input type="file" onChange={(e)=>{this.show(e)}}/>
                        </div>
                        <div class="file-path-wrapper">
                            <input placeholder='Upload YOUR receipt of transfer' class="file-path validate" type="text"/>
                        </div>
                    </div>
                    <span className='grey-text text-lighten-1' style={{fontSize:"10px"}}>
                        You need to input your DANA phone number upload your receipt of transfer to complete the process
                    </span>
                </div>
            )
        }
    }

    render(){
        return(
            <div>
                {!this.state.done?
                    (<div className="row">
                        <div className="col s4 offset-s4 white" style={{paddingLeft:0, paddingRight:0, marginTop:0}}>
                            <div className="center" style={{marginTop:"4%", marginBottom:'4%'}}>
                                <FormControl style={{width:"70%" , marginBottom:'2%'}}>
                                    <Select value={this.state.type} onChange={this.handleChange} style={{marginLeft:"5%"}} displayEmpty>
                                        <MenuItem value="">
                                            <em>Select Payment Method</em>
                                        </MenuItem>
                                        <MenuItem value={1}>OVO</MenuItem>
                                        <MenuItem value={2}>DANA</MenuItem>
                                    </Select>
                                    <FormHelperText style={{marginLeft:"5%"}}>Payment Method</FormHelperText>
                                </FormControl>
                                {this.renderPay()}
                            </div>
                        </div>
                        <div className="col s4 offset-s4" style={{paddingLeft:0, paddingRight:0, marginTop:"1%", marginBottom:'20%'}}>
                            {this.state.file && this.state.phone ? 
                            <button className=" btn-large right black col s12" onClick={this.onDone}>
                                DONE
                            </button>:
                            <button className=" btn-large right black col s12 disabled" onClick={()=>this.setState({done:true})}>
                                DONE
                            </button>}
                        </div>
                    </div>):
                    (<div className="row">
                        <div className="col s4 offset-s4 white" style={{paddingLeft:0, paddingRight:0, marginTop:0}}>
                            <div className="center" style={{marginTop:"4%", marginBottom:'4%'}}>
                                <h4><b>Thank You for Subscribing!</b></h4>
                                <p>Please wait while Your Payment is beeing proccess by our admin</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        )
    }
}


const mapStateToProps=state=>{
    return {
        email: state.auth.email,
        id:state.auth.id
    }
}


export default connect(mapStateToProps)(PaymentMethod)
