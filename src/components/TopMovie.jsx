import React, { Component } from 'react'
import ItemsCarousel from 'react-items-carousel'
import Axios from 'axios'
import urlApi from '../helpers'

export class TopMovie extends Component {

    state={
        activeItemIndex:[],
        done:false
    }

    componentDidMount() {
        Axios.get(urlApi+'/movie/mostview')
        .then((res)=>{
            this.setState({activeItemIndex:res.data})
            console.log(res.data);
            this.setState({done:true})
            
        }).catch((err)=>{

        })
    }

    renderPoster=()=>{
        let list=this.state.activeItemIndex.map((val,i)=>{
            return(
                <div className="zoom">
                    <img style={{height:230}} src={urlApi+'/posters/'+val.pic} alt=""/>
                </div>
            )
        })
        return list
    }

    render() {
       if(this.state.done){
        return (
           <div>
             <h2 className="center sideText black-text">Best Movies</h2>
              <div style={{"padding":"20px","maxWidth":"100%", height:"10%"}}>
                <ItemsCarousel
                  infiniteLoop={false}
                  gutter={12}
                  activePosition={'center'}
                  chevronWidth={60}
                  disableSwipe={false}
                  alwaysShowChevrons={false}
                  numberOfCards={10}
                  slidesToScroll={2}
                  outsideChevron={false}
                  showSlither={false}
                  firstAndLastGutter={false}
                  rightChevron={<i className="material-icons medium white-text">navigate_next</i>}
                  leftChevron={<i className="material-icons medium white-text">navigate_before</i>}
                >
                  {this.renderPoster()}
                </ItemsCarousel>
            </div>
           </div>
        )
       }else{
           return(
               <p>Loading</p>
           )
       }
    }
}

export default TopMovie
