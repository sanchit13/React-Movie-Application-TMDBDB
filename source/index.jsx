import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';

// Include your new Components here Import Application Import PageHeader Import
// ViewType [Gallery or Seach? Toggles Display Type --> Defaults to Search
// View]

// 1. List Section Import SearchComponent Import SearchBar Element Import SortBy
// Element [Genre/Title] Import Display [Ascending/Descending] Import
// ListViewComponent --> Display nothing at first, only starts displaying once
// shit starts getting typed in. Import ListElement -- > Each List Element gets
// data from API.

// 2. Gallery Section Import FilterComponent Import Each Filter Element where
// clicking on sorts it by filter Import GalleryViewComponent Import
// GalleryElement Import DetailViewElement [Toggled when a ListElement or
// GalleryElement is clicked on]

import PageTitle from './components/PageTitle/PageTitle.jsx'
import ListSection from './components/Section/ListSection.jsx'
import GalleryView from './components/Section/GalleryView.jsx'
import PickView from './components/PickView/PickView.jsx'

// Include any new stylesheets here Note that components' stylesheets should NOT
// be included here. They should be 'require'd in their component class file.
require('./styles/main.scss');

class App extends React.Component {

  render() {
    return (
      <div>
        <Main/>
      </div>
    )
  }
}

const Main = () => (
    <main>
        <PageTitle/>
        <PickView/>
        <Switch>
            <Route path="/gallery/" component={GalleryView} />
            <Route path="/" component={ListSection} />
        </Switch>
    </main>
)

render(<Router><App/></Router>, document.getElementById('app'));
