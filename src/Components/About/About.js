import React, { Component } from 'react';
import './About.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLinkedin, faTwitter  } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';


class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
                <div className="card2">
                    <img src="https://www.w3schools.com/w3images/team2.jpg" alt="John" style={{"width":"100%"}} />
                    <h1>John Doe</h1>
                    <p className="title">CEO & Founder, Artist</p>
                    <p>Harvard University</p>
                    <Link to='/'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                    <Link to='/'>
                        <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                    <Link to='/contact/'><p><button className='about-btn'>Contact</button></p></Link>
                </div>
         );
    }
}
 
export default About;