import React, { Component } from 'react'
import Axios from 'axios'

import urlApi from '../helpers'

export class MostViewMovie extends Component {
    state={
        data:{}
    }

    componentDidMount() {
        
        Axios.get(urlApi+'/movie/mostview')
        .then((res)=>{
            this.setState({data:res.data})
            console.log(res.data);
            
        }).catch((err)=>{
            console.log(err);
        })
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default MostViewMovie
