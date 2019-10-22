import React, { Component } from 'react'
import Axios from 'axios'
import ReactPlayer from 'react-player'

import Nav from './Nav'
import Footer from './Footer'


const urlApi = 'http://localhost:2019'

export class MovieDetal extends Component {
    state={
        data:[],
        check:false
    }
    componentDidMount() {
        console.log(this.props.match.params.link);
        
        Axios.get(
            `http://localhost:2019/movie/getdatalink/${this.props.match.params.link}`
        ).then((res)=>{
            // res.data={id, name, desc, price, pic}
            this.setState({data: res.data[0]})
            console.log(res);
            this.setState({check:true})
        }).catch(()=>{

        })
    }
    
    render() {
        if(this.state.check){
            return (
                <div>
                    <Nav/>
                    <ReactPlayer url={urlApi+'/movies/'+this.state.data.filename} width='100%' height='50%' playing controls/>
                    <div className='row'>
                        <div>
                            <h4>{this.state.data.title} ({this.state.data.year})</h4>
                        </div>
                        <div className="col s2">
                            <img style={{width:"100%"}} src={urlApi+'/posters/'+this.state.data.pic} alt=""/>
                        </div>
                        <div className="col s4">
                            <p>{this.state.data.desc}</p>
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

export default MovieDetal
