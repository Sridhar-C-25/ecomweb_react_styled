import React from "react";
import { Bar, Container, Links, Logo, Navbar } from "./Nav.styled";

const Nav = () => {
  const links = ["BIKES", "ABOUT US", "SERVICE & SUPPORT"];
  return (
    <Navbar>
      <Container>
        <Logo>HERO*</Logo>
        <Bar src="./src/assets/bar.png"></Bar>
        <Links>
          {links.map((link) => (
            <li key={link}>
              <a>{link}</a>
            </li>
          ))}
        </Links>
      </Container>
    </Navbar>
  );
};

export default Nav;
