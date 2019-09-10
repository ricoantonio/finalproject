import React, { Component } from 'react'
import Nav from './Nav'
class Home extends Component{
    render() {
        return (
            <div>
                <Nav/>
                <h1 className="center-align">Home</h1>
            </div>
        )
    }
}
export default Home