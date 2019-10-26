import React, { Component } from 'react'
import Axios from 'axios'

import urlApi from '../helpers'


export class AdminMovie extends Component {

    state={
        data:[],
        selRow:null,
        selTitle:'',
        selYear:null,
        selPic:'',
        selFilename:'',
        selLink:'',
        selDesc:''
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
            if(this.state.selRow==val.id){
                
                return(
                    <tr>
                        <td style={{paddingTop:0,paddingBottom:0}}>
                            <button onClick={()=>{this.setState({selRow:val.id})}}>save</button>
                        </td>
                        <td style={{paddingTop:0,paddingBottom:0}}>
                            <button onClick={()=>this.setState({selRow:null})}>cancle</button>
                        </td>
                        <td style={{paddingTop:0,paddingBottom:0}}>{index+1}</td>
                        <td style={{paddingTop:0,paddingBottom:0}}>
                            <textarea style={{fontSize:10}} type="text" onChange={(e)=>{this.setState({selTitle:e.target.value})}} value={this.state.selTitle}/>
                        </td>
                        <td style={{paddingTop:0,paddingBottom:0}}>
                            <textarea style={{fontSize:10}}  type="number" onChange={(e)=>{this.setState({selYear:e.target.value})}} value={this.state.selYear}/>
                        </td>
                        <td style={{paddingTop:0,paddingBottom:0}}>
                            <textarea style={{fontSize:10}}  type="text" onChange={(e)=>{this.setState({selPic:e.target.value})}} value={this.state.selPic}/>
                        </td>
                        <td style={{paddingTop:0,paddingBottom:0}}>
                            <textarea style={{fontSize:10}} type="text" onChange={(e)=>{this.setState({selFilename:e.target.value})}} value={this.state.selFilename}/>
                        </td>
                        <td style={{paddingTop:0,paddingBottom:0}}>
                            <textarea style={{fontSize:10}}  type="text" onChange={(e)=>{this.setState({selLink:e.target.value})}} value={this.state.selLink}/>
                        </td>
                        <td style={{paddingTop:0,paddingBottom:0}}>{val.view}</td>
                        <td style={{paddingTop:0,paddingBottom:0}}>
                            <textarea style={{fontSize:10}} type="text" onChange={(e)=>{this.setState({selDesc:e.target.value})}} value={this.state.selDesc}/>
                        </td>
                    </tr>
                )
            }else{
                return(
                    <tr>
                        <td style={{paddingTop:0,paddingBottom:0}}>
                            <button onClick={()=>{
                                this.setState({
                                    selRow:val.id,
                                    selTitle:val.title,
                                    selYear:val.year,
                                    selPic:val.pic,
                                    selFilename:val.filename,
                                    selLink:val.link,
                                    selDesc:val.desc
                                })}}>edit</button>
                        </td>
                        <td style={{paddingTop:0,paddingBottom:0}}>
                            <button onClick={()=>{this.delete(val.id)}}>del</button>
                        </td>
                        <td style={{paddingTop:0,paddingBottom:0}}>{index+1}</td>
                        <td style={{paddingTop:0,paddingBottom:0}}>{val.title}</td>
                        <td style={{paddingTop:0,paddingBottom:0}}>{val.year}</td>
                        <td style={{paddingTop:0,paddingBottom:0}}>{val.pic}</td>
                        <td style={{paddingTop:0,paddingBottom:0}}>{val.filename}</td>
                        <td style={{paddingTop:0,paddingBottom:0}}>{val.link}</td>
                        <td style={{paddingTop:0,paddingBottom:0}}>{val.view}</td>
                        <td style={{paddingTop:0,paddingBottom:0}}>{val.desc}</td>
                    </tr>
                )
            }
          })
        return list
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="input-field col s2">
                        <input style={{fontSize:"12px"}} className="teal-text text-darken-1" type="text" placeholder="TITLE" />
                    </div>
                    <div className="input-field col s1">
                        <input style={{fontSize:"12px"}} className="teal-text text-darken-1" type="number" placeholder="YEAR" />
                    </div>
                    <div className="input-field col s2 file-field">
                        <div class="btn black white-text">
                            <i className="material-icons">publish</i>
                            <input type="file"/>
                        </div>
                        <div class="file-path-wrapper">
                            <input  style={{fontSize:"12px"}} placeholder='PIC' class="file-path validate" type="text"/>
                        </div>
                    </div>
                    <div className="input-field col s2 file-field">
                        <div class="btn black white-text">
                            <i className="material-icons">publish</i>
                            <input type="file"/>
                        </div>
                        <div class="file-path-wrapper">
                            <input  style={{fontSize:"12px"}} placeholder='VIDS' class="file-path validate" type="text"/>
                        </div>
                    </div>
                    <div className="input-field col s2">
                        <input style={{fontSize:"12px"}} className="teal-text text-darken-1" type="text" placeholder="LINK" />
                    </div>
                    <div className="input-field col s3">
                        <textarea style={{fontSize:"12px"}} className="materialize-textarea" type="text" placeholder="DESC." ></textarea>
                    </div>
                    <div className="center-align">
                        <button className="not-square btn black white-text">add</button>
                    </div>
                    
  
        
                </div>
                <table className=" highlight"  style={{fontSize:10}}>
                    <thead>
                       <tr>
                            <th></th>
                            <th></th>
                            <th>No.</th>
                            <th>Title</th>
                            <th>Year</th>
                            <th>Pic</th>
                            <th>Vids</th>
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
