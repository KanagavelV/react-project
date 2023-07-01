import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
import logo from './images/medical-logo-png-5.png';
import Announcement from './Announcement';
import RoutePage from './Routing/RoutePage';
import {Link, Outlet, BrowserRouter} from 'react-router-dom';

function App() {
    let Announce = ["Welcome to our Health care....", "A new update is coming along the way. Stay Tuned...."];
    return (
        <BrowserRouter>
            <div className="App">
                <header>
                    <Navbar bg="light" data-bs-theme="light" expand="md">
                        <Container>
                            <Navbar.Brand href="#home"><img src={logo} width="100rem" alt="logo"/></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto nav-font" variant="tabs" fill>
                                    <Nav.Link as={Link} to="/">Home
                                    </Nav.Link >
                                    <Nav.Link as={Link} to="/protecting">Protecting
                                    </Nav.Link >
                                    <NavDropdown title="Servicing" id="navbarScrollingDropdown">
                                        <NavDropdown.Item as={Link} to="/action/3.1">Checkup</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/action/3.2">Consultation</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/action/3.3">Medicine Delivery</NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item as={Link} to="/action/3.4">Network Hospitals</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link as={Link} to="/blogs">Blogs
                                    </Nav.Link >
                                    <Nav.Link as={Link} to="/contact">Contact
                                    </Nav.Link >
                                </Nav>
                                <Nav className='justify-content-end'>
                                    <Nav.Link as={Link} to="/login">Log in 
                                    </Nav.Link >
                                    <Nav.Link as={Link} to="/Sign in">Sign in
                                    </Nav.Link >
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </header>
                <div className="App-header">
                    <Announcement announce={Announce}></Announcement>
                </div>
                <RoutePage/>
                <Outlet/>
            </div>
        </BrowserRouter>
    );
}

export default App;
