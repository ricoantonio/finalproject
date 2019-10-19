import React, { Component } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Trial from './Trial'

class HomeDrama extends Component{
    render() {
        return (
            <div>
                <Nav/>
                <Trial/>
                <h1 className="sideText black-text center">Korean Drama </h1>
                <Footer/>
            </div>
        )
    }
}
export default HomeDrama