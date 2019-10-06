import React, { Component } from 'react'
import {Route,BrowserRouter} from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import Home from './Home'
import HomeAnime from './HomeAnime'
import HomeDrama from './HomeDrama'
import HomeVariety from './HomeVariety'
import HomeMovie from './HomeMovie'


class App extends Component{
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route path="/"exact component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/anime" component={HomeAnime}/>
                    <Route path="/drama" component={HomeDrama}/>
                    <Route path="/variety" component={HomeVariety}/>
                    <Route path="/movie" component={HomeMovie}/>
                </BrowserRouter>
            </div>
        )
    }
}

export default App