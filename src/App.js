import React from "react";

import IstanbulList from "./components/Istanbul";

import IzmirList from "./components/Izmir";
import { Routes, Route, Link } from "react-router-dom";
import { Container, Nav, NavItem, NavLink, Row } from "reactstrap";

export default function App() {
  return (
    <Container>
      <Nav className="bg-primary">
        <NavItem>
          <Link className="nav-link" to="/">
            Istanbul
          </Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="izmir">Izmir</Link>
        </NavItem>
      </Nav>
      <Row>
        <Routes>
          <Route exact path="/" element={<IstanbulList />}></Route>
          <Route exact path="/izmir" element={<IzmirList></IzmirList>}></Route>
        </Routes>
      </Row>
    </Container>
  );
}
