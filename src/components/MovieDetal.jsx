import React, { Component } from 'react'
import Axios from 'axios'
import ReactPlayer from 'react-player'
import { connect } from "react-redux";
import Nav from './Nav'
import Footer from './Footer'
import {Link} from 'react-router-dom'


import urlApi from '../helpers'

export class MovieDetal extends Component {
    state={
        data:[],
        check:false
    }
    componentDidMount() {
        console.log(this.props.match.params.link);
        
        
        Axios.get(
            urlApi+`/movie/getdatalink/${this.props.match.params.link}`
        ).then((res)=>{
            console.log(this.state.data);
            // res.data={id, name, desc, price, pic}
            this.setState({data: res.data[0]})
            console.log(res);
            
            Axios.put(urlApi+'/movie/updateview',{
                id:this.state.data.id
            })
            .then((res)=>{
                this.setState({check:true})
            }).catch((err)=>{
                
            })
        }).catch(()=>{

        })
    }
    
    render() {
        if(this.state.check){
            return (
                <div>
                    <Nav/>
                    {this.props.plan === 'premium' ?
                    <ReactPlayer url={urlApi+'/movies/'+this.state.data.filename} width='100%' height='50%' playing controls/> :
                    <div className="not-premium center" style={{height:"50%", paddingBottom:"10%"}} >
                        <p className="sideText" style={{marginTop:0,marginBottom:10, fontSize:"38px",paddingTop:"10%"}}> <b>Oh no! You need to be a Premium Member to watch this video</b> </p>
                        <p  className="white-text" style={{marginTop:10, fontSize:'20px'}}>Premium Video-on-Demand service and better viewing experience, with plans starting <br/> at Rp.50.000/month.</p>
                        <div className="btn-trial">
                            <Link to='/subs'><button className="btn-large not-square white black-text"><b>start your subscription</b></button></Link>
                        </div>
                        <span className="grey-text text-lighten-1" style={{fontSize:"12px"}}>New subscribers only.</span>
                            </div>}
                    <div className='row'>
                        <div>
                            <h4>{this.state.data.title} ({this.state.data.year})</h4>
                        </div>
                        <div className="col s2">
                            <img style={{width:"100%"}} src={urlApi+'/posters/'+this.state.data.pic} alt=""/>
                        </div>
                        <div className="col s4">
                            <p>{this.state.data.description}</p>
                        </div>
                    </div>
                    <Footer/>
                </div>
            )
        }else{
            return(
                <p>loading</p>
            )
        }
    }
}


const mapStateToProps=state=>{
    return {
        plan:state.auth.plan,
        email: state.auth.email
    }
}


export default connect(mapStateToProps)(MovieDetal)

