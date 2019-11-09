import React, { Component } from 'react'
import Axios from 'axios'
import ReactPlayer from 'react-player'

import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

import SelectSearch from 'react-select-search'
 

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
        selDesc:'',
        inTitle:'',
        inYear:null,
        inPic:'',
        inFilename:'',
        inLink:'',
        inDesc:'',
        inPos:null,
        inMov:null,
        showPos:null,
        showMov:null,
        moviecategory:[],
        categories:[],
        selcategory:0,
        other:'',
        categoryrender:null
    }

    componentDidMount() {
        this.getdata()
    }

    getdata=()=>{
        Axios.get(urlApi+'/movie/getdata'
        ).then((res)=>{
            // console.log(this.state.data);
            this.setState({data:res.data})
            this.setState({loading:true})
            this.setState({check:true})
            this.getmoviecategory()
            this.getcategories()
            
          }).catch((err)=>{
            console.log(err);
            
          })
    }

    getcategories=()=>{
        Axios.get(urlApi+'/movie/getcategory')
            .then((res)=>{
                // console.log(res.data); 
                this.setState({categories:res.data})
            }).catch((err)=>{
                console.log(err);
            })
    }

    getmoviecategory=()=>{
        Axios.get(urlApi+'/movie/getmoviecategory')
            .then((res)=>{
                // console.log(res.data); 
                this.setState({moviecategory:res.data})
            }).catch((err)=>{
                console.log(err);
            })
    }

    showPos=(event)=>{
        this.setState({
            showPos: URL.createObjectURL(event.target.files[0]),
            inPos:event.target.files[0]

        })
        // console.log(event.target.files[0]);
        
    }

    showMov=(event)=>{
        this.setState({
            showMov: URL.createObjectURL(event.target.files[0]),
            inMov:event.target.files[0]
        })
        // console.log(event.target.files[0]);
        
    }
    
    add=()=>{
        // console.log(this.state.inTitle);
        // console.log(this.state.inYear);
        // console.log(this.state.inLink);
        // console.log(this.state.inDesc);

        if (
            !this.state.inMov,
            !this.state.inPic,
            !this.state.inLink,
            !this.state.inTitle,
            !this.state.inYear,
            !this.state.inDesc
        ){
            return alert('Please input all data')
        }else{
            
            var fd = new FormData()
            var fd2 = new FormData()
    
            var data = {
                title:this.state.inTitle,
                year:this.state.inYear,
                link:this.state.inLink,
                desc:this.state.inDesc
            }
    
            fd.append('movpos', this.state.inPos, this.state.inPos.name)
            fd2.append('movfile', this.state.inMov, this.state.inMov.name)
            fd.append('data', JSON.stringify(data))
            fd2.append('data', JSON.stringify(data))
            
            Axios.post(urlApi+'/movie/upmoviepos', fd)
            .then((res)=>{
                // console.log(res);
    
                Axios.post(urlApi+'/movie/upmoviefile', fd2)
                .then((res)=>{
                    // console.log(res);
                    this.getdata()
                    alert('Done!')
    
                }).catch((err)=>{
                    console.log(err);
                })
    
            }).catch((err)=>{
                console.log(err);
            })
        }
    
    }

    onSave=(id)=>{
        Axios.post(urlApi+'/movie/edit',{
            id:id,
            title:this.state.selTitle,
            year:this.state.selYear,
            desc:this.state.selDesc,
            pic:this.state.selPic,
            filename:this.state.selFilename,
            link:this.state.selLink,
        }).then((res)=>{
            console.log(res);
            this.getdata()
            this.setState({selRow:null})
        }).catch((err)=>{
            console.log(err);
            
        })
    }

    delete=(id)=>{
        Axios.post(urlApi+'/movie/delete',{
            id:id
        }).then((res)=>{
            // console.log(res);
            this.getdata()
        }).catch((err)=>{

        })
    }

    delmoviecategory=(id,idcategory)=>{
        Axios.post(urlApi+'/movie/delmoviecategory',{
            id:id
        }).then((res)=>{
            this.getmoviecategory()
            console.log(this.state.moviecategory);
            console.log(id);
            var total = 0
            var check = this.state.moviecategory.map((val)=>{
                if(val.idcategory == idcategory){
                    return total++
                }
            })
            if(total===1){
                Axios.post(urlApi+'/movie/delcategoryall' , {
                    id:idcategory
                }).then((res)=>{
                    console.log(res);
                    this.getmoviecategory()
                    this.getcategories()
                }).catch((err)=>{
                    console.log(err);
                })
            }
            
        }).catch((err)=>{
            console.log(err);
            
        })
    }

    moviecategory=(id)=>{
        let list=this.state.moviecategory.map(val=>{
            if(val.idmovie===id){
                return(
                    <div className="col s6" style={{fontSize:12}}>
                        <span className="left" style={{textDecoration:'underline'}} >{val.category} </span>
                        {/* <button onClick={()=>{this.delmoviecategory(val.id,val.idcategory)}}  className="right"> */}
                            <i className="material-icons right red-text" onClick={()=>{this.delmoviecategory(val.id,val.idcategory)}} style={{cursor:'pointer'}}>close</i>
                        {/* </button> */}
                    </div>
                )
            }
        })
        return list
    }

    rendercategory=()=>{
        // console.log(this.state.categories);
        let list = this.state.categories.map((val)=>{
            return(
                // arr.push({name:val.category,value:val.id})
                // {name:val.category,value:val.id}
                <option value={val.id}>{val.category}</option>
            )
        })
        return list
    }

    addcategory=(id)=>{
        if(this.state.selcategory>0){
            Axios.post(urlApi+'/movie/addmoviecategory',{
                idmovie:id,
                idcategory:this.state.selcategory
            }).then((res)=>{
                // console.log(res);
                this.getmoviecategory()
            }).catch((err)=>{
                console.log(err);
                
            })
        }
        if(this.state.selcategory<0){
            Axios.post(urlApi+'/movie/addothercategory',{
                idmovie:id,
                other:this.state.other
            }).then((res)=>{
                // console.log(res);
                this.getmoviecategory()
                this.getcategories()
            }).catch((err)=>{
                console.log(err);
                
            })
        }
    }

    renderData2=()=>{
        let list=this.state.data.map((val,index)=>{
            if(this.state.selRow==val.id){
                return(
                    <>
                        {
                            index%2===1 ?
                            <>
                                <div className="row center blue-grey lighten-5" style={{fontSize:12, marginBottom:0, paddingTop:"2%"}}>
                                    <div className="col s1 offset-s3">{index+1}</div>
                                    <div className="col s2">
                                        <input style={{fontSize:12, paddingLeft:0,paddingRight:0}} type="text" onChange={(e)=>{this.setState({selTitle:e.target.value})}} value={this.state.selTitle}/>
                                    </div>
                                    <div className="col s1">
                                        <input style={{fontSize:12}}  type="number" onChange={(e)=>{this.setState({selYear:e.target.value})}} value={this.state.selYear}/>
                                    </div>
                                    <div className="col s1">
                                        <button className="right btn-small green"  style={{fontSize:10,paddingRight:5,paddingLeft:5, height:30}} onClick={()=>{this.onSave(val.id)}}>save</button>
                                    </div>
                                    <div className="col s1">
                                        <button className="left btn-small black" style={{fontSize:10,paddingRight:5,paddingLeft:5, height:30}} onClick={()=>this.setState({selRow:null})}>cancle</button>
                                    </div>
                                </div>
                                <div className="row center valign-wrapper blue-grey lighten-5" style={{fontSize:12, marginBottom:0, marginTop:0, paddingTop:"1%" , marginBottom:"2%"}}>
                                    <div className="col s1">
                                        <img style={{width:"100%"}} src={urlApi+'/posters/'+val.pic} alt=""/>
                                    </div>
                                    <div className="col s3 ">
                                        <ReactPlayer url={urlApi+'/movies/'+val.filename} width='100%' height='50%' playing controls/>
                                    </div>
                                    <div className="col s2">
                                        <div className="row">
                                            <div className="col s1">
                                                Pic:
                                            </div>
                                            <div className="col s12">
                                                <input style={{fontSize:12}}  type="text" onChange={(e)=>{this.setState({selPic:e.target.value})}} value={this.state.selPic}/>
                                            </div>
                                            <div className="col s1">
                                                Filename:
                                            </div>
                                            <div className="col s12">
                                                <input className="right" style={{fontSize:12}} type="text" onChange={(e)=>{this.setState({selFilename:e.target.value})}} value={this.state.selFilename}/>
                                            </div>
                                            <div className="col s1">
                                                Link:
                                            </div>
                                            <div className="col s12">
                                                <input className="right" style={{fontSize:12}}  type="text" onChange={(e)=>{this.setState({selLink:e.target.value})}} value={this.state.selLink}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col s3">
                                        <p className="center" style={{marginBottom:20}}>Categories:</p>
                                        {this.moviecategory(val.id)}
                                        <div className="col s12" style={{marginTop:10}}>
                                            <FormControl>
                                                <NativeSelect
                                                value={this.state.selcategory}
                                                onChange={(e)=>{this.setState({selcategory:e.target.value})}}
                                                inputProps={{ 'aria-label': 'age' }}
                                                style={{fontSize:12}}
                                                >
                                                    <option value={0}>--Add Categories--</option>
                                                    {this.rendercategory()}
                                                    <option value={-1}>Other</option>
                                                </NativeSelect>
                                            </FormControl>

                                            {/* <SelectSearch options={this.rendercategory()} /> */}

                                            {
                                                this.state.selcategory==-1 ?
                                                <input placeholder="Other Category" style={{fontSize:12, marginTop:0}} onChange={(e)=>{this.setState({other:e.target.value})}} type="text"/> : ''
                                            }
                                            <button className="btn-small green" onClick={()=>{this.addcategory(val.id)}} style={{fontSize:10,paddingRight:5,paddingLeft:5, height:30, marginLeft:5}} ><i className="material-icons">add</i></button>
                                        </div>
                                    </div>
                                    <div className="col s2">
                                        <textarea className="" style={{fontSize:12}} type="text" onChange={(e)=>{this.setState({selDesc:e.target.value})}} value={this.state.selDesc}/>
                                    </div>
                                </div>
                            </>
                            :
                            <>
                                <div className="row center" style={{fontSize:12, marginBottom:0, marginTop:"2%"}}>
                                    <div className="col s1 offset-s3">{index+1}</div>
                                    <div className="col s2">
                                        <input style={{fontSize:12,paddingLeft:0,paddingRight:0}} type="text" onChange={(e)=>{this.setState({selTitle:e.target.value})}} value={this.state.selTitle}/>
                                    </div>
                                    <div className="col s1">
                                        <input style={{fontSize:12}}  type="number" onChange={(e)=>{this.setState({selYear:e.target.value})}} value={this.state.selYear}/>
                                    </div>
                                    <div className="col s1">
                                        <button className="right btn-small green"  style={{fontSize:10,paddingRight:5,paddingLeft:5, height:30}} onClick={()=>{this.onSave(val.id)}}>save</button>
                                    </div>
                                    <div className="col s1">
                                        <button className="left btn-small black"  style={{fontSize:10,paddingRight:5,paddingLeft:5, height:30}} onClick={()=>this.setState({selRow:null})}>cancle</button>
                                    </div>
                                </div>
                                <div className="row center valign-wrapper" style={{fontSize:12, paddingTop:"1%", marginBottom:0, marginTop:0}}>
                                    <div className="col s1">
                                        <img style={{width:"100%"}} src={urlApi+'/posters/'+val.pic} alt=""/>
                                    </div>
                                    <div className="col s3 ">
                                        <ReactPlayer url={urlApi+'/movies/'+val.filename} width='100%' height='50%' playing controls/>
                                    </div>
                                    <div className="col s2">
                                        <div className="row">
                                            <div className="col s1">
                                                Pic:
                                            </div>
                                            <div className="col s12">
                                                <input style={{fontSize:12}}  type="text" onChange={(e)=>{this.setState({selPic:e.target.value})}} value={this.state.selPic}/>
                                            </div>
                                            <div className="col s1">
                                                Filename:
                                            </div>
                                            <div className="col s12">
                                                <input className="right" style={{fontSize:12}} type="text" onChange={(e)=>{this.setState({selFilename:e.target.value})}} value={this.state.selFilename}/>
                                            </div>
                                            <div className="col s1">
                                                Link:
                                            </div>
                                            <div className="col s12">
                                                <input className="right" style={{fontSize:12}}  type="text" onChange={(e)=>{this.setState({selLink:e.target.value})}} value={this.state.selLink}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col s3">
                                        <p className="center" style={{marginBottom:20}}>Categories:</p>
                                        {this.moviecategory(val.id)}
                                        <div className="col s12" style={{marginTop:10}}>
                                            <FormControl>
                                                <NativeSelect
                                                value={this.state.selcategory}
                                                onChange={(e)=>{this.setState({selcategory:e.target.value})}}
                                                inputProps={{ 'aria-label': 'age' }}
                                                style={{fontSize:12}}
                                                >
                                                    <option value={0}>--Add Categories--</option>
                                                    {this.rendercategory()}
                                                    <option value={-1}>Other</option>
                                                </NativeSelect>
                                            </FormControl>
                                            {
                                                this.state.selcategory==-1?
                                                <input placeholder="Other Category" style={{fontSize:12, marginTop:0}} onChange={(e)=>{this.setState({other:e.target.value})}} type="text"/> : ''
                                            }
                                            <button className="btn-small green" onClick={()=>{this.addcategory(val.id)}}  style={{fontSize:10,paddingRight:5,paddingLeft:5, height:30, marginLeft:5}} ><i className="material-icons">add</i></button>
                                        </div>
                                    </div>
                                    <div className="col s2">
                                        <textarea className="" style={{fontSize:12}} type="text" onChange={(e)=>{this.setState({selDesc:e.target.value})}} value={this.state.selDesc}/>
                                    </div>
                                </div>
                            </>
                        }
                    </>
                )
            }else{
                if(val.isDeleted === 0){
                    return(
                        <>
                            {
                                index%2===1 ? 
                                <div className="row center blue-grey lighten-5" style={{fontSize:12, marginBottom:2, marginTop:2}}>
                                    <div className="col s1 offset-s3">{index+1}</div>
                                    <div className="col s2" style={{paddingLeft:0,paddingRight:0}}>{val.title}</div>
                                    <div className="col s1">{val.year}</div>
                                    <div className="col s1">
                                        <button className="right btn-small black" style={{fontSize:10,paddingRight:5,paddingLeft:5, height:30}} onClick={()=>{
                                            this.setState({
                                                selRow:val.id,
                                                selTitle:val.title,
                                                selYear:val.year,
                                                selPic:val.pic,
                                                selFilename:val.filename,
                                                selLink:val.link,
                                                selDesc:val.description
                                            })}}>edit
                                        </button>
                                    </div>
                                    <div className="col s1">
                                        <button className="left btn-small red" style={{fontSize:10,paddingRight:5,paddingLeft:5, height:30}} onClick={()=>{this.delete(val.id)}}>del</button>
                                    </div>
                                </div> :
                                <div className="row center" style={{fontSize:12, marginBottom:2, marginTop:2}}>
                                    <div className="col s1 offset-s3">{index+1}</div>
                                    <div className="col s2" style={{paddingLeft:0,paddingRight:0}}>{val.title}</div>
                                    <div className="col s1">{val.year}</div>
                                    <div className="col s1">
                                        <button className="right btn-small black" style={{fontSize:10,paddingRight:5,paddingLeft:5, height:30}} onClick={()=>{
                                            this.setState({
                                                selRow:val.id,
                                                selTitle:val.title,
                                                selYear:val.year,
                                                selPic:val.pic,
                                                selFilename:val.filename,
                                                selLink:val.link,
                                                selDesc:val.description
                                            })}}>edit
                                        </button>
                                    </div>
                                    <div className="col s1">
                                        <button className="left btn-small red" style={{fontSize:10,paddingRight:5,paddingLeft:5, height:30}} onClick={()=>{this.delete(val.id)}}>del</button>
                                    </div>
                                </div> 
                            }
                        </>
                    )
                }
            }
        })
        return list
    }

    // renderData=()=>{
    //     let list=this.state.data.map((val,index)=>{
    //         if(this.state.selRow==val.id){
    //             return(
    //                 <tr>
    //                     <td style={{paddingTop:0,paddingBottom:0}}>
    //                         <button onClick={()=>{this.onSave(val.id)}}>save</button>
    //                     </td>
    //                     <td style={{paddingTop:0,paddingBottom:0}}>
    //                         <button onClick={()=>this.setState({selRow:null})}>cancle</button>
    //                     </td>
    //                     <td style={{paddingTop:0,paddingBottom:0}}>{index+1}</td>
    //                     <td style={{paddingTop:0,paddingBottom:0}}>
    //                         <textarea style={{fontSize:10}} type="text" onChange={(e)=>{this.setState({selTitle:e.target.value})}} value={this.state.selTitle}/>
    //                     </td>
    //                     <td style={{paddingTop:0,paddingBottom:0}}>
    //                         <textarea style={{fontSize:10}}  type="number" onChange={(e)=>{this.setState({selYear:e.target.value})}} value={this.state.selYear}/>
    //                     </td>
    //                     <td style={{paddingTop:0,paddingBottom:0}}>
    //                         <textarea style={{fontSize:10}}  type="text" onChange={(e)=>{this.setState({selPic:e.target.value})}} value={this.state.selPic}/>
    //                     </td>
    //                     <td style={{paddingTop:0,paddingBottom:0}}>
    //                         <textarea style={{fontSize:10}} type="text" onChange={(e)=>{this.setState({selFilename:e.target.value})}} value={this.state.selFilename}/>
    //                     </td>
    //                     <td style={{paddingTop:0,paddingBottom:0}}>
    //                         <textarea style={{fontSize:10}}  type="text" onChange={(e)=>{this.setState({selLink:e.target.value})}} value={this.state.selLink}/>
    //                     </td>   
    //                     <td style={{paddingTop:0,paddingBottom:0}}>{val.view}</td>
    //                     <td style={{paddingTop:0,paddingBottom:0}}>
    //                         <textarea style={{fontSize:10}} type="text" onChange={(e)=>{this.setState({selDesc:e.target.value})}} value={this.state.selDesc}/>
    //                     </td>
    //                 </tr>
    //             )
    //         }else{
    //             if(val.isDeleted === 0){
    //                 return(
    //                     <tr>
    //                         <td style={{paddingTop:0,paddingBottom:0}}>
    //                             <button onClick={()=>{
    //                                 this.setState({
    //                                     selRow:val.id,
    //                                     selTitle:val.title,
    //                                     selYear:val.year,
    //                                     selPic:val.pic,
    //                                     selFilename:val.filename,
    //                                     selLink:val.link,
    //                                     selDesc:val.description
    //                                 })}}>edit</button>
    //                         </td>
    //                         <td style={{paddingTop:0,paddingBottom:0}}>
    //                             <button onClick={()=>{this.delete(val.id)}}>del</button>
    //                         </td>
    //                         <td style={{paddingTop:0,paddingBottom:0}}>{index+1}</td>
    //                         <td style={{paddingTop:0,paddingBottom:0}}>{val.title}</td>
    //                         <td style={{paddingTop:0,paddingBottom:0}}>{val.year}</td>
    //                         <td style={{paddingTop:0,paddingBottom:0}}>{val.pic}</td>
    //                         <td style={{paddingTop:0,paddingBottom:0}}>{val.filename}</td>
    //                         <td style={{paddingTop:0,paddingBottom:0}}>{val.link}</td>
    //                         <td style={{paddingTop:0,paddingBottom:0}}>{val.view}</td>
    //                         <td style={{paddingTop:0,paddingBottom:0}}>{val.description}</td>
    //                     </tr>
    //                 )
    //             }
    //         }
    //       })
    //     return list
    // }

    render() {
        return (
            <div style={{paddingBottom:"20%"}}>
                <div className="row">
                    <div className="input-field col s2">
                        <input style={{fontSize:"12px"}} onChange={e=>this.setState({inTitle:e.target.value})} className="teal-text text-darken-1" type="text" placeholder="TITLE" />
                    </div>
                    <div className="input-field col s1">
                        <input style={{fontSize:"12px"}} onChange={e=>this.setState({inYear:e.target.value})} className="teal-text text-darken-1" type="number" placeholder="YEAR" />
                    </div>
                    <div className="input-field col s2 file-field">
                        <div class="btn black white-text">
                            <i className="material-icons">publish</i>
                            <input onChange={(e)=>{this.showPos(e)}} type="file"/>
                        </div>
                        <div class="file-path-wrapper">
                            <input style={{fontSize:"12px"}} placeholder='PIC' class="file-path validate" type="text"/>
                        </div>
                    </div>
                    <div className="input-field col s2 file-field">
                        <div class="btn black white-text">
                            <i className="material-icons">publish</i>
                            <input onChange={(e)=>{this.showMov(e)}} type="file"/>
                        </div>
                        <div class="file-path-wrapper">
                            <input  style={{fontSize:"12px"}} placeholder='VIDS' class="file-path validate" type="text"/>
                        </div>
                    </div>
                    <div className="input-field col s2">
                        <input style={{fontSize:"12px"}} onChange={e=>this.setState({inLink:e.target.value})} className="teal-text text-darken-1" type="text" placeholder="LINK" />
                    </div>
                    <div className="input-field col s3">
                        <textarea style={{fontSize:"12px"}} onChange={e=>this.setState({inDesc:e.target.value})} className="materialize-textarea" type="text" placeholder="DESC." ></textarea>
                    </div>
                    <div className="center-align">
                        <button onClick={this.add} className="not-square btn black white-text">add</button>
                    </div>
                    
                </div>

                <div className="row center">
                    <div className="col s1 offset-s3"><b>No.</b></div>
                    <div className="col s2"><b>Title</b></div>
                    <div className="col s1"><b>Year</b></div>
                    <div className="col s2"><b>Action</b></div>
                </div>
                {this.renderData2()}

                {/*     <table className=" striped white"  style={{fontSize:10}}>
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
                </table> */}
            </div>
        )
    }
}

export default AdminMovie
