import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import styles from './Home.scss'

class Home extends React.Component {

    render() {
        return(
            <div className="Home">
                <h1>Welcome to MP2!</h1>
            </div>
        )
    }
}

export default Home
