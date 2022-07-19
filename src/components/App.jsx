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
            <div class="flex flex-row w-full justify-center">
              <Header />
                <div class='w-5/6'>
                  <h1>Calculate the Carbon footprint of...</h1>
                </div>
            </div>
        </div>
    )
  }
}

export default App;