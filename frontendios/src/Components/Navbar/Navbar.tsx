import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import 'bootstrap-icons/font/bootstrap-icons.css';

const NavBar = () => {
    return (<>
  
   <Navbar expand="lg" className="bg-body-tertiary" bg="">
      <Container>
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#link">
                <i className="bi bi-apple"></i>
            </Nav.Link>
            <Nav.Link href="#link">Tienda</Nav.Link>
            <Nav.Link href="#link">Mac</Nav.Link>
            <Nav.Link href="#link">Ipads</Nav.Link>
            <Nav.Link href="#link">Iphone</Nav.Link>
            <Nav.Link href="#link">Watch</Nav.Link>
            <Nav.Link href="#link">Airpods</Nav.Link>
            <Nav.Link href="#link">Tv y casas</Nav.Link>
            <Nav.Link href="#link">Solo Apple</Nav.Link>
            <Nav.Link href="#link">Soporte</Nav.Link>
            <Nav.Link href="#link">Tienda</Nav.Link>
            <Nav.Link href="#link">
                <i className="bi bi-search"></i>
            </Nav.Link>
            <Nav.Link href="#link">
                <i className="bi bi-bag"></i>
            </Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
    </>)
  
}
export default NavBar;