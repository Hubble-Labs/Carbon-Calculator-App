//This file will be the root of our application
import React from 'react';
import axios from 'axios';

class Form extends React.Component {
    constructor() {
        super();

        this.state = {
            category: 'home',
            gasCar: 0,
            hybridCar: 0,
            electricCar: 0,
            motorbike: 0,
            bus: 0,
            flight: 0,
            firstMeal: 0,
            secondMeal: 0,
            phone: 0,
            tablet: 0,
            desktop: 0,
            streaming: 0,
            otherInternet: 0
        }
    }

    render() {
        if (this.state.category == 'home') {
            return (

            );
        }
        else if (this.state.category == 'transportation') {
            return (

        );
        } else if (this.state.category == 'food') {
            return (

        );
        } else if (this.state.category == 'electronics') {
            return (

        );
        } else if (this.state.category == 'internet') {
            return (

        );
        } else {
            return (

        );
        }
    }
}

export default Form;