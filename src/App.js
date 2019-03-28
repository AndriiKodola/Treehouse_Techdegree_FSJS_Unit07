import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import apiKey from './config';

//App components
import Header from './Header';
import Gallery from './Gallery';

class App extends Component {
  state = {
    topic: "owl",
    pics: [],
    loading: true
  };

  componentDidMount() {
    this.handleChangeTopic();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.topic !== prevState.topic) {
      this.handleChangeTopic();
    }
  }

  //Gets new pics from Flickr according ot the topic in state
  handleChangeTopic = (query = this.state.topic) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => {
        this.setState({
          pics: res.data.photos.photo,
          loading: false
        });
      })
      .catch(err => {
        console.log('Error occured in fetching and parding data', err);
      });
  }

  //Changes topic in state
  changeTopic = query => {
    this.setState({
      topic: query,
      loading: true
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header changeTopic={this.changeTopic} />
          {
            this.state.loading
            ? <p>Loading...</p>//If we have no respond jet
            : <Gallery pics={this.state.pics} changeTopic={this.changeTopic} />
          }
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
