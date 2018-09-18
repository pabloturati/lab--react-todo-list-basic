import React, { Component } from "react";
import "./App.css";
import HeaderNormal from "./components/HeaderNormal";
import SearchBarNormal from "./components/SearchBarNormal";
import ItemsList from "./components/ItemsList";

class App extends Component {
  addItemHandler(item) {
    this.refs.list.addNewItem(item);
  }

  render() {
    return (
      <div className="App">
        <HeaderNormal />
        <SearchBarNormal addNewItem={item => this.addItemHandler(item)} />
        <ItemsList taskList={this.props.data} ref="list" />
      </div>
    );
  }
}

export default App;
