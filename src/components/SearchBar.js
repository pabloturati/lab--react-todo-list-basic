import React, { Component } from "react";

class SearchBarNormal extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.dateRef = React.createRef();
    //this.criticalRef = React.createRef();
  }

  clickHandler = () => {
    const { value } = this.inputRef.current;
    const date = this.dateRef.current.value;
    const critical = this.refs.criticalRef.checked;

    if (this.validateInput(value, date)) return;

    const newItem = {
      name: value,
      status: false,
      date,
      critical
    };
    this.props.addNewItem(newItem);
  };

  validateInput(value, date) {
    if (value === "") {
      alert("You must name the item to add to the list");
      return true;
    } else if (date === "") {
      alert("Please set a due date");
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="searchBarNormal">
        <input type="text" ref={this.inputRef} />
        <input type="date" ref={this.dateRef} />
        <label>
          <input ref="criticalRef" className="checkbox" type="checkbox" />
          Critical?
        </label>
        <button onClick={this.clickHandler}>+</button>
      </div>
    );
  }
}

export default SearchBarNormal;
