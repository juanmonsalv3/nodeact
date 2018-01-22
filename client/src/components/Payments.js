import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Nodeact-App"
        description="Pay to Win :D"
        amount={500}
        token={token => this.props.handlePayment(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <a className="waves-effect waves-light btn">Add credits</a>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
