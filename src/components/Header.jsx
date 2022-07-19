//This file will be the root of our application
import React from 'react';
// eslint-disable-next-line
//import axios from 'axios';

class Header extends React.Component {
    constructor() {
        super();

}

  render() {
        return (
            <div class="flex flex-row h-16 w-full justify-center">
                <div class="flex h-full justify-around w-5/6">
                    <h1 class="h-8 w-1/3">
                        Hubble Labs Carbon Calculator
                    </h1>
                    <div className='grid h-8 w-1/2 gap-12 grid-cols-3 grid-rows-1 justify-items-center'>
                        <a>Calculate</a>
                        <a>How it Works</a>
                        <a>Credit</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;