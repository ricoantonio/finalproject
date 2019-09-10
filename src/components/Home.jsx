import React, { Component } from 'react'
import Nav from './Nav'
import Mixlabs from '../MixLabs.svg'
class Home extends Component{
    render() {
        return (
            <div>
                <Nav/>
                <img src={Mixlabs} alt=""/>
            </div>
        )
    }
}
export default Home