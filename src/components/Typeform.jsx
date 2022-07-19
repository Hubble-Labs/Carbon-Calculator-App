//sample typeform

import { Widget } from '@typeform/embed-react'
import React from 'react';

class Typeform extends React.Component {
    constructor() {
        super();

}

  render() {
        return (
            <Widget id="yzm4odIh" style={{ width: '50%'}} className="my-form" />
        )
    }
}

export default Typeform;