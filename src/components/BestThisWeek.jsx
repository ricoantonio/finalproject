import React, { Component } from 'react'
import Slider from 'react-slick'
import runningman from '../Webpic/runningman.png'
import hoteldelluna from '../Webpic/hoteldelluna.png'
import onepiece from '../Webpic/onepiece.jpg'
import docjohn from '../Webpic/docjohn.jpg'
import knowingbros from '../Webpic/knowingbros.jpeg'
import myheroacademia from '../Webpic/myheroacademia.jpg'

class BestThisWeek extends Component{

    render() {
        var settings = {
            // dots:true,
            infinite: true,
            // fade: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed:10000,
            autoplay: true,
            pauseOnHover:false,
            arrows:false,     
        };
        return (
            <div>
                <div className="center-align tinted" style={{marginTop:0, marginBottom:0}}  >
                    <Slider {...settings} className="black">
                        <div className="transparent">
                            <a href="/">
                                <img className="center-img z-depth-0 " src={runningman} alt="running man"/>
                            </a>
                        </div>
                        <div className="transparent">
                            <a href="/">
                                <img className="center-img z-depth-0 " src={hoteldelluna} alt="hotel del luna"/>
                            </a>
                        </div>
                    </Slider>
                </div>
                {/* {window.location.pathname === '/' ?
                     <div className="center-align tinted" style={{marginTop:0, marginBottom:0}}  >
                        <Slider {...settings} className="black">
                            <div className="transparent">
                                <a href="/">
                                    <img className="center-img z-depth-0 " src={runningman} alt="running man"/>
                                </a>
                            </div>
                            <div className="transparent">
                                <a href="/">
                                    <img className="center-img z-depth-0 " src={hoteldelluna} alt="hotel del luna"/>
                                </a>
                            </div>
                        </Slider>
                    </div> :
                window.location.pathname === '/drama' ?
                    <div className="center-align tinted" style={{marginTop:0, marginBottom:0}}  >
                        <Slider {...settings} className="black">
                            <div className="transparent">
                                <a href="/">
                                    <img className="center-img z-depth-0 " style={{height:"50%"}} src={docjohn} alt="doctor john"/>
                                </a>
                            </div>
                            <div className="transparent">
                                <a href="/">
                                    <img className="center-img z-depth-0 " src={hoteldelluna} alt="hotel del luna"/>
                                </a>
                            </div>
                        </Slider>
                    </div> :
                window.location.pathname === '/anime' ? 
                    <div className="center-align tinted" style={{marginTop:0, marginBottom:0}}  >
                        <Slider {...settings} className="black">
                            <div className="transparent">
                                <a href="/">
                                    <img className="center-img z-depth-0 " src={onepiece} alt="one piece"/>
                                </a>
                            </div>
                            <div className="transparent">
                                <a href="/">
                                    <img className="center-img z-depth-0 " src={myheroacademia} alt="myhero academia"/>
                                </a>
                            </div> 
                        </Slider>
                    </div> :
                    <div className="center-align tinted" style={{marginTop:0, marginBottom:0}}  >
                        <Slider {...settings} className="black">
                            <div className="transparent">
                                <a href="/">
                                    <img className="center-img z-depth-0 " src={knowingbros} alt="knowing brother"/>
                                </a>
                            </div>
                            <div className="transparent">
                                <a href="/">
                                    <img className="center-img z-depth-0 " src={runningman} alt="running man"/>
                                </a>
                            </div>
                        </Slider>
                    </div> 
                }           */}
            </div>     
        )
    }
}

export default BestThisWeek