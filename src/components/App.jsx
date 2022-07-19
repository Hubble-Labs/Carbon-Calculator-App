//This file will be the root of our application
import React, { useState } from 'react';
// import axios from 'axios';
import Header from './Header'
import Typeform from './typeform';

function App() {
  const [count, setCount] = useState(0);

  return(
    <div container mx-auto >
      <div class="flex flex-row w-full justify-center">
        <Header />
      </div>
      <div class="flex flex-row w-full justify-center h-screen">
        <div class='w-5/6'>
          <h1>Calculate the Carbon footprint of...</h1>
        </div>
      </div>
      <Typeform />
    </div>
  )
}

export default App;