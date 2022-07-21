//This file will be the root of our application
import React, { useState } from 'react';
// import axios from 'axios';
import Footer from './Footer'
import './App.css'
import { Container, Col, Row, Navbar, Nav } from 'react-bootstrap';
import Page from './Page';

function App() {
    const [count, setCount] = useState(0);

    return(
        <div className='main_container'>
            <Row>
                <Navbar bg="dark" variant="dark" className='sticky-top justify-content-end'>
                    <Container className="">
                        <Navbar.Brand href="#home">
                            <img
                                alt=''
                                src='/logo.png'
                                width={30}
                                height={30}
                            />{'   '}
                            Hubble Labs Carbon Calculator
                        </Navbar.Brand>
                        <Nav className=''>
                            <Nav.Link>Calculate</Nav.Link>
                            <Nav.Link>FAQ</Nav.Link> 
                            <Nav.Link>Credits</Nav.Link>     
                        </Nav>
                    </Container>
                </Navbar>    
            </Row>
            <Row>
                <Container className='w-75'>
                   <Page></Page> 
                </Container>
            </Row>
        </div>
    )
}

export default App;