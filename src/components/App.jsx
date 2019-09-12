import React, { Component } from 'react'
import {Route,BrowserRouter} from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import Home from './Home'
import AnimeHome from './AnimeHome'
import DramaHome from './DramaHome'
import VarietyHome from './VarietyHome'


class App extends Component{
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route path="/"exact component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/anime" component={AnimeHome}/>
                    <Route path="/koreandrama" component={DramaHome}/>
                    <Route path="/koreanvariety" component={VarietyHome}/>

                </BrowserRouter>
            </div>
        )
    }
}

export default App