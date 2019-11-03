import React, { Component } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Trial from './Trial'
import BestThisWeek from './BestThisWeek'

class HomeVariety extends Component{
    render() {
        return (
            <div>
                <Nav/>
                <Trial/>
                <BestThisWeek/>
                <h1 className="sideText black-text center">Korean Variety</h1>
                <Footer/>
            </div>
        )
    }
}
export default HomeVariety