import React, { Component } from 'react'
import Nav from './Nav'
import BestThisWeek from './BestThisWeek'

class Home extends Component{
    render() {
        return (
            <div>
                <Nav/>
                <div>
                    <h3>BEST THIS WEEK</h3>
                    <BestThisWeek/>
                </div>
            </div>
        )
    }
}
export default Home