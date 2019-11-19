import React, { Component } from 'react'
import Axios from 'axios'
import moment from 'moment'

import urlApi from '../helpers'

export class AdminOverview extends Component {
    state={
        check:false,
        gross:null
    }
    componentDidMount() {
        Axios.get(urlApi+'/payment/grossincome',{
            params:{
                month:moment().format('MM')
            }
        }).then((res)=>{
            this.setState({
                gross:res.data[0].gross,
                check:true
            })
            console.log(this.state.gross);
            
            
        }).catch((err)=>{
            console.log(err);
            
        })
    }
    
    render() {
        if(this.state.check){
            return (
                <div>
                    <h4 className="center" style={{marginBottom:"5%"}}>This month total gross income: Rp.{(this.state.gross).toLocaleString('id')} </h4>
                </div>
            )
        }else{
            return(
                <p>Loading</p>
            )
        }
    }
}

export default AdminOverview
