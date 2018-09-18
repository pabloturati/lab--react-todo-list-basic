import React, { Component } from "react";
import Item from "./Item";

class ItemsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: props.taskList
    };
  }

  addNewItem(item) {
    let list = this.state.taskList;
    list.unshift(item);
    this.setState({ taskList: list });
  }

  removeItem(itemToRemove) {
    let { taskList } = this.state;
    taskList.splice(itemToRemove, 1);
    this.setState({ taskList: taskList });
  }

  render() {
    const { taskList } = this.state;

    return (
      <div className="itemsList">
        {taskList.map((task, index) => {
          return (
            <Item
              key={index}
              id={index}
              task={task}
              removeItem={itemToRemove => this.removeItem(itemToRemove)}
            />
          );
        })}
      </div>
    );
  }
}

export default ItemsList;
