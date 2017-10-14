import React from 'react';
import {render} from 'react-dom';
import styles from './ListElement.scss'



class GalleryElement extends React.Component {
    
    render() {
      return (
        <a href={this.props.url}>
        <article className="listElement">
            <img src={this.props.moviePoster} alt=""/>
            <h1>{this.props.movieTitle}</h1>
            <h3> Rating : {this.props.movieRating}</h3>
        </article>
        </a>
      )
    }
  }
  
  export default GalleryElement
  