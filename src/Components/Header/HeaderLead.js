import React from "react";
import { Navbar, Container } from "react-bootstrap";

export default function HeaderLead({ logo }) {
  return (
    <>
      <Navbar bg="ligth" data-bs-theme="ligth">
        <Container>
          <img
            className="img-fluid"
            src={logo}
            alt={logo}
            style={{ height: "100px" }}
          />
        </Container>
      </Navbar>
    </>
  );
}
