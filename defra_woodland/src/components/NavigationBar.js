import { Image, Nav, NavDropdown, Navbar } from "react-bootstrap";

const NavigationBar = () => {
    return (
        <Navbar>
            <Navbar.Brand>
                <Image src="/fc.png" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end ml-auto container-fluid nav-links">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Profile</Nav.Link>
                    <NavDropdown title="Options" id="basic-nav-dropdown" className="nav-links">
                        <NavDropdown.Item href="#action/3.1">Switch user</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Logout
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Report issue</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Docs
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar;