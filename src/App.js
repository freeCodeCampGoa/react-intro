import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from 'material-ui-search-bar';
import YTSearch from 'youtube-api-search';

import Content from './components/Content';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: null
    }

    this.searchYoutubeWithTheTermRequested = this.searchYoutubeWithTheTermRequested.bind(this);

  }


    /**
   * This searches the youtube api for the search term you type in the search bar
   * @param {*} searchTerm 
   */
  
  searchYoutubeWithTheTermRequested(searchTerm) {
    const API_KEY = "Use your API Key";

    YTSearch({ key: API_KEY, term: searchTerm }, videos => {

      this.setState({
        videos: videos
      });

      console.log(videos);
    });
  }


  render() {
    return (
      <div className="App">
      <SearchBar

      onChange={(searchTerm) => this.searchYoutubeWithTheTermRequested(searchTerm)}
      onRequestSearch={(searchTerm) => this.searchYoutubeWithTheTermRequested(searchTerm)}


      style={{
        margin: '0 auto',
        maxWidth: '90%'
      }}
    />

    {this.state.videos && this.state.videos.map((video, index) => <Content  video={video} key={index} />)}

      </div>
    );
  }
}

export default App;
