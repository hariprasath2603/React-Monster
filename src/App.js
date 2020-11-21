import React, { Component } from 'react';
import './App.css';
import CardList from "./compnenet/card-list/card-list.jsx";
import SearchBox from "./compnenet/searchbox/search-box.jsx";


class App extends Component {

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users/')
    .then(response=>response.json())
    .then(user=> this.setState({ monster:user  }))

  }

  state={
    monster:[],
    searchField:''
  }


  render() { 
    console.log(this.state);

    return (  
      <div className="App">
      <h1>Monster Search</h1>
      <SearchBox searchMonster={e=>this.setState({ searchField:e.target.value  } ) } />
      <CardList monsterList={this.state.monster} searchField={this.state.searchField}/>
    </div>

    );
  }
}
 
export default App;
