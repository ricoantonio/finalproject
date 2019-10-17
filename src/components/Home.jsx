import React, { Component } from 'react'
import Nav from './Nav'
import BestThisWeek from './BestThisWeek'
import Footer from './Footer'

class Home extends Component{
    render() {
        return (
            <div className="">
                <Nav/>
                <div className="trial-banner center white-text" style={{marginTop:0,height:'300px',marginBottom:"5%"}}>
                    <p className="sideText" style={{marginTop:0,marginBottom:10, fontSize:"38px",paddingTop:35}}> <b>Stream Favourite Movie/Show Now</b> </p>
                    <p  className="" style={{marginTop:10, fontSize:'20px'}}>Premium Video-on-Demand service with better viewing experience, with plans starting <br/> at Rp.50.000/month.</p>
                    <button className="btn-large not-square white black-text btn-trial"><b>start your free trial</b></button>
                    <br/>
                    <span className="grey-text text-lighten-1" style={{fontSize:"12px"}}>New subscribers only.</span>
                </div>
                <BestThisWeek/>
                <div className="" style={{marginTop:0,height:"500px"}}>
                </div>
                <Footer/>
            </div>
        )
    }
}


// export default connect(mapStateToProps)(Home)
export default Home