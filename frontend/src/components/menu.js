import React from 'react'
import {Navbar, Nav, FormControl, Container, Row, Col, Form, Button } from 'react-bootstrap'
import Search from './Search';
/*     <Form inline>
    <Search />
    </Form> */
const Menu = () => {
                            return (
                                                        <>
 
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Home</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Projects</Nav.Link>
      <Nav.Link href="#features">Publications</Nav.Link>
      <Nav.Link href="#pricing">Curriculum Vitae</Nav.Link>
    </Nav>

  </Navbar>
  <br />
</>
                                                        
                            )

}
export default Menu;