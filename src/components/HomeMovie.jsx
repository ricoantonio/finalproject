import React, { Component } from 'react'
import Nav from './Nav'
import Footer from './Footer'

class HomeMovie extends Component{
    render() {
        return (
            <div>
                <Nav/>
                <h1>Movie Home</h1>
                <Footer/>
            </div>
        )
    }
}
export default HomeMovie