import React, { Component } from 'react'
import Nav from './Nav'
import BestThisWeek from './BestThisWeek'
import Footer from './Footer'
import Plans from './Plans'
import MovieDisplay from './MovieDisplay'

class Home extends Component{
    render() {
        return (
            <div className="">
                <Nav/>
                <div className="trial-banner center white-text" style={{marginTop:0,height:'300px'}}>
                    <p className="sideText" style={{marginTop:0,marginBottom:10, fontSize:"38px",paddingTop:35}}> <b>Stream Favourite Movie & Show Now</b> </p>
                    <p  className="" style={{marginTop:10, fontSize:'20px'}}>Premium Video-on-Demand service with better viewing experience, with plans starting <br/> at Rp.50.000/month.</p>
                    <div className="btn-trial">
                        <button className="btn-large not-square white black-text"><b>start your free trial</b></button>
                    </div>
                    <span className="grey-text text-lighten-1" style={{fontSize:"12px"}}>New subscribers only.</span>
                </div>
                <BestThisWeek/>
                <Plans/>
                <Footer/>
            </div>
        )
    }
}


// export default connect(mapStateToProps)(Home)
export default Home