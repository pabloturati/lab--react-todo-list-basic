import React, { Component } from "react";

class Item extends Component {
  buttonHandler() {
    this.props.removeItem(this.props.id);
  }

  render() {
    const { name } = this.props.task;
    return (
      <div className="item">
        <div>
          <input className="selectBox" type="checkbox" />
          <p>{name}</p>
        </div>
        <button onClick={() => this.buttonHandler()}>X</button>
      </div>
    );
  }
}

export default Item;
