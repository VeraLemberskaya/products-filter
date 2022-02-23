import React from "react";

class ProductRow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li>
        <p>{this.props.productName}</p>
        <p>{(this.props, productCost)}</p>
      </li>
    );
  }
}
