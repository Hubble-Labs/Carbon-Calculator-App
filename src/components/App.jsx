//This file will be the root of our application
import React from 'react';
// import axios from 'axios';
import Header from './Header'

class App extends React.Component {
    constructor() {
        super();

  }

  render () {
      return(
        <div container mx-auto >
            <Header />
            <h1>Calculate the Carbon footprint of...</h1>
        </div>
    )
  }
}

export default App;