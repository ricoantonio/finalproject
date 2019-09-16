import React, { Component } from 'react'
import Nav from './Nav'
import BestThisWeek from './BestThisWeek'

class Home extends Component{
    render() {
        return (
            <div>
                <Nav/>
                <BestThisWeek/>

            </div>
        )
    }
}
export default Home