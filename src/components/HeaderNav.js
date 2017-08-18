import React from 'react';
import { IndexLink } from 'react-router';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { auth } from 'firebase';

const signOut = () => auth().signOut();

const HeaderNav = () => (
  <Navbar staticTop>
    <Navbar.Header>
      <Navbar.Brand>
        <IndexLink to="/">Admin</IndexLink>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to="/employees"><NavItem>Employees</NavItem></LinkContainer>
        <LinkContainer to="/map"><NavItem>Map</NavItem></LinkContainer>
      </Nav>
      <Nav pullRight>
        <NavItem onClick={signOut}>Sign Out</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default HeaderNav;
