import React, { Component } from 'react';
import './Success.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare} from '@fortawesome/free-solid-svg-icons'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';


class Success extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div id='sucess-cont'>
                <div id='success-top'>
                    <FontAwesomeIcon style={{"font-size":"42px"}}icon={faCheckSquare} />
                    <p style={{"marginBottom":"5px", "fontSize":"24px"}}>Awesome</p>
                    <p style={{"marginTop":"5px"}}>Your purchased was complete!</p>
                </div>
                <div id='success-bottom'>
                        <Link to='/portfolio/'>
                        <Button size="small" variant="contained" color="primary">
                            Back to Portfolio
                        </Button>
                        </Link>
                        <Link to='/contact/'>
                        <Button size="small" variant="contained" color="primary">
                            Contact Us
                        </Button>
                        </Link>
                </div>
            </div>
         );
    }
}
 
export default Success;