import React, { Component } from 'react'
import BogoWhite from '.././Webpic/BOGOlogoWhite.svg'
import iconFacebook from '.././Webpic/facebook-icon.svg'
import iconInstagram from '.././Webpic/instagram-icon.svg'
import iconYoutube from '.././Webpic/youtube-icon.svg'
import iconTwitter from '.././Webpic/twitter-icon.svg'


  
  export class Footer extends Component {
    
    render() {
        return (
            <footer className="page-footer black" style={{marginTop:"6%"}}>
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                        <img style={{height:"35px"}} src={BogoWhite} alt=""/>
                        <p className="grey-text text-lighten-4">Premium Video-on-Demand service with better viewing experience.</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Our Socials</h5>
                        <ul>
                            <span><a href="/"><img src={iconYoutube} style={{height:"30px"}} alt=""/></a></span>
                            <span><a href="/"><img src={iconTwitter} style={{height:"30px", marginLeft:"2%"}} alt=""/></a></span>
                            <span><a href="/"><img src={iconInstagram} style={{height:"30px", marginLeft:"2%"}} alt=""/></a></span>
                            <span><a href="/"><img src={iconFacebook} style={{height:"30px", marginLeft:"2%"}} alt=""/></a></span>
                        </ul>
                        </div>
                    </div>
                </div>
                    <div className="footer-copyright">
                        <div className="container">
                        Currently v1.00b © 2019 Copyright |BOGO
                        <a className="grey-text text-lighten-4 right" style={{fontSize:"12px"}} href="#!">More Links</a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
