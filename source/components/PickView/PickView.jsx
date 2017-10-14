import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styles from './Views.scss'


class PickView extends React.Component {


    render() {
        return(
             <div className="viewStyling">
                <Link to='/'><Button className="spacingBetween" fluid compact inverted color='red'>List View</Button></Link>
                <Link to='/gallery/'><Button fluid compact inverted color='orange' >Gallery View</Button></Link>
             </div>
        )
    }
}
export default PickView

