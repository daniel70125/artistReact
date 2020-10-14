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
                <p>Author: Paul Wright</p>
                <p>Email: <a href="mailto:hege@example.com">paulwright@gmail.com</a></p>
            </footer>
         );
    }
}
 
export default Footer;