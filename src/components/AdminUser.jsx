import React, { Component } from 'react'
import Axios from 'axios'
import urlApi from '../helpers'
import moment from 'moment'

export class AdminUser extends Component {


    state={
        dataPremium:[],
        dataFree:[],
        check:false
    }

    componentDidMount() {
        Axios.get(urlApi+'/auth/getdatapremium')
        .then((res)=>{
            this.setState({dataPremium:res.data})

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
    
    }
    
    renderDataPremium=()=>{
        let list = this.state.dataPremium.map((val, index)=>{
            return(
                <>
                    {
                        index%2===1 ?
                            <>
                                <div className="row center " style={{fontSize:12, marginBottom:0, paddingTop:0}}>
                                    <div className="col s2 offset-s2">{val.name}</div>
                                    <div className="col s2">{val.email}</div>
                                    <div className="col s1">{moment(val.dateStart).format('DD-MM-YYYY')}</div>
                                    <div className="col s1">{moment(val.dateEnd).format('DD-MM-YYYY')}</div>
                                    <div className="col s2">{moment(val.lastActive).format('DD-MM-YYYY H:mm:ss')}</div>
                                </div>
                            </> :
                            <>
                                <div className="row center blue-grey lighten-5" style={{fontSize:12, marginBottom:0, paddingTop:0}}>
                                    <div className="col s2 offset-s2">{val.name}</div>
                                    <div className="col s2">{val.email}</div>
                                    <div className="col s1">{moment(val.dateStart).format('DD-MM-YYYY')}</div>
                                    <div className="col s1">{moment(val.dateEnd).format('DD-MM-YYYY')}</div>
                                    <div className="col s2">{moment(val.lastActive).format('DD-MM-YYYY H:mm:ss')}</div>
                                </div>
                            </> 
                    }
                </>
            )
        })
        return list
    }
    
    renderDataFree=()=>{
        let list = this.state.dataFree.map((val, index)=>{
            return(
                <>
                    {
                        index%2===1 ?
                            <>
                                <div className="row center " style={{fontSize:12, marginBottom:0, paddingTop:0}}>
                                    <div className="col s2 offset-s3">{val.name}</div>
                                    <div className="col s2">{val.email}</div>
                                    <div className="col s2">{moment(val.lastActive).format('DD-MM-YYYY H:mm:ss')}</div>
                                </div>
                            </>
                            :
                            <>
                                <div className="row center blue-grey lighten-5" style={{fontSize:12, marginBottom:0, paddingTop:0}}>
                                    <div className="col s2 offset-s3">{val.name}</div>
                                    <div className="col s2">{val.email}</div>
                                    <div className="col s2">{moment(val.lastActive).format('DD-MM-YYYY H:mm:ss')}</div>
                                </div>
                            </>
                           
                    }
                </>
            )
        })
        return list
    }

    render() {
        if(this.state.check){
            return (
                <>
                    <h5>Premium User <span className='circle black white-text' style={{padding:10, marginLeft:'2%'}}>{this.state.dataPremium.length} </span></h5>
                    <div className="row center">
                        <div className="col s2 offset-s2"><b>Name</b></div>
                        <div className="col s2"><b>E-mail</b></div>
                        <div className="col s1"><b>Start Date</b></div>
                        <div className="col s1"><b>Expired Date</b></div>
                        <div className="col s2"><b>Last Active</b></div>
                    </div>
                        {this.renderDataPremium()}
                    <h5 style={{marginTop:'5%'}}>Free User <span className='circle black white-text' style={{padding:10, marginLeft:'2%'}}>{this.state.dataFree.length}</span> </h5>
                    <div className="row center">
                        <div className="col s2 offset-s3"><b>Name</b></div>
                        <div className="col s2"><b>E-mail</b></div>
                        <div className="col s2"><b>Last Active</b></div>
                    </div>
                        {this.renderDataFree()}
                </>
            )
        }else{
            return(
                <p>Loading</p>
            )
        }
    }
}

export default AdminUser
