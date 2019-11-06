import React, { Component } from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'


import Nav from './Nav'
import Footer from './Footer'
import Trial from './Trial'

import urlApi from '../helpers'
import BestThisWeek from './BestThisWeek'

class HomeMovie extends Component{

    state={
        data:[],
        check:false
    }     

    componentDidMount() {
        Axios.get(urlApi+'/movie/getdata'
        ).then((res)=>{
            this.setState({data:res.data})
            console.log(this.state.data);
            this.setState({loading:true})
            this.setState({check:true})
          }).catch((err)=>{
      
          })
    }


    renderData=()=>{
        return this.state.data.map(val=>{
            var link=`/movie-detail/${val.link}`
            return(
                <>
                {
                    val.isDeleted === 0 ?
                    <div className="col s2" style={{height:"500px", paddingBottom:"5%", marginTop:"3%"}}>
                        <div className="poster" style={{width:"100%"}}>
                            <Link to={link}>
                                <img className="not-square2 image-poster" style={{width:"85%"}} src={urlApi+'/posters/'+val.pic} alt=""/>
                                <div className="middle-poster">
                                    <div className="text-poster">
                                        <i className="material-icons" style={{fontSize:"60px"}}>play_circle_outline</i>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div  className="center black-text " style={{marginTop:0, height:'80px',marginLeft:"8%",marginRight:"8%", padding:"2%"}}>
                            <p style={{marginBottom:0, marginTop:0}}><b>{val.title}</b></p>
                            <p style={{marginTop:0, marginBottom:0}}>({val.year})</p>
                        </div>
                    </div> : ''  
                }
                </>
            )
        })
    }
    

    render() {
        if (this.state.check) {
            return (
                <div>
                    <Nav/>
                    {/* <Trial/> */}
                    <BestThisWeek/>
                        <h1 className="sideText black-text center">Movie</h1>
                        <div className="row">
                            {this.renderData()}
                        </div>
                    <Footer/>
                </div>
            )
        }else{
            return(<p>Loading</p>)
        }
    }
}
export default HomeMovie