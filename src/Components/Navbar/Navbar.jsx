import { Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import React from "react";
import "./Navbar.css";
import { useRecoilState } from "recoil";
import { authData } from "../../States/Atoms/auth";
import LogOutButton from "../LogOutButton/LogOutButton";

export default function NavBar() {
  const [auth] = useRecoilState(authData);
  return (
    <div>
      <Navbar expand="lg" className="shadow-sm p-3 mb-5 bg-white rounded">
        <Container>
          <Navbar.Brand href="#home">Aqua Family</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex justify-content-between w-100 align-items-center">
              {auth.isAuth ? (
                <>
                              <div className="d-flex gap-3">
                <NavLink
                  to="/"
                  className="nav__link text-decoration-none text-black"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/shop"
                  className="nav__link text-decoration-none text-black"
                >
                  Shop
                </NavLink>
                <NavLink
                  to="/cart"
                  className="nav__link text-decoration-none text-black"
                >
                  Cart
                </NavLink>
                <NavLink
                  to="/contact"
                  className="nav__link text-decoration-none text-black"
                >
                  Contact
                </NavLink>
              </div>
                <LogOutButton />
                </>
              ) : (
                <div className="d-flex gap-3">
                  <NavLink
                    to="/login"
                    className="nav__link text-decoration-none text-black"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="nav__link text-decoration-none text-black"
                  >
                    Register
                  </NavLink>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
