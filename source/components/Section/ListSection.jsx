import React from 'react';
import {render} from 'react-dom';
import SearchComponent from '../Search/SearchComponent.jsx'
import ListElement from "./ListElement.jsx"


class ListSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      elementArray: [],
    }

    this.handleChange = this.handleChange.bind(this);
    this.ascendRank = this.ascendRank.bind(this);
    this.descendRank = this.descendRank.bind(this);
    this.ascendTitle = this.ascendTitle.bind(this);
    this.descendTitle = this.descendTitle.bind(this);

  }
  


  handleChange(movies) {
    this.setState({movies: movies});
    let tempArr = [];
      for (let x = 0; x < this.state.movies.length; x++) {
        let rating = this.state.movies[x].vote_average;
        let title = this.state.movies[x].title;
        let imageUrl = "https://image.tmdb.org/t/p/w500/" + this.state.movies[x].poster_path;
        tempArr.push(<ListElement style="cursor: pointer;" moviePoster={imageUrl} movieTitle={title} movieRating={rating}/>);
      }
    this.setState({elementArray: tempArr});
  }

 

  ascendRank(){
    let tempArr = this.state.elementArray;
    tempArr.sort((a, b) => b.props.movieRating - a.props.movieRating);
    this.setState({
        elementArray : tempArr
      })
  }

  descendRank(){
    let tempArr = this.state.elementArray;
    tempArr.sort((a, b) => a.props.movieRating - b.props.movieRating);
    this.setState({
        elementArray : tempArr
      })
  }

  ascendTitle(){
    let tempArr = this.state.elementArray;

    tempArr.sort(function(a,b){
      if(a.props.movieTitle == b.props.movieTitle) return 0;
      else if (a.props.movieTitle > b.props.movieTitle) return 1;
      else return -1;
    });

    this.setState({
      elementArray : tempArr
    })
  }

  descendTitle(){
    console.log("descend")
    let tempArr = this.state.elementArray;
    tempArr.sort(function(a,b){
      console.log(a.title);
      if (a.props.movieTitle > b.props.movieTitle) return -1;
      else if (a.props.movieTitle < b.props.movieTitle) return 1;
      return 0;
    });
    this.setState({
      elementArray : tempArr
    })
  }

  render() {
    return (
      <div>
        <SearchComponent
          onChange={this.handleChange}
          ascendTitle = {this.ascendTitle}
          descendTitle = {this.descendTitle}
          ascendRank = {this.ascendRank}
          descendRank = {this.descendRank}
          /> 
          {this.state.elementArray.length > 0 && this.state.elementArray}
      </div>
    )
  }
}

export default ListSection
