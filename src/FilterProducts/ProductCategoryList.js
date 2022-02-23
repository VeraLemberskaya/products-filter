import React from "react";
import ProductRow from "./ProductRow";

class ProductCategoryList extends React.Component {
  constructor(props) {
    super(props);
  }

  listItems() {
    const products = this.props.products;
    const listItems = products.map((product) => {
      <ProductRow productName={product.name} productCost={product.cost} />;
    });
  }

  render() {
    return (
      <div>
        <h2>{this.props.category}</h2>
        <ul>{listItems()}</ul>
      </div>
    );
  }
}
