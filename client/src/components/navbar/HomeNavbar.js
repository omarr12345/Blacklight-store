import "./edit.css";
import { Navbar, Container } from "react-bootstrap";

import { Link } from "react-router-dom";

function HomeNavbar() {
  return (
    <div className="">
      <Navbar className="nav" expand="lg">
        <Container fluid>
          <Link to="/" className="text-decoration-none nav-link">
            <img
              className="logo2"
              src={require("../../Assets/logo2.jpg")}
              alt="Logo"
            />
          </Link>
        </Container>
      </Navbar>
    </div>
  );
}

export default HomeNavbar;
