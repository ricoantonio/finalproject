import React, {Component} from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ovo from '.././Webpic/ovo.jpg'
import dana from '.././Webpic/dana.jpg'
import ovobarcode from '.././Webpic/ovo-barcode.jpg'
import danabarcode from '.././Webpic/dana-barcode.jpg'


export class PaymentMethod extends Component {

    state={
        type:'',
        done:false,
        file:null,
        phone:'',
    }
   
    handleChange = event => {
        this.setState({file:null})
        this.setState({phone:''})
        this.setState({type:event.target.value})
        console.log(this.state.phone);
        
    };

    show=(event)=>{
        this.setState({file: URL.createObjectURL(event.target.files[0])})
    }

    angka=(e)=>{
        console.log(this.state.phone);
        
        if (e.match(/\d/g)|| e=='')
        this.setState({phone:e})

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
                    <input className="center teal-text text-darken-1" onChange={(e)=>{this.angka(e.target.value)}} value={this.state.phone} style={{marginTop:"5%", fontSize:'25px'}} type="number" placeholder="Your OVO Phone Number"/>
                    <img style={{width:"60%", marginTop:"1%"}} src={this.state.file} alt=""/>
                    <div className="input-field file-field">
                        <div class="btn black white-text">
                            <i className="material-icons">publish</i>
                            <input type="file" onChange={this.show}/>
                        </div>
                        <div class="file-path-wrapper">
                            <input placeholder='Upload YOUR receipt of transfer' class="file-path validate" type="text"/>
                        </div>
                    </div>
                    <span className='grey-text text-lighten-1' style={{fontSize:"10px"}}>
                        <i className="material-icons left" style={{marginRight:0}}>error</i>
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
                    <input className="center teal-text text-darken-1" onChange={(e)=>{this.angka(e.target.value)}} value={this.state.phone} style={{marginTop:"5%", fontSize:'25px'}} type="number" placeholder="Your DANA Phone Number"/>
                    <img style={{width:"60%", marginTop:"1%"}} src={this.state.file} alt=""/>
                    <div className="input-field file-field">
                        <div class="btn black white-text">
                            <i className="material-icons">publish</i>
                            <input type="file" onChange={this.show}/>
                        </div>
                        <div class="file-path-wrapper">
                            <input placeholder='Upload YOUR receipt of transfer' class="file-path validate" type="text"/>
                        </div>
                    </div>
                    <span className='grey-text text-lighten-1' style={{fontSize:"10px"}}>
                        <i className="material-icons left" style={{marginRight:0}}>error</i>
                        You need to input your DANA phone number upload your receipt of transfer to complete the process
                    </span>
                </div>
            )
        }
    }

    render(){
        return(
            <div className="row">
                <div className="col s4 offset-s4 white" style={{paddingLeft:0, paddingRight:0, marginTop:0}}>
                    <div className="center" style={{marginTop:"4%", marginBottom:'4%'}}>
                        <FormControl style={{width:"50%" , marginBottom:'2%'}}>
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
                    <button className=" btn-large right black col s12" onClick={()=>this.setState({continue:true})}>
                        DONE
                    </button>:
                    <button className=" btn-large right black col s12 disabled" onClick={()=>this.setState({continue:true})}>
                        DONE
                    </button>}
                </div>
            </div>
        )
    }
}


export default PaymentMethod
