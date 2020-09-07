import React,{useContext} from 'react'
import { Navbar,Nav,Form } from 'react-bootstrap';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Routing from '../Routing/Routing';
import {actionContext} from '../../../App';



function NavBar() {
    
    const actionContextReturns=useContext(actionContext);
    console.log(`actionContextReturns ${actionContextReturns}`);

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">WordDroids</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home" onClick={()=>{actionContextReturns.setAction('read')}}>Home</Nav.Link>
                <Nav.Link href="#create" onClick={()=>{actionContextReturns.setAction('create')}}>Create a Post</Nav.Link>
                <Nav.Link href="#update" onClick={()=>{actionContextReturns.setAction('update')}}>update a Post</Nav.Link>
                <Nav.Link href="#delete" onClick={()=>{actionContextReturns.setAction('delete')}}>delete a Post</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1" onClick={()=>{}}>Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
                <Form inline>
                    <Routing />
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;
