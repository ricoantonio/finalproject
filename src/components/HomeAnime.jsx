import React, { Component } from 'react'
import Nav from './Nav'
import Footer from './Footer'

class HomeAnime extends Component{
    render() {
        return (
            <div>
                <Nav/>
                <h1>Anime Home</h1>
                <Footer/>
            </div>
        )
    }
}
export default HomeAnime