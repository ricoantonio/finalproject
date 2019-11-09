import React, { Component } from 'react'
import ItemsCarousel from 'react-items-carousel'
import Axios from 'axios'
import urlApi from '../helpers'
import { Link } from 'react-router-dom'

export class RelatedMovie extends Component {

    state={
        data:[],
        activeItemIndex:0,
        done:false
    }

    componentDidMount() {
        // this.setState({done:true})
        console.log(this.props.category);
        
        Axios.get(urlApi+'/movie/mostview')
        .then((res)=>{
            this.setState({data:res.data})
            // console.log(res.data);
            this.setState({done:true})
            
        }).catch((err)=>{

        })
    }

    renderPoster=()=>{
        let list=this.state.data.map((val,i)=>{
            var link=`/movie-detail/${val.link}`
            return(
                <a href={link} key={i}>
                    <div className="poster" style={{width:"100%"}}>
                        <img className="not-square2 image-poster" style={{width:"85%"}} src={urlApi+'/posters/'+val.pic} alt=""/>
                        <div className="middle-poster">
                            <div className="text-poster">
                                <i className="material-icons" style={{fontSize:"50px"}}>play_circle_outline</i>
                            </div>
                        </div>
                    </div>
                </a>
                // <div  className="" style={{cursor:'pointer'}}>
                //     <img className="" style={{width:"98%"}} src={urlApi+'/posters/'+val.pic} alt=""/>
                // </div>  
            )
        })
        return list
    }

    render() {
       if(this.state.done){
        return (
            <div style={{"padding":"0 10px","maxWidth":"90%","margin":"0 auto"}}>
                <h4 className="sideText black-text" style={{marginBottom:"5%"}}>You might also like </h4>
                    <ItemsCarousel
                        infiniteLoop={false}
                        gutter={12}
                        activePosition={'center'}
                        chevronWidth={50}
                        disableSwipe={false}
                        alwaysShowChevrons={false}
                        numberOfCards={3}
                        slidesToScroll={1}
                        outsideChevron={true}
                        showSlither={false}
                        firstAndLastGutter={false}
                        activeItemIndex={this.state.activeItemIndex}
                        requestToChangeActive={value => this.setState({ activeItemIndex: value })}
                        rightChevron={<i className="material-icons medium black-text" style={{fontSize:30}}>navigate_next</i>}
                        leftChevron={<i className="material-icons medium black-text" style={{fontSize:30}}>navigate_before</i>}
                        >
                        {this.renderPoster()}
                    </ItemsCarousel>
            </div>
        )
       }else{
           return(
               <p>Loading</p>
           )
       }
    }
}

export default RelatedMovie
