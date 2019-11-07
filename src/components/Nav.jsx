import React, { Component } from 'react'
import BogoWhite from '.././Webpic/BOGOlogoWhite.svg'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import Profile from './Profile'

export class Nav extends Component{
    
    renderNav=()=>{
        // console.log(window.location.pathname);
        
        if (!this.props.email){
            return (
                <div className="navbar-fixed" style={{margin:0}}>
                    <div className="z-depth-0">
                        <nav>
                            <div className="nav-wrapper black">
                                <Link to="/" className=" left"><img className="" src={BogoWhite} style={{height:"29px", marginLeft:"30%",marginTop:"20%"}} alt="BOGO"/></Link>
                                {window.location.pathname === '/drama' ? 
                                    <Link to='/drama' className="navMenu2 white-text" style={{marginLeft:"5%",marginRight:"2%"}}><b>DRAMA</b></Link> :
                                    <Link to='/drama' className="navMenu2" style={{marginLeft:"5%",marginRight:"2%"}}>DRAMA</Link>
                                }
                                {window.location.pathname === '/variety' ? 
                                    <Link to='/variety' className="navMenu2 white-text" style={{marginRight:"2%"}}><b>VARIETY</b></Link> :
                                    <Link to='/variety' className="navMenu2" style={{marginRight:"2%"}}>VARIETY</Link>
                                }
                                {window.location.pathname === '/movie' ? 
                                    <Link to='/movie' className="navMenu2 white-text" style={{marginRight:"2%"}}><b>MOVIES</b></Link> :
                                    <Link to='/movie' className="navMenu2" style={{marginRight:"2%"}}>MOVIES</Link>
                                }
                                {window.location.pathname === '/anime' ? 
                                    <Link to='/anime' className="navMenu2 white-text" style={{marginRight:"2%"}}><b>ANIME</b></Link> :
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
                                    <div className="input-field inline-block left" style={{width:"60%",height:45,paddingTop:"1%"}} >
                                        <input className="not-square white-text grey darken-2" id="search" type="search" placeholder='' required/>
                                        <label className="label-icon"><i className="material-icons white-text" style={{marginBottom:"3%"}}>search</i></label>
                                    </div>
                                    {/* <li className="right" style={{margintop:0}}><Link className="navMenu" to="/login"><b>SIGN IN</b></Link></li> */}
                                    <Link className="right" to='/login'><button className="btn not-square white black-text" ><b>SIGN IN</b></button></Link>
                                    <Link className="right"  style={{marginBottom:0,paddingRight:0,paddingLeft:0}} to="/register">REGISTER</Link>
                                </ul>
                            {/* <Sidenav/> */}
                            </div>
                        </nav>
                    </div>
                </div>
            )
        }else{
            return(
                <div className="navbar-fixed" style={{margin:0}}>
                    <div className="z-depth-0">
                        <nav>
                            <div className="nav-wrapper black">
                                <Link to="/" className=" left"><img className="" src={BogoWhite} style={{height:"29px", marginLeft:"30%",marginTop:"20%"}} alt="BOGO"/></Link>
                                {window.location.pathname === '/drama' ? 
                                    <Link to='/drama' className="navMenu2 white-text" style={{marginLeft:"5%",marginRight:"2%"}}><b>DRAMA</b></Link> :
                                    <Link to='/drama' className="navMenu2" style={{marginLeft:"5%",marginRight:"2%"}}>DRAMA</Link>
                                }
                                {window.location.pathname === '/variety' ? 
                                    <Link to='/variety' className="navMenu2 white-text" style={{marginRight:"2%"}}><b>VARIETY</b></Link> :
                                    <Link to='/variety' className="navMenu2" style={{marginRight:"2%"}}>VARIETY</Link>
                                }
                                {window.location.pathname === '/movie' ? 
                                    <Link to='/movie' className="navMenu2 white-text" style={{marginRight:"2%"}}><b>MOVIES</b></Link> :
                                    <Link to='/movie' className="navMenu2" style={{marginRight:"2%"}}>MOVIES</Link>
                                }
                                {window.location.pathname === '/anime' ? 
                                    <Link to='/anime' className="navMenu2 white-text" style={{marginRight:"2%"}}><b>ANIME</b></Link> :
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
                                    
                                    <div className="input-field inline-block right" style={{width:"60%",height:45,paddingTop:"1.2%"}} >
                                        <input className="not-square white-text grey darken-2" id="search" type="search" placeholder='' required/>
                                        <label className="label-icon"><i className="material-icons white-text" style={{marginBottom:"3%"}}>search</i></label>
                                    </div>
                                    
                                </ul>
                            {/* <Sidenav/> */}
                            </div>
                        </nav>
                    </div>
                </div>
            )
        }
    }

    render() {
        return(
            this.renderNav()
        )
    }
}

const mapStateToProps=state=>{
    return {
      email: state.auth.email,
    }
}

// export default connect(mapStateToProps)(Home)
export default connect(mapStateToProps)(Nav)