import React from 'react';
import {render} from 'react-dom';
import { Button } from 'semantic-ui-react';
import styles from './ListElement.scss';
import axios from 'axios';
var movieData = 0;
class GalleryView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      elementArray: []
    };
    this.getData = this.getData.bind(this);
  }
  
   

    getData(){
      axios.get('https://api.themoviedb.org/3/genre/28/movies?api_key=609cf6005b49149654734347f1c3575d&language=en-US&include_adult=false&sort_by=created_at.asc')
      .then(response => {
        movieData = response.data.results;
        console.log(movieData);
     });
     console.log(movieData);
  }
      

    componentDidMount(){
      this.getData();
     
      let tempArr = [];
      for (let x = 0; x < this.state.movies.length; x++) {
          //let rating = this.state.movies[x].vote_average;
          //let title = this.state.movies[x].title;
           let imageUrl = "https://image.tmdb.org/t/p/w500/" + this.state.movies[x].poster_path;
           console.log(imageUrl);
           tempArr.push(<img src={imageUrl}/>);
         //tempArr.push(<ListElement style="cursor: pointer;" moviePoster={imageUrl} movieTitle={title} movieRating={rating}/>);
        }

        this.setState({
          elementArray : tempArr
        });
        
    }

  
  

    render(){
        return (
          <div>
            <header className="filtersMenu">
               <Button compact inverted color='red'>All</Button>
               <Button compact inverted color='red'>Action</Button>
               <Button compact inverted color='red'>Animation</Button>
               <Button compact inverted color='red'>Comedy</Button>
               <Button compact inverted color='red'>Crime</Button>
               <Button compact inverted color='red'>Documentary</Button>
               <Button compact inverted color='red'>Drama</Button>
               <Button compact inverted color='red'>Family</Button>
               <Button compact inverted color='red'>Horror</Button>
               <Button compact inverted color='red'>Mystery</Button>
               <Button compact inverted color='red'>Romance</Button>
               <Button compact inverted color='red'>Thriller</Button>
            </header>
 
            <div className="images">
               {this.state.elementArray.length > 0 && this.state.elementArray}
            </div>
          </div>

        );
      }
    
  } 
  

export default GalleryView
//Action Adventure Animation Comedy Crime Documentary Drama Family Fantasy Horror Romance