import React, { Component } from 'react'
import Axios from 'axios'
import {Link,Redirect} from 'react-router-dom'


import Nav from './Nav'
import Footer from './Footer'
import Trial from './Trial'

const urlApi = 'http://localhost:2019'

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
            var link='/movie-detail/'+`${val.link}`
            return(

                <div className="col s2" style={{height:"100%"}}>
                    <Link to={link}>
                        <img style={{width:"100%", height:"350px"}} src={urlApi+'/posters/'+val.pic} alt=""/>
                    </Link>
                    <div  className="center black-text" style={{marginTop:0, height:'80px'}}>
                        <p style={{marginBottom:0, marginTop:0}}>{val.title}</p>
                        <p style={{marginTop:0, marginTop:0}}>({val.year})</p>
                    </div>
                </div>  
            )
        })
    }
    

    render() {
        if (this.state.check) {
            return (
                <div>
                    <Nav/>
                    <Trial/>
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