import { useState } from "react";
import { Container, Logo, Nav, Link, Button } from "./styled";
import { FaHamburger, FaRegTimesCircle } from "react-icons/fa";

export const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const slide = {
    open: { opacity: [0, 1], x: [-400, 0] },
    closed: { opacity: 1, x: 0 },
  };

  return (
    <Container>
      <Link href="/">
        <Logo />
      </Link>
      <Nav
        active={isActive ? "flex" : "none"}
        animate={isActive ? "open" : "closed"}
        variants={slide}
      >
        <Link href="#about">About</Link>
        <Link href="#contact">CV</Link>
        <Link href="#experience">Experience</Link>
        <Link href="#contact">Gallery</Link>
        <Link href="#work">Work</Link>
        <Link href="#contact">Contact</Link>
      </Nav>
      <Button
        onClick={() => setIsActive(!isActive)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaHamburger display={isActive ? "none" : "flex"} />
        <FaRegTimesCircle display={!isActive ? "none" : "flex"} />
      </Button>
    </Container>
  );
};
