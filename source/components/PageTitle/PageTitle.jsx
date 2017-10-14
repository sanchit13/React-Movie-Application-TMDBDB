import React from 'react'
import styles from './PageTitle.scss'
import axios from 'axios'

class PageTitle extends React.Component {

    render() {
        return(
            <h1 className="Title">
                Welcome to Sanchit's Movie Finder!
            </h1>
        )
    }
}

export default PageTitle
