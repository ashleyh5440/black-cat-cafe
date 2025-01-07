import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

import './style.css';

function Navigation({ routes }) {
    return (
      <section id="nav-bar">
          <Row>
            <Col id="nav-left"><Nav.Link href="/"><div id="home-img-box"><img src= "/images/home-name.png" /></div></Nav.Link></Col>
            <Col id="nav-right">
              <Nav className="me-auto">
                <Nav.Link href="about">About</Nav.Link>
                <Nav.Link href="menu">Menu</Nav.Link>
              </Nav>
            </Col>
          </Row>
      </section>
    )
}

export default Navigation;