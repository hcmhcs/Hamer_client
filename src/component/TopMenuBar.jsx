import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function TopMenuBar({ loggedIn }) {
  const movePage = () => {
    window.location.href = "/";
  };
  if (loggedIn) {
    return (
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <img
            className="Hamerlogo"
            alt="logo"
            src="/img/HamerLogo.png"
            style={{ width: 150 }}
            onClick={movePage}
            href="/"
          />
          {/* <Navbar.Brand href="#">HaMer</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/join">Join</Nav.Link>
              <NavDropdown title="Other" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/notice">Notice</NavDropdown.Item>
                <NavDropdown.Item href="/freeboard">FreeBoard</NavDropdown.Item>
                <NavDropdown.Item href="/history">해머 역사</NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="/admin">Admin</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/mypage">Mypage</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  } else {
    return (
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <img
            className="Hamerlogo"
            alt="logo"
            src="img/HamerLogo.png"
            style={{ width: 150 }}
            onClick={movePage}
            href="/"
          />
          {/* <Navbar.Brand href="#">HaMer</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/join">Join</Nav.Link>
              <NavDropdown title="Other" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/notice">Notice</NavDropdown.Item>
                <NavDropdown.Item href="/freeboard">FreeBoard</NavDropdown.Item>
                <NavDropdown.Item href="/history">해머 역사</NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item href="/admin">Admin</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/mypage" disabled>
                Mypage
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default TopMenuBar;
