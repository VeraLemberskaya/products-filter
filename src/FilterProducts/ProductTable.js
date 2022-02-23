import React from "react";
import ProductCategoryList from "./ProductCategoryList";

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="setOfList">
        <ul>
          <ProductCategoryList products={this.props.sportProducts} />
          <ProductCategoryList products={this.props.electroProducts} />
        </ul>
      </div>
    );
  }
}
