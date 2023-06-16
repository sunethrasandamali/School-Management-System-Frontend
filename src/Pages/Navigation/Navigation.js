import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { FaUserCircle, FaBars, FaHome, FaCaretRight } from 'react-icons/fa';
import './Navigation.scss';
import { useLocation } from 'react-router-dom';

const Navigation = () => {

  const location = useLocation();
  const path = location.pathname.substring(1); // Remove the leading slash
  const relatedPageName = path.charAt(0).toUpperCase() + path.slice(1).toLowerCase(); // Capitalize the first letter and convert the rest to lowercase

  return (
    <div>
      <Navbar expand="md" className="navigation">

        <FaBars className="drawer-icon" />
        <NavbarBrand href="/">School Management System</NavbarBrand>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/student">Student</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/teacher">Teacher</NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink href="/subject">Subject</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/classroom">Classroom</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="/profile">
              <FaUserCircle className="profile-icon" />
            </NavLink>
          </NavItem>

        </Nav>
      </Navbar>

      {/* Add more related navigation links here */}


      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">
          <div className="related-page">
            <FaHome className="home-icon" />
            <FaCaretRight className="caret-icon" />
            <span className="page-name">{relatedPageName}</span>
          </div>
        </NavbarBrand>
      </Navbar>
    </div>


  );
};

export default Navigation;
