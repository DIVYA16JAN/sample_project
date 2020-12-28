import "./App.css";
import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component"

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchText : ''
    };
  }

  componentDidMount() {
    const that = this;
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(function (users) {
        that.setState({ users: users });
      });
  }

  handleChange = e => {
    this.setState({searchText:e.target.value});
  }

  render() {
      const {users, searchText} = this.state;

      const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchText.toLowerCase())
      );

    return (
      <div className="App">
        <SearchBox placeholder="Search User..." handleChange={this.handleChange} />
        <CardList className="card-container" users={filteredUsers}>
        </CardList>
      </div>
    );
  }
}

export default App;
