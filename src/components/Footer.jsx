import React, { Component } from 'react'
import BogoWhite from '.././Webpic/BOGOlogoWhite.svg'
import iconFacebook from '.././Webpic/facebook-icon.svg'
import iconInstagram from '.././Webpic/instagram-icon.svg'
import iconYoutube from '.././Webpic/youtube-icon.svg'
import iconTwitter from '.././Webpic/twitter-icon.svg'


  
  export class Footer extends Component {
    
    render() {
        return (
            <footer class="page-footer black">
                <div class="container">
                    <div class="row">
                        <div class="col l6 s12">
                        <img style={{height:"35px"}} src={BogoWhite} alt=""/>
                        <p class="grey-text text-lighten-4">Premium Video-on-Demand service with better viewing experience.</p>
                        </div>
                        <div class="col l4 offset-l2 s12">
                        <h5 class="white-text">Our Socials</h5>
                        <ul>
                            <span><a href="/"><img src={iconYoutube} style={{height:"30px"}} alt=""/></a></span>
                            <span><a href="/"><img src={iconTwitter} style={{height:"30px", marginLeft:"2%"}} alt=""/></a></span>
                            <span><a href="/"><img src={iconInstagram} style={{height:"30px", marginLeft:"2%"}} alt=""/></a></span>
                            <span><a href="/"><img src={iconFacebook} style={{height:"30px", marginLeft:"2%"}} alt=""/></a></span>
                        </ul>
                        </div>
                    </div>
                </div>
                    <div class="footer-copyright">
                        <div class="container">
                        Currently v1.00b © 2019 Copyright |BOGO
                        <a class="grey-text text-lighten-4 right" style={{fontSize:"12px"}} href="#!">More Links</a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
