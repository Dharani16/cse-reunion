import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgLogo from './images/icon.jpg';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Slider from './components/Slider';
import OrganizerList from './components/OrganizerList';
import Venue from './components/Venue';
import MapViewLocation from './components/MapViewLocation';
import Footer from './components/Footer';

function App() {
  return (
    <Container>
      <Row>
        <Col xs={4} md={6}>
          <img src={imgLogo} alt="Logo not working" width="52" height="52" />
        </Col>
        <Col xs={8} md={6}>
          <Navbar bg="light" expand="lg">
            <Nav className="mr-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Organizer Info</Nav.Link>
              <Nav.Link href="#">Location</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
            </Nav>
          </Navbar>
        </Col>
      </Row>
      <Slider />
      <OrganizerList />
      <Venue />
      <MapViewLocation />
      <Footer />
    </Container>
  );
}

export default App;
