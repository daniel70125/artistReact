import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <footer>
                <p>Author: John Doe</p>
                <p>Email: <a href="mailto:hege@example.com">johndoe@gmail.com</a></p>
            </footer>
         );
    }
}
 
export default Footer;