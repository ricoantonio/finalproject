import React, { Component } from 'react'
import Axios from 'axios'
import moment from 'moment'

import urlApi from '../helpers'

export class AdminOverview extends Component {

    state={
        check:false,
        gross:0,
        grossLast:0,
        cate:[],
        dataFree:[],
        dataPremium:[],
        mostViewMovie:[],
        newUser:0
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
                        Axios.get(urlApi+'/movie/getmostviewcategories')
                        .then((res1)=>{
                            this.setState({
                                cate:res1.data
                            })
                            Axios.get(urlApi+'/auth/userthismonth',{
                                params:{
                                    month:moment().format('MM')
                                }
                            })
                            .then((res2)=>{
                                this.setState({
                                    newUser:res2.data.length
                                })
                                if(!res2.data){
                                    this.setState({
                                        newUser:0
                                    })
                                }
                                Axios.get(urlApi+'/movie/mostview')
                                .then((res3)=>{
                                    this.setState({
                                        check:true,
                                        mostViewMovie:res3.data})
                                        // console.log(this.state.mostViewMovie);
                                        
                                }).catch((err)=>{
                                    console.log(err);
                                })
                            }).catch((err)=>{
                                console.log(err);
                            })
                        }).catch((err)=>{
                            console.log(err);
                        })
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

    renderMostViewCategories=()=>{
        let list=this.state.cate.map((val)=>{
            return(
                <span className="black white-text not-square center" style={{marginRight:"2%", padding:10, margin:10,fontSize:14}}>{val.category}</span>
            )
        })
        return list
    }

    renderMostViewMovie=()=>{
        let list=this.state.mostViewMovie.map((val,index)=>{
            return(
                <div style={{fontSize:20}}>
                    <span>{index+1}. </span>
                    <span>{val.title}</span>
                </div>
            )
        })
        return list
    }
    
    render() {
        if(this.state.check){
            return (
                <>
                   <div style={{marginBottom:"5%"}}>
                        <div>
                            <h4 className="center" style={{marginBottom:"5%", marginBottom:0}}>This month total gross income : 
                            {this.state.gross===null? <span className="red-text"> Rp. 0</span> : this.state.gross>=this.state.grossLast ? 
                                <span className="green-text"> Rp. {(this.state.gross).toLocaleString('en')}</span>:
                                <span className="red-text"> Rp. {(this.state.gross).toLocaleString('en')}</span>}
                            </h4>
                            <h5 className="center grey-text" style={{marginBottom:"5%", marginTop:"2%"}}>Last month total gross income : Rp. {(this.state.grossLast).toLocaleString('en')} </h5>
                        </div>
                        <div className="container" style={{marginBottom:"4%"}}>
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
                        <div>
                            <h5>
                                Total new users this month : {this.state.newUser}
                            </h5>
                        </div>
                        <div className="containers">
                            <h5>
                                Most viewed movie : 
                                <div style={{marginTop:"1%"}}>
                                    {this.renderMostViewMovie()}
                                </div>
                            </h5>
                            <h5>
                                Most viewed genre : {this.renderMostViewCategories()}
                            </h5>
                        </div>
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
