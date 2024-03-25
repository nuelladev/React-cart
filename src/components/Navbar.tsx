import { Container, Navbar as NavbarBs, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <NavbarBs className="bg-white shadow-sm mb-3">
      <Container>
        <Nav>
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
}