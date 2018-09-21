import React, { Component } from "react";

class FilterSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedClass: "btn-warning",
      allItemsClass: "btn-warning",
      completedClass: "btn-dark",
      pendingClass: "btn-dark"
    };
  }

  handleClick(selector) {
    this.setState({
      allItemsClass: selector === "all" ? "btn-warning" : "btn-dark",
      completedClass: selector === "completed" ? "btn-warning" : "btn-dark",
      pendingClass: selector === "pending" ? "btn-warning" : "btn-dark"
    });
    this.props.itemsToRender(selector);
    //Notify parent of change
  }

  render() {
    const { allItemsClass, pendingClass, completedClass } = this.state;
    return (
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          onClick={() => this.handleClick("all")}
          type="button"
          className={`btn ${allItemsClass}`}
        >
          All tasks
        </button>
        <button
          onClick={() => this.handleClick("completed")}
          type="button"
          className={`btn ${completedClass}`}
        >
          Completed
        </button>
        <button
          onClick={() => this.handleClick("pending")}
          type="button"
          className={`btn ${pendingClass}`}
        >
          Incomplete
        </button>
      </div>
    );
  }
}

export default FilterSelector;
