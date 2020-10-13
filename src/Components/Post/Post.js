import React, { Component } from 'react';
// import axios from 'axios';
import './Post.scss';
import {connect} from 'react-redux';
import {getArt} from '../../Redux/reducer';
import Loading from '../Loading/Loading';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {Link} from 'react-router-dom';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            art: [{
                category:"null",
                description:"null",
                id:null,
                img:"null",
                title: 'null'
            }]
         }
    }
    async componentDidMount(){
        const {pathname} = this.props.location
        await this.props.getArt(pathname);
        const art = this.props.art.data[0];
     this.setState({
         art: art
     })
     }
    render() { 
        // console.log(this.state.art[0])
        return ( 
            this.props.art.length === 0 ?  <Loading /> 
            :
            <div id='post-cont'>
              <Breadcrumbs className='Breadcrumbs' aria-label="breadcrumb">
                <Link style={{"color":"black"}} to="/">
                    Home
                </Link>
                <Link style={{"color":"black"}} to="/portfolio/">
                    Portfolio
                </Link>
                <Link style={{"textDecoration":"underline"}} color="textPrimary" to="/portfolio/" aria-current="page">
                    {this.state.art.title}
                </Link>
              </Breadcrumbs>
                <div id='post-img'>
                    <img src={this.state.art.img} alt={this.state.art.title}/>
                </div>
                <div>
                    <span>Title:</span><p>{this.state.art.title}</p>
                    <span>Category:</span><p>{this.state.art.category}</p>
                    <span>Description:</span><p>{this.state.art.description}</p>
                </div>
            </div>
         );
    }
}
 
const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {getArt})(Post);