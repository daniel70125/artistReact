import React, { Component } from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import Link from '@material-ui/core/Link';
import {Link} from 'react-router-dom';
import './Portfolio.scss';
import Item from '../Item/Item';

// import Button from '@material-ui/core/Button';
import axios from 'axios';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
     }
  }
  async componentDidMount(){
    await axios.get('/items')
    .then(res => this.setState({
        items: res.data
    }))
    .catch(err => console.log(err));
  }
  render() { 
    const item = this.state.items.map((elm, index) => {
      return (
            <Link to={`/item/${index}`}>
              <Item id={index} elm={elm} />
            </Link>
      )
    })
    return ( 
      <div id='portfolio-cont'>
        <div id='portfolio-header'>
          <div id='header-text'>
              <h2>Grid Gallery</h2>
              <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" to="/">
                    Home
                </Link>
                <Link style={{"textDecoration":"underline"}} color="textPrimary" to="/components/breadcrumbs/" aria-current="page">
                Portfolio
                </Link>
              </Breadcrumbs>
          </div>
          </div>
          <div className="tab">
            <button className="tablinks">All</button>
            <button className="tablinks">Potraits</button>
            <button className="tablinks">Drawings</button>
          </div>
          <div id='item-cont'>
            {item}
          </div>
    </div>
     );
  }
}
 
export default Portfolio;