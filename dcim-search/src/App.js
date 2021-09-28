import './App.css';
import React from 'react';
import SearchBar from './Components/SearchBar';
import ImageList from './ImageList';
import axios from 'axios';


class App extends React.Component {
  state = { images: [] }
  onSearchSubmit= async (term) => {
   const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 
        'Client-ID F0HmJqtvdDp5jR0KtFey6ehb_20FpUYJvDXzXTUy6f4' 
      }
    })
    this.setState({images: response.data.results })
  }
  render() {
    return (
      <div className="App">
        <SearchBar userSubmit={this.onSearchSubmit} />
        <span>Found:{this.state.images.length} images</span>
        <ImageList foundImages={this.state.images} />
      </div>
    );
  }
}

export default App;
