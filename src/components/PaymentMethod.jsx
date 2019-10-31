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
        done:false
    }
   
    handleChange = event => {
        this.setState({type:event.target.value})
    };

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
                            <img className='' style={{width:"100%"}} src={ovobarcode} alt=""/> 
                        </div>
                    </div>
                    <input className="center teal-text text-darken-1" style={{marginTop:"5%", fontSize:'25px'}} type="text" placeholder="Your OVO Phone Number"/>
                </div>
            )
        }if (this.state.type==2){
            return (
                <div className="container input-field">
                    <div className="row">
                        <div className="col s4 offset-s4" style={{marginBottom:"2%"}}>
                            <img className='circle' style={{width:"100%"}} src={dana} alt=""/>
                        </div>
                        <p className="col s12"><b>|BOGO - 081932377129</b></p>
                        <div className="col s12">
                            <img className='' style={{width:"100%"}} src={danabarcode} alt=""/> 
                        </div>
                    </div>
                    <input className="center teal-text text-darken-1" style={{marginTop:"5%", fontSize:'25px'}} type="text" placeholder="Your DANA Phone Number"/>
                </div>
            )
        }if (this.state.type==3){
            return <h4>BCA</h4>
        }
    }

    render(){
        return(
            <div className="row">
                <div className="col s4 offset-s4 white" style={{paddingLeft:0, paddingRight:0, marginTop:0}}>
                <div className="center" style={{marginTop:"4%", marginBottom:'4%'}}>
                    <FormControl className="center" style={{width:"90%"}}>
                        <Select value={this.state.type} onChange={this.handleChange} displayEmpty>
                            <MenuItem value="">
                                <em>Select Payment Method</em>
                            </MenuItem>
                            <MenuItem value={1}>OVO</MenuItem>
                            <MenuItem value={2}>DANA</MenuItem>
                            <MenuItem value={3}>BCA</MenuItem>
                        </Select>
                        <FormHelperText>Payment Method</FormHelperText>
                    </FormControl>
                    {this.renderPay()}
                </div>
            </div>
                <div className="col s4 offset-s4" style={{paddingLeft:0, paddingRight:0, marginTop:"1%", marginBottom:'20%'}}>
                    {this.state.done ? 
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
