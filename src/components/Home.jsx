import React, { Component } from 'react'
import Nav from './Nav'
import BestThisWeek from './BestThisWeek'

class Home extends Component{
    render() {
        return (
            <div className="black">
                <Nav/>
                <BestThisWeek/>
                <div className="black" style={{marginTop:0, height:"500px"}}>
                    <button className="btn-large right" style={{marginRight:"10%",marginTop:"20%"}}>Try For Free</button>
                </div>
                <div style={{marginTop:"5%"}}>

                </div>
            </div>
        )
    }
}
export default Home