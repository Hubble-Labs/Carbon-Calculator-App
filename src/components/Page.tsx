import React, { useState } from 'react';
import { Button, Card, Stack, Row } from 'react-bootstrap';

function Page() {
    const [count, setCount] = useState(0);

    return(
        <Card>
            <div className=''>
                <h1>Calculate the Carbon footprint of...</h1>

                <Stack gap={3} direction="horizontal">
                    <Button variant='primary'>Individual</Button>
                    <Button variant='primary'>Business</Button>
                </Stack>
            </div>
        </Card>
    )
}

export default Page;

