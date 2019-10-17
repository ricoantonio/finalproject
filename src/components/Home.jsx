import React, { Component } from 'react'
import Nav from './Nav'
import BestThisWeek from './BestThisWeek'
import Footer from './Footer'

class Home extends Component{
    render() {
        return (
            <div className="">
                <Nav/>
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