import React, { useState } from "react";
import styled from "styled-components";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";

const Nav = styled.nav`
  background: #2c3e50;
  padding: 1rem 2rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;

  span {
    color: #f39c12;
  }

  &:hover {
    transform: scale(1.1); /* Slightly enlarge the logo on hover */
    transition: transform 0.3s ease; /* Smooth transition */
  }

  @media (max-width: 768px) {
    font-size: 1.2rem; /* Adjust the size for smaller screens */
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;

  @media (max-width: 768px) {
    display: ${({ isMobile }) => (isMobile ? "block" : "none")};
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background: #2c3e50;
    padding: 1rem 0;

    li {
      margin: 1rem 0;
      text-align: center;
    }
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  position: relative;
  transition: color 0.3s ease, transform 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #f39c12;
    transform: translateY(-2px); /* Slight upward hover effect */
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 3px;
    background: #f39c12;
    transform: scaleX(${({ isActive }) => (isActive ? 1 : 0)});
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1); /* Expand underline on hover */
  }
`;

const MobileIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/"); // Default active link is "/"

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link); // Set the clicked link as active
    setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <Nav>
      <Logo>
        <FaHome /> DLCF-Uniport | <span>Abuja</span>
      </Logo>
      <MobileIcon onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </MobileIcon>
      <NavLinks isMobile={isMobileMenuOpen}>
        <li>
          <NavLink
            href="/"
            isActive={activeLink === "/"}
            onClick={() => handleLinkClick("/")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            href="/about"
            isActive={activeLink === "/about"}
            onClick={() => handleLinkClick("/about")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            href="/mentorship"
            isActive={activeLink === "/mentorship"}
            onClick={() => handleLinkClick("/mentorship")}
          >
            Mentorship
          </NavLink>
        </li>
        <li>
          <NavLink
            href="/events"
            isActive={activeLink === "/events"}
            onClick={() => handleLinkClick("/events")}
          >
            Events
          </NavLink>
        </li>
        <li>
          <NavLink
            href="/prayer"
            isActive={activeLink === "/prayer"}
            onClick={() => handleLinkClick("/prayer")}
          >
            Prayer Request
          </NavLink>
        </li>
        <li>
          <NavLink
            href="/contact"
            isActive={activeLink === "/contact"}
            onClick={() => handleLinkClick("/contact")}
          >
            Contact
          </NavLink>
        </li>
      </NavLinks>
    </Nav>
  );
}

export default Navbar;
