import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    //тут сделала по-другому
    // this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    // this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }

  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={(e) => this.handleFilterTextChange(e)}
        />
        <p>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => this.handleInStockChange(e)}
          />{" "}
          Only show products in stock
        </p>
      </form>
    );
  }
}

export default SearchBar;
