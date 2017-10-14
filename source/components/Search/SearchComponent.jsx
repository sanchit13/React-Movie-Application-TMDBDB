import React from 'react';
import {render} from 'react-dom';
import {Button, Divider} from 'semantic-ui-react'
import SearchBar from './SearchBar.jsx'
import styles from './Search.scss'

let filterOptions = [
  {
    text: "Title",
    value: "Title"
  }, {
    text: "Rank",
    value: "Rank"
  }
];

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.ascendRank = this.ascendRank.bind(this);
    this.descendRank = this.descendRank.bind(this);
    this.ascendTitle = this.ascendTitle.bind(this);
    this.descendTitle = this.descendTitle.bind(this);
  }

  handleChange(movies) {
    this.props.onChange(movies);
  }
  
  ascendRank(){
    this.props.ascendRank();
  }

  descendRank(){
    this.props.descendRank();
  }
  
  ascendTitle(){
    this.props.ascendTitle();
  }

  descendTitle(){
    this.props.descendTitle();
  }


  render() {
    return (
      <div className="searchComponent">
        <SearchBar onChange={this.handleChange}/>
        <Divider/>

       <div className="buttonGroupStyling">
          <Button className="buttonStyling" compact  color='teal'  onClick={(e) => this.ascendTitle()} > Ascending Title</Button> 
          <Button className="buttonStyling" compact  color='purple'  onClick={(e) => this.descendTitle()} > Descending Title</Button>
          <Button className="buttonStyling" compact  color='pink'  onClick={(e) => this.ascendRank()} > Ascending Ratings </Button>
          <Button className="buttonStyling" compact  color='brown'  onClick={(e) => this.descendRank()} > Decending Ratings</Button>
       </div>
 
      </div>
    )
  }
}

export default SearchComponent
