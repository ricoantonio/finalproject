import React, { Component } from 'react'
import {Route,BrowserRouter} from 'react-router-dom'

import Nav from './Nav'
import Login from './Login'
import Register from './Register'
import Home from './Home'


class App extends Component{
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Nav/>
                    <Route path="/"exact component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                </BrowserRouter>
            </div>
        )
    }
}

export default App