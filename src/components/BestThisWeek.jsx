import React, { Component } from 'react'
import Slider from 'react-slick'

class BestThisWeek extends Component{
    render() {
        var settings = {
            dots: true,
            infinite: true,
            fade: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed:10000,
            autoplay: true,
        };
        return (
               <div className="center-align container">
                    <Slider {...settings} >
                    {/* <div className="">
                        <img 
                        style={{height:"400px"}}
                        className="center-align"
                        src="https://channel-korea.com/wp-content/uploads/2018/09/%E1%84%85%E1%85%A5%E1%86%AB%E1%84%82%E1%85%B5%E1%86%BC%E1%84%86%E1%85%A2%E1%86%AB-521.jpg" 
                        alt=""/>
                    </div> */}
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div className="center">
                        <h3>6</h3>
                    </div>
                </Slider>
               </div>
        );
    }
}

export default BestThisWeek