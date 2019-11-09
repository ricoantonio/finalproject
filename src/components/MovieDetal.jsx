import React, { Component } from 'react'
import Axios from 'axios'
import ReactPlayer from 'react-player'
import { connect } from "react-redux";
import Nav from './Nav'
import Footer from './Footer'
import {Link} from 'react-router-dom'


import urlApi from '../helpers'
import TopMovie from './TopMovie';
import RelatedMovie from './RelatedMovie';

export class MovieDetal extends Component {
    state={
        data:[],
        userHistory:[],
        check:false,
        category:[]
    }
    componentDidMount() {
        
        console.log(this.props.match.params.link);
        
        
        
        Axios.get(
            urlApi+`/movie/getdatalink/${this.props.match.params.link}`
        ).then((res)=>{
            console.log(this.state.data);
            // res.data={id, name, desc, price, pic}
            this.setState({data: res.data[0]})
            console.log(res.data);
            
            Axios.get(urlApi+'/movie/getselmoviecategory',{
                params:{
                    id:this.state.data.id
                }
            }).then((res)=>{
                console.log(res);
                this.setState({category:res.data})
                console.log('datakelar');
                
                
            }).catch((err)=>{
                console.log(err);
                
            })

            if (this.props.email && this.props.plan ==='premium'){
                Axios.get(urlApi+`/movie/gethistory`, {
                    params:{
                        idmovie:this.state.data.id,
                        iduser:this.props.id
                    }
                }).then((res2)=>{
                    if (res2.data.length === 0){
                        Axios.put(urlApi+'/movie/updateview',{
                            id:this.state.data.id,
                            iduser:this.props.id
                        })
                        .then((res3)=>{
                            this.setState({check:true})
                        }).catch((err3)=>{
                            console.log(err3);
                            
                        })
                    }else{
                        this.setState({check:true})
                    }
                }).catch((err2)=>{
                    console.log(err2);
    
                })
            }else{
                this.setState({check:true})
            }
            
            
        }).catch((err)=>{
            console.log(err);
            
        })
    }

    renderCategory=()=>{
        let list = this.state.category.map((val)=>{
            return (
                <div className="col s3 not-square black center white-text" style={{ marginRight:10, padding:10, marginTop:10}}>
                    {val.category}
                </div>
            )
        })
        return list
    }
    
    render() {
        if(this.state.check){
            return (
                <div>
                    <Nav/>
                    {this.props.plan === 'premium' ?
                    <ReactPlayer url={urlApi+'/movies/'+this.state.data.filename} width='100%' height='50%' playing controls/> :

                    <div className="">
                        <div className="center" style={{height:"50%", paddingBottom:"10%", position:'absolute', width:"100%" }} >
                            <p className="sideText" style={{marginTop:0,marginBottom:10, fontSize:"38px",paddingTop:"10%"}}> <b>Oh no! You need to be a Premium Member to watch this video</b> </p>
                            <p  className="white-text" style={{marginTop:10, fontSize:'20px'}}>Premium Video-on-Demand service and better viewing experience, with plans starting <br/> at Rp.50.000/month.</p>
                            <div className="btn-trial">
                                <Link to='/subs'><button className="btn-large not-square white black-text"><b>start your subscription</b></button></Link>
                            </div>
                            <span className="grey-text text-lighten-1" style={{fontSize:"12px"}}>New subscribers only.</span>
                        </div>
                        <div>
                            <ReactPlayer url={urlApi+'/movies/'+this.state.data.filename} width='100%' height='50%'/>
                        </div>
                    </div>
                    }
                    <div className='row'>
                        <div className="col s10 offset-s1">
                            <div>
                                <h4>{this.state.data.title} ({this.state.data.year})</h4>
                            </div>
                            <div className="col s2" style={{marginTop:"2%"}}>
                                <img style={{width:"100%"}} src={urlApi+'/posters/'+this.state.data.pic} alt=""/>
                            </div>
                            <div className="col s4" style={{marginTop:"2%"}}>
                                <p style={{fontSize:20, marginTop:0}}>{this.state.data.description}</p>
                                {this.renderCategory()}
                            </div>
                            <div className="col s6">
                                <RelatedMovie category={this.state.category} />
                            </div>
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
        id:state.auth.id,
        plan:state.auth.plan,
        email: state.auth.email,
        dateEnd: state.auth.dateEnd
    }
}


export default connect(mapStateToProps)(MovieDetal)

