//This file will be the root of our application
import React, { useState } from 'react';
// import axios from 'axios';
import Header from './Header'
import Typeform from './Typeform';

function App() {
  const [count, setCount] = useState(0);

  return(
    <div container mx-auto >
      <Header />
      <div class="flex flex-row w-full justify-center h-screen">
        <div class='w-5/6 justify-center'>
          <h1>Calculate the Carbon footprint of...</h1>
        </div>
      </div>
      <Typeform />
    </div>
  )
}

export default App;