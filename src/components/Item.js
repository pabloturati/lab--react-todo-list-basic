import React, { Component } from "react";

class Item extends Component {
  buttonHandler() {
    this.props.removeItem(this.props.id);
  }

  timeComparer = date => {
    return new Date(date) > Date.now() ? true : false;
  };

  render() {
    const { name, date, critical } = this.props.task;
    const criticalClass = critical ? "critical" : "";
    const pastClass = this.timeComparer(date) ? "" : "past";

    return (
      <div className={`item ${criticalClass} ${pastClass}`}>
        <div>
          <input className="selectBox" type="checkbox" />
          <p>{name}</p>
          <p>{date}</p>
        </div>
        <button onClick={() => this.buttonHandler()}>X</button>
      </div>
    );
  }
}

export default Item;
