import React, { setState } from 'react';

function Homepage() {
    const [count, setCount] = setState(0);

    return(
        <div class="flex flex-row w-full justify-center h-full">
            <div class='flex flex-row w-5/6 h-full justify-center items-center '>
                <h1>Calculate the Carbon footprint of...</h1>
            </div>
        </div>
    )
}

export default Homepage;

