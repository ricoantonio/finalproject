import React, { Component } from 'react'
import Slider from 'react-slick'
import runningman from '../Webpic/runningman.jpg'
import hoteldelluna2 from '../Webpic/hoteldelluna2.jpg'
import onepiece from '../Webpic/onepiece.jpg'


class BestThisWeek extends Component{
    render() {
        var settings = {
            dots: true,
            infinite: true,
            fade: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed:5000,
            autoplay: true,
        };
        return (
               <div className="center-align" style={{height:"400px"}}>
                    <Slider {...settings} >
                    <div className="center-align">
                        <a href="">
                            <img className="center-img" src={runningman} alt=""/>
                        </a>
                    </div>
                    <div className="center-align">
                        <a href="">
                            <img className="center-img" src={hoteldelluna2} alt=""/>
                        </a>
                    </div>
                    <div className="center-align">
                        <a href="">
                            <img className="center-img" src={onepiece} alt=""/>
                        </a>
                    </div>
                </Slider>
               </div>
        );
    }
}

export default BestThisWeek