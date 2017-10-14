import React from 'react'
import { Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'



class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(e){
             let searchQuery = e.target.value;
             axios.get('https://api.themoviedb.org/3/search/movie?api_key=609cf6005b49149654734347f1c3575d&language=en-US&query=' + searchQuery + '&page=1')
             .then(response => {
                this.props.onChange(response.data.results);
             });
        }

    render() {
        return(
             <div>
                 <Input id="searchBar"onChange={this.handleSearch} className="searchBar" fluid placeholder='Search for a movie...' />
             </div>
        )
    }
}
export default SearchBar

//axios.get('https://api.themoviedb.org/3/search/movie?api_key=609cf6005b49149654734347f1c3575d&language=en-US&query=' + searchQuery + '&page=1')