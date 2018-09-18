import React, { Component } from "react";

class SearchBarNormal extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  clickHandler = () => {
    const { value } = this.inputRef.current;
    const newItem = {
      name: value,
      status: false
    };
    this.props.addNewItem(newItem);
  };

  render() {
    return (
      <div className="searchBarNormal">
        <input type="text" ref={this.inputRef} />
        <button onClick={this.clickHandler}>+</button>
      </div>
    );
  }
}

export default SearchBarNormal;
