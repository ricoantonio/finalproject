import React, { Component } from 'react'
import Axios from 'axios'

import urlApi from '../helpers'


export class AdminMovie extends Component {

    state={
        data:[]
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
        let list=this.state.data.map((val,index)=>{
            return(
            <tr>
                <td style={{paddingTop:0,paddingBottom:0}}>{index+1}</td>
                <td style={{paddingTop:0,paddingBottom:0}}>{val.id}</td>
                <td style={{paddingTop:0,paddingBottom:0}}>{val.title}</td>
                <td style={{paddingTop:0,paddingBottom:0}}>{val.year}</td>
                <td style={{paddingTop:0,paddingBottom:0}}>{val.pic}</td>
                <td style={{paddingTop:0,paddingBottom:0}}>{val.filename}</td>
                <td style={{paddingTop:0,paddingBottom:0}}>{val.link}</td>
                <td style={{paddingTop:0,paddingBottom:0}}>{val.view}</td>
                <td style={{paddingTop:0,paddingBottom:0}}>{val.desc}</td>
              </tr>
            )
          })
        return list
    }

    render() {
        return (
            <div>
                <table className="centered striped"  style={{fontSize:10}}>
                    <thead>
                       <tr>
                            <th>No.</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Year</th>
                            <th>Pic</th>
                            <th>File Name</th>
                            <th>Link</th>
                            <th>View</th>
                            <th>Desc.</th>
                       </tr>
                    </thead>
                    <tbody>
                        {this.renderData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AdminMovie
