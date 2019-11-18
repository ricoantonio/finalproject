import React, { Component } from 'react'
import Axios from 'axios'
import urlApi from '../helpers'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { Nav } from './Nav'
import Profile from './Profile'
import BogoWhite from '.././Webpic/BOGOlogoWhite.svg'
class HomeSearch extends Component {

    state={
        data:[],
        search:'',
        category:[],
        check:false
    }

    componentDidMount() {
        
        this.getData()
        this.setState({check:true})

    }

    getData=()=>{
        console.log(this.props.location.state.search);
        
        this.setState({search:this.props.location.state.search})
        
        Axios.get(urlApi+'/movie/search',{
            params:{
                search:this.props.location.state.search
            }
        }).then((res)=>{
            this.setState({data:res.data})
            console.log(this.state.data);

        }).catch((err)=>{
            console.log(err);
            
        })
    }

    renderData=()=>{

        // let listcate=this.state.data.map((val)=>{
        //     Axios.get(urlApi+'/movie/getselmoviecategory',{
        //         params:{
        //             id:val.id
        //         }
        //     }).then((res)=>{
        //         console.log(res.data)
        //         this.setState
                
        //     }).catch((err)=>{
        //         console.log(err);
        //     })
        // })
        
        let list=this.state.data.map((val, index)=>{
            if(val.isDeleted ===0){
               if(index%2===1){
                    return(
                        <Link to={`/movie-detail/${val.link}`}>
                            <div className="col s10 offset-s1" style={{marginTop:"5%", padding:10}}>
                                <div className="col s4 poster">
                                    <img className="not-square2 image-poster" style={{width:"100%"}} src={urlApi+'/posters/'+val.pic} alt=""/>
                                    <div className="middle-poster">
                                        <div className="text-poster">
                                            <i className="material-icons" style={{fontSize:"50px"}}>play_circle_outline</i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s8">
                                    <p className="sideText black-text" style={{fontSize:'30px', marginTop:0, marginBottom:10}}>
                                        <b>{val.title}</b>
                                    </p>
                                    <span className="black-text" style={{textAlign:'justify'}}>{val.description}</span>
                                </div>
                            </div>
                        </Link>
                    )
               }else{
                return(
                    <Link to={`/movie-detail/${val.link}`}>
                        <div className="col s10 offset-s1" style={{marginTop:"5%", padding:10}}>
                            <div className="col s8">
                                <p className="sideText black-text" style={{fontSize:'30px', marginTop:0, marginBottom:10}}>
                                    <b>{val.title}</b>
                                </p>
                                <span className="black-text" style={{textAlign:'justify'}}>{val.description}</span>
                            </div>
                            <div className="col s4 poster">
                                <img className="not-square2 image-poster" style={{width:"100%"}} src={urlApi+'/posters/'+val.pic} alt=""/>
                                <div className="middle-poster">
                                    <div className="text-poster">
                                        <i className="material-icons" style={{fontSize:"50px"}}>play_circle_outline</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
               }
            }
        })
        return list
    }

    onSearchChange=(e)=>{
        e.preventDefault()

        console.log(e.target[0].value);
        Axios.get(urlApi+'/movie/search',{
            params:{
                search:e.target[0].value
            }
        }).then((res)=>{
            this.setState({data:res.data})
            console.log(this.state.data)

            
        }).catch((err)=>{
            console.log(err);
            
        })
    }
    
    render() {
        console.log(this.props.email);
        
        if(this.state.check){
            return (
                <div>
                    {
                        !this.props.email?
                        <div className="navbar-fixed" style={{margin:0}}>
                    <div className="z-depth-0">
                        <nav>
                            <div className="nav-wrapper black">
                                <Link to="/" className=" left"><img className="" src={BogoWhite} style={{height:"29px", marginLeft:"30%",marginTop:"20%"}} alt="BOGO"/></Link>
                                {window.location.pathname === '/drama' ? 
                                    <Link to='/drama' className="navMenu2 white-text" style={{marginLeft:"5%",marginRight:"2%"}}>DRAMA</Link> :
                                    <Link to='/drama' className="navMenu2" style={{marginLeft:"5%",marginRight:"2%"}}>DRAMA</Link>
                                }
                                {window.location.pathname === '/variety' ? 
                                    <Link to='/variety' className="navMenu2 white-text" style={{marginRight:"2%"}}>VARIETY</Link> :
                                    <Link to='/variety' className="navMenu2" style={{marginRight:"2%"}}>VARIETY</Link>
                                }
                                {window.location.pathname === '/movie' ? 
                                    <Link to='/movie' className="navMenu2 white-text" style={{marginRight:"2%"}}>MOVIES</Link> :
                                    <Link to='/movie' className="navMenu2" style={{marginRight:"2%"}}>MOVIES</Link>
                                }
                                {window.location.pathname === '/anime' ? 
                                    <Link to='/anime' className="navMenu2 white-text" style={{marginRight:"2%"}}>ANIME</Link> :
                                    <Link to='/anime' className="navMenu2" style={{marginRight:"2%"}}>ANIME</Link>
                                }
                            {/* <span className="not-square white">
                            <input className="noStyle teal-text text-darken-1 white" type="text" placeholder="Search..."/>
                            <i className="material-icons black-text left top" style={{fontSize:"200%",marginRight:0,marginTop:0,paddingTop:0}}>search</i>
                            </span> */}
    
                                <ul id="nav-mobile" className="right hide-on-med-and-down" style={{width:'40%'}}>
                                    {/* <li>
                                        <a class="waves-effect waves-black btn not-square white black-text"><i class="material-icons left" style={{paddingTop:1,marginRight:1}}>search</i>search</a>
                                    </li> */}

                                    {
                                       window.location.pathname === '/search' ? '' :  
                                        <form onSubmit={this.onSearch}>
                                            <div className="input-field inline-block left" style={{width:"60%",height:45,paddingTop:"1%"}} >
                                                <input className="not-square white-text grey darken-2" id="search" type="search" placeholder='' required/>
                                                <label className="label-icon"><i className="material-icons white-text" style={{marginBottom:"3%"}}>search</i></label>
                                            </div>
                                        </form>
                                    }


                                    
                                    {/* <li className="right" style={{margintop:0}}><Link className="navMenu" to="/login">SIGN IN</Link></li> */}
                                    <Link className="right" to='/login'><button className="btn not-square white black-text" >SIGN IN</button></Link>
                                    <Link className="right"  style={{marginBottom:0,paddingRight:0,paddingLeft:0}} to="/register">REGISTER</Link>
                                </ul>
                            {/* <Sidenav/> */}
                            </div>
                        </nav>
                    </div>
                </div>:
                <div className="navbar-fixed" style={{margin:0}}>
                <div className="z-depth-0">
                    <nav>
                        <div className="nav-wrapper black">
                            <Link to="/" className=" left"><img className="" src={BogoWhite} style={{height:"29px", marginLeft:"30%",marginTop:"20%"}} alt="BOGO"/></Link>
                            {window.location.pathname === '/drama' ? 
                                <Link to='/drama' className="navMenu2 white-text" style={{marginLeft:"5%",marginRight:"2%"}}>DRAMA</Link> :
                                <Link to='/drama' className="navMenu2" style={{marginLeft:"5%",marginRight:"2%"}}>DRAMA</Link>
                            }
                            {window.location.pathname === '/variety' ? 
                                <Link to='/variety' className="navMenu2 white-text" style={{marginRight:"2%"}}>VARIETY</Link> :
                                <Link to='/variety' className="navMenu2" style={{marginRight:"2%"}}>VARIETY</Link>
                            }
                            {window.location.pathname === '/movie' ? 
                                <Link to='/movie' className="navMenu2 white-text" style={{marginRight:"2%"}}>MOVIES</Link> :
                                <Link to='/movie' className="navMenu2" style={{marginRight:"2%"}}>MOVIES</Link>
                            }
                            {window.location.pathname === '/anime' ? 
                                <Link to='/anime' className="navMenu2 white-text" style={{marginRight:"2%"}}>ANIME</Link> :
                                <Link to='/anime' className="navMenu2" style={{marginRight:"2%"}}>ANIME</Link>
                            }
                            {/* <span className="not-square white">
                            <input className="noStyle teal-text text-darken-1 white" type="text" placeholder="Search..."/>
                            <i className="material-icons black-text left top" style={{fontSize:"200%",marginRight:0,marginTop:0,paddingTop:0}}>search</i>
                            </span> */}
    
                            <ul id="nav-mobile" className="right hide-on-med-and-down" style={{width:'40%'}}>
                                {/* <li>
                                    <a class="waves-effect waves-black btn not-square white black-text"><i class="material-icons left" style={{paddingTop:1,marginRight:1}}>search</i>search</a>
                                </li> */}
                                
                                <div className="right">
                                    <Profile/> 
                                </div>

                                {
                                   window.location.pathname === '/search' ? '' :  
                                    <form onSubmit={this.onSearch}>
                                        <div className="input-field inline-block right" style={{width:"60%",height:45,paddingTop:"1.2%"}} >
                                            <input className="not-square white-text grey darken-2" id="search" type="search" placeholder='' required/>
                                            <label className="label-icon"><i className="material-icons white-text" style={{marginBottom:"3%"}}>search</i></label>
                                        </div>
                                    </form>
                                }

                                {/* <div className="input-field inline-block right" style={{width:"60%",height:45,paddingTop:"1.2%"}} >
                                    <input className="not-square white-text grey darken-2" id="search" type="search" placeholder='' required/>
                                    <label className="label-icon"><i className="material-icons white-text" style={{marginBottom:"3%"}}>search</i></label>
                                </div>
                                 */}
                            </ul>
                        {/* <Sidenav/> */}
                        </div>
                    </nav>
                </div>
            </div>
                    }
                    <div className='container' style={{marginTop:"2%"}} >
                        <div className="row">
                            <div className="col s10 offset-s1 input-field">
                                <form onSubmit={this.onSearchChange}>
                                    <input className="center teal-text text-darken-1" placeholder='Search by Title' onChange={e=>this.setState({search:e.target.value})} type="text" style={{width:'100%', fontSize:"30px"}} value={this.state.search} />
                                </form>
                                <div className="col s10 offset-s1">
                                    {this.renderData()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else{
            return(
                <p>Loading</p>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email
    }
}

export default connect(mapStateToProps)(HomeSearch)
