import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from 'material-ui-search-bar';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: null
    }
  }

  render() {
    return (
      <div className="App">
      <SearchBar
      onChange={() => console.log('onChange')}
      onRequestSearch={() => console.log('onRequestSearch')}
      style={{
        margin: '0 auto',
        maxWidth: '90%'
      }}
    />
      </div>
    );
  }
}

export default App;
