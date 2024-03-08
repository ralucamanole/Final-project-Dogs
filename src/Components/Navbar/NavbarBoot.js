import "./NavbarBoot.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../Images/logohappypaws.png";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-transparent nav">
      <Container fluid>
        <Navbar.Brand href="/">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto my-2 my-lg-0 nav justify-content-end"
            style={{ maxHeight: "100px", flex: "auto" }}
            navbarScroll
          >
            <Nav.Link href="/" className="custom-link">Cine suntem noi</Nav.Link>
            <Nav.Link href="/about" className="custom-link">Catei adoptabili</Nav.Link>
            <Nav.Link href="/DogApi" className="custom-link">
              Afla mai multe despre rasa catelului tau
            </Nav.Link>
            <Nav.Link href="/contact" className="custom-link">Familia Noastra</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
