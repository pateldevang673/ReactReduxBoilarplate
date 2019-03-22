import React, { Component } from 'react';
import {Provider} from 'react-redux';
import Post from './componant/post';
import Postform from './componant/postForm';



import store from './store';
class App extends Component {
  render() {
    return (
      <Provider store ={store}>
      <div className="App">
         <Postform/>
        <Post/>
        
      </div>
      </Provider>
    );
  }
}

export default App;
