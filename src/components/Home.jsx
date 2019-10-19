import React, { Component } from 'react'
import Nav from './Nav'
import BestThisWeek from './BestThisWeek'
import Footer from './Footer'
import Plans from './Plans'
import MovieDisplay from './MovieDisplay'
import Trial from './Trial'

class Home extends Component{
    render() {
        return (
            <div className="">
                <Nav/>
                <Trial/>
                <BestThisWeek/>
                <Plans/>
                <Footer/>
            </div>
        )
    }
}


// export default connect(mapStateToProps)(Home)
export default Home