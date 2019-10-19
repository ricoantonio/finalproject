import React, { Component } from 'react'
import Nav from './Nav'
import Footer from './Footer'

class HomeDrama extends Component{
    render() {
        return (
            <div>
                <Nav/>
                <h1 className="sideText black-text center">Korean Drama </h1>
                <Footer/>
            </div>
        )
    }
}
export default HomeDrama