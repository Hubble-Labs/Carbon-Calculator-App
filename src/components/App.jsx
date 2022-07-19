//This file will be the root of our application
import React, { useState } from 'react';
// import axios from 'axios';
import Header from './Header'
import Footer from './Footer'
import Homepage from './Homepage';
import Typeform from './Typeform';

function App() {
    const [count, setCount] = useState(0);

    return(
        <div class="h-screen">
            <Header />
            <div class="flex flex-row w-full justify-center h-full">
                <div class='flex flex-row w-5/6 h-full justify-center items-center '>
                    <h1>Calculate the Carbon footprint of...</h1>
                </div>
            </div>
        </div>
    )
}

export default App;