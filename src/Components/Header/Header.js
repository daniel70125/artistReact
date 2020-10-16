import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush, faHome, faEnvelope, faAddressCard, faBars, faTimes, faPortrait} from '@fortawesome/free-solid-svg-icons'
import {  faLinkedin, faTwitter  } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';
import './Header.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            mobileOpen: false
         }
    this.close = this.close.bind(this);
    }
    close(){
        this.setState({
            mobileOpen: false
        })
    }
    render() { 
        return ( 
            <header>
                <div id='ex'>

                <div id='icon-cont'>
                    <Link to='/'>
                        <FontAwesomeIcon icon={faPaintBrush} />
                    </Link>
                </div>
                <div id='nav-links'>
                    <Link to='/'>
                        <FontAwesomeIcon icon={faHome} />
                        
                    </Link>
                    <Link to='/portfolio/'>
                        <FontAwesomeIcon icon={faPortrait} />
                    </Link>
                    <Link to='/about/'>
                        <FontAwesomeIcon icon={faAddressCard} />
                    </Link>
                    <Link to='/contact/'>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </Link>
                </div>
                <div id='mobile-menu'>
                    <FontAwesomeIcon onClick={() => this.setState({mobileOpen: !this.state.mobileOpen}) } icon={this.state.mobileOpen ? faTimes : faBars} />
                </div>
                <div id='social-icons'>
                    <Link to='#'>
                        <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                    <Link to='#'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                </div>

                </div>
                <div id={this.state.mobileOpen ? 'nav-links-2-open':'nav-links-2-closed'}>
                    <Link to='/' onClick={this.close}>
                        <FontAwesomeIcon icon={faHome} />
                    </Link>
                    <Link to='/portfolio/' onClick={this.close}>
                        <FontAwesomeIcon icon={faPortrait} />
                    </Link>
                    <Link to='/about/' onClick={this.close}>
                        <FontAwesomeIcon icon={faAddressCard} />
                    </Link>
                    <Link to='/contact/' onClick={this.close}>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </Link>
                </div>
            </header>
         );
    }
}
 
export default Header;