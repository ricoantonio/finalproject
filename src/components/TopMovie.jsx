import React, { Component } from 'react'
import ItemsCarousel from 'react-items-carousel'
import Axios from 'axios'
import urlApi from '../helpers'
import { Link } from 'react-router-dom'

export class TopMovie extends Component {

    state={
        activeItemIndex:[],
        done:false
    }

    componentDidMount() {
        Axios.get(urlApi+'/movie/mostview')
        .then((res)=>{
            this.setState({activeItemIndex:res.data})
            // console.log(res.data);
            this.setState({done:true})
            
        }).catch((err)=>{

        })
    }

    renderPoster=()=>{
        let list=this.state.activeItemIndex.map((val,i)=>{
            var link=`/movie-detail/${val.link}`
            return(
                <Link to={link}>
                    <div className="posterHome" style={{cursor:'pointer'}}>
                        <img className="col s2 not-square2" style={{width:"20%"}} src={urlApi+'/posters/'+val.pic} alt=""/>
                    </div>   
                </Link>
            )
        })
        return list
    }

    render() {
       if(this.state.done){
        return (
           <div className='container'>
             <h2 className="center sideText black-text">Popular Movies</h2>
                {/* <ItemsCarousel
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
                > */}
                <div className="row" style={{marginTop:"3%"}}>
                    {this.renderPoster()}
                </div>
                {/* </ItemsCarousel> */}
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
