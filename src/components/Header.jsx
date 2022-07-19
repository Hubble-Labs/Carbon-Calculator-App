//This file will be the root of our application
import React from 'react';
// eslint-disable-next-line
// import axios from 'axios';

class Header extends React.Component {
    constructor() {
        super();

}

  render() {
        return (
            <div class="flex flex-row h-16 w-full justify-center bg-iris-blue text-[#FFFFFF]">
                <div class="flex flex-row h-8 justify-between w-5/6 self-center">
                    <h1 class="w-1/3 self-center font-bold">
                        Hubble Labs Carbon Calculator
                    </h1>
                    <div className='flex flex-row justify-evenly w-1/2 self-center'>
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