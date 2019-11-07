import React, { Component } from 'react'
import Nav from './Nav'
import BestThisWeek from './BestThisWeek'
import Footer from './Footer'
import Plans from './Plans'
import Trial from './Trial'
import TopMovie from './TopMovie'
import Notif from './Notif'

class Home extends Component{

    state={
        done:false
    }

    componentDidMount(){
        this.setState({done:true})
    }
    

    render() {
        if(this.state.done){
            return (
                <div className="">
                    <Nav/>
                    <Trial/>
                    <BestThisWeek/>
                    <TopMovie/>
                    <Plans/>
                    <Footer/>
                </div>
            )
        }else{
            return(
                <p>Loading</p>
            )
        }
    }
}


// export default connect(mapStateToProps)(Home)
export default Home