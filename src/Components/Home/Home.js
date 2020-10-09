import React, { Component } from 'react';
import './Home.scss';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import {Link} from 'react-router-dom'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div id='container'>
                <div style={{"width":"100%", "margin":"auto"}}>
                    <h1>Welcome</h1>
                    <hr style={{"width":"30%"}} />
                    <Fade in='false' timeout={3000}>

                    <Link to='/portfolio/'>
                        <Button variant="contained" color="primary" disableElevation>Portfolio</Button>
                    </Link>

                    </Fade>
                </div>
            </div>
         );
    }
}
 
export default Home;