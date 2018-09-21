import React, { Component } from "react";
import Item from "./Item";

class ItemsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: props.taskList
    };
  }

  render() {
    const { taskList } = this.props;

    return (
      <div className="itemsList">
        {taskList.map((task, index) => {
          return (
            <Item
              key={index}
              id={index}
              task={task}
              removeItem={itemIndex => this.props.removeItem(itemIndex)}
              changeStatus={itemIndex => this.props.changeStatus(itemIndex)}
            />
          );
        })}
      </div>
    );
  }
}

export default ItemsList;
