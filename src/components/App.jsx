import React, { Component } from 'react'
import {Route,BrowserRouter} from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import Home from './Home'
import AnimeHome from './AnimeHome'


class App extends Component{
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route path="/"exact component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/animehome" component={AnimeHome}/>

                </BrowserRouter>
            </div>
        )
    }
}

export default App