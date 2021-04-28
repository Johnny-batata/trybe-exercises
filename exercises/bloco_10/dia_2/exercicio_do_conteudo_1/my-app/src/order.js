// arquivo Order.js
import React from 'react';

class Order extends React.Component {
  render() {

    return (
      <div className="order">
        <p> {this.props.user} bought {this.props.product} for {this.props.price} {this.props.priceValue} </p>
      </div>
    );
  }
}

export default Order;