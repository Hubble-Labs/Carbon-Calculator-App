//This file will be the root of our application
import React, { useState } from 'react';
// import axios from 'axios';
import Header from './Header'
import Footer from './Footer'
import Homepage from './Homepage';
import Typeform from './Typeform';
import { Container, Col, Row, Navbar, Nav, Stack, Button } from 'react-bootstrap';

function App() {
    const [count, setCount] = useState(0);

    return(
        <Container>
            <Row>
                <Navbar>
                    <Container>
                        <Navbar.Brand href="">Hubble Labs Carbon Calculator</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                          <Nav className="me-auto">
                            <Nav.Link href="#home">Calculate</Nav.Link>
                            <Nav.Link href="#faq">FAQ</Nav.Link>
                            <Nav.Link href="#credits">Credits</Nav.Link>
                          </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>    
            </Row>
            <Row>
                <Col>
                    <h1 >Calculate the Carbon footprint of...</h1>
                    <Stack gap={4} direction="horizontal" className="align-items-center justify-content-center">
                        <Button>
                            Individual
                        </Button>
                        <Button>
                            Business
                        </Button>
                    </Stack>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default App;