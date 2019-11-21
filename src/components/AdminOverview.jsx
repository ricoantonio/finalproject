import React, { Component } from 'react'
import Axios from 'axios'
import moment from 'moment'

import urlApi from '../helpers'

export class AdminOverview extends Component {

    state={
        check:false,
        gross:0,
        grossLast:0,
        dataFree:[],
        dataPremium:[]
    }

    componentDidMount() {
        // get gross this month
        Axios.get(urlApi+'/payment/grossincome',{
            params:{
                month:moment().format('MM')
            }
        }).then((res)=>{
            
            this.setState({
                gross:res.data[0].gross,
                // check:true
            })
            // console.log(this.state.gross);
            // get gross last month
            Axios.get(urlApi+'/payment/grossincome',{
                params:{
                    month:moment().subtract(1, 'months').format('MM')
                }
            }).then((res)=>{
                this.setState({
                    grossLast:res.data[0].gross,
                    // check:true
                })
                // get data users premium
                Axios.get(urlApi+'/auth/getdatapremium')
                .then((res)=>{
                    this.setState({dataPremium:res.data})
                    // get data users free
                    Axios.get(urlApi+'/auth/getdatafree')
                    .then((res)=>{
                        this.setState({dataFree:res.data})
                        this.setState({check:true})
                    }).catch((err)=>{
                        console.log(err);
                    })
                }).catch((err)=>{
                    console.log(err);
                })
                // console.log(this.state.grossLast);
            }).catch((err)=>{
                console.log(err);
            })
        }).catch((err)=>{
            console.log(err);
        })
    }
    
    render() {
        if(this.state.check){
            return (
                <>
                    <div>
                        <h4 className="center" style={{marginBottom:"5%", marginBottom:0}}>This month total gross income : Rp.{(this.state.gross).toLocaleString('id')} </h4>
                        <h5 className="center" style={{marginBottom:"5%", marginTop:"2%"}}>Last month total gross income : Rp.{(this.state.grossLast).toLocaleString('id')} </h5>
                    </div>
                    <div className="container">
                        <div className="row center">
                            <h5 className="col s4">
                                Total users : <span className='circle green white-text' style={{padding:10, marginLeft:'2%'}}>{this.state.dataFree.length+this.state.dataPremium.length}</span>
                            </h5>
                            <h5 className="col s4"> 
                                Premium users : <span className='circle blue white-text' style={{padding:10, marginLeft:'2%'}}>{this.state.dataPremium.length}</span>
                            </h5>
                            <h5 className="col s4">
                                Free users : <span className='circle blue white-text' style={{padding:10, marginLeft:'2%'}}>{this.state.dataFree.length}</span>
                            </h5>
                        </div>
                    </div>
                    <div className="containers" style={{marginTop:"4%"}}>
                        <h5>
                            Most viewed movie all time :
                        </h5>
                        <h5>
                            Most viewed movie this month :
                        </h5>
                        <h5>
                            Most viewed genre :
                        </h5>
                    </div>
                </>
            )
        }else{
            return(
                <p>Loading</p>
            )
        }
    }
}

export default AdminOverview
