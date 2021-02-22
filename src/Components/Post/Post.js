import React, { Component } from 'react';
import Footer from '../Footer/Footer';
// import Button from '@material-ui/core/Button';
import './Post.scss';
import {connect} from 'react-redux';
import {getArt} from '../../Redux/reducer';
import Loading from '../Loading/Loading';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {Link} from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js"; 
const stripePromise = loadStripe("pk_test_51HDK6aBOhiVRiJQqrDGfJmiJczdQ5SYGnGjqWC2uqRrsU6Osl8TeKs2fOnEzqaXivlUCwx7ZmrdgY2HxfYe9V84H00uKnMAupE");


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
         this.handleClick = this.handleClick.bind(this);
    }
    async componentDidMount(){
        const {pathname} = this.props.location
        await this.props.getArt(pathname);
     this.setState({
         art: this.props.art.data[0]
     })
     }
     async handleClick(event){
        const stripe = await stripePromise;
        const {title, price, img} = this.state.art
        const response = await fetch("/create-session", {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({title, price, img})
        });
        const session = await response.json();
        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });
        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `result.error.message`.
        }
      };
    render() { 
        // console.log(this.state.art.title)
        return ( 
            this.props.art.length === 0 ?  <Loading /> 
            :
            <div id='post-cont'>
              <Breadcrumbs className='Breadcrumbs' aria-label="breadcrumb">
                <Link style={{"color":"white"}} to="/">
                    Home
                </Link>
                <Link style={{"color":"white"}} to="/portfolio/">
                    Portfolio
                </Link>
                <Link style={{"textDecoration":"underline"}} style={{"color":"cadetblue", "fontSize":"24px", "textDecoration":"none"}} to="/portfolio/" aria-current="page">
                    {this.props.art.data[0].title}
                </Link>
              </Breadcrumbs>
              <div class="card">
                <img src={this.props.art.data[0].img} alt={this.props.art.data[0].title} style={{"width":"100%"}} />
                <h1>{this.props.art.data[0].title}</h1>
                <p className="price">${this.props.art.data[0].price}.00</p>
                <p>{this.props.art.data[0].description}</p>
                <p>
                    <button id="checkout-button" role="link" variant="contained" onClick={this.handleClick}>
                        Buy Now
                    </button>
                </p>
            </div>
            <Footer />
            </div>
         );
    }
}
 
const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {getArt})(Post);