import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ItemsList from "./components/ItemsList";
import FilterSelector from "./components/FilterSelector";

class App extends Component {
  constructor(props) {
    super(props);
    this.allItems = props.initialData;
    this.state = {
      items: props.initialData,
      selector: "all"
    };
  }

  addItemHandler(item) {
    this.allItems = [...this.allItems, item];
    this.setState({
      items: this.allItems
    });
  }

  removeItemHandler(itemIndex) {
    let { items } = this.state;
    items.splice(itemIndex, 1);
    this.setState({ items });
  }

  changeStatus(itemIndex) {
    const { items } = this.state;
    items[itemIndex].status = !items[itemIndex].status;
    this.setState({ items });
    this.changeItemsToRender(this.state.selector);
  }

  changeItemsToRender(selector) {
    const items =
      selector === "all" ? this.allItems : this.filterItems(selector);
    this.setState({ items, selector });
  }

  filterItems(selector) {
    return this.allItems.filter(item => {
      return selector === "completed" ? item.status : !item.status;
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar addNewItem={item => this.addItemHandler(item)} />
        <FilterSelector
          itemsToRender={selector => this.changeItemsToRender(selector)}
        />
        <ItemsList
          taskList={this.state.items}
          removeItem={itemIndex => this.removeItemHandler(itemIndex)}
          changeStatus={itemIndex => this.changeStatus(itemIndex)}
        />
      </div>
    );
  }
}

export default App;
