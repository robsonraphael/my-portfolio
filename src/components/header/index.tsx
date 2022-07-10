import { useState } from "react";
import { Container, Logo, Nav, Link, Button } from "./styled";
import { FaHamburger, FaRegTimesCircle } from "react-icons/fa";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Container>
      <Logo href="/">Hey</Logo>
      <Nav active={isActive ? "flex" : "none"}>
        <Link href="#about">About</Link>
        <Link href="#experience">Experience</Link>
        <Link href="#work">Work</Link>
        <Link href="#contact">Contact</Link>
      </Nav>
      <Button onClick={() => setIsActive(!isActive)}>
        <FaHamburger display={isActive ? "none" : "flex"} />
        <FaRegTimesCircle display={!isActive ? "none" : "flex"} />
      </Button>
    </Container>
  );
};
