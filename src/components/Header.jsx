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
            <div class="flex h-16 w-full items-center">
                <h1 class="h-8 w-1/3">
                    Hubble Labs Carbon Calculator
                </h1>
            </div>
        )
    }
}

export default Header;