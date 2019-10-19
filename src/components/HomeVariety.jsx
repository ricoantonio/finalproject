import React, { Component } from 'react'
import Nav from './Nav'
import Footer from './Footer'

class HomeVariety extends Component{
    render() {
        return (
            <div>
                <Nav/>
                <h1 className="sideText black-text center">Korean Variety</h1>
                <Footer/>
            </div>
        )
    }
}
export default HomeVariety