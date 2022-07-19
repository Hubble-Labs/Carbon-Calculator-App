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
            <div container mx-auto>
                <h1>
                    Hubble Labs Carbon Calculator
                </h1>
            </div>
        )
    }
}

export default Header;