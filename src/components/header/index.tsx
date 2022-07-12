import { useState } from "react";
import { Container, Logo, Nav, Link, Button, SocialMedia } from "./styled";
import {
  FaHamburger,
  FaRegTimesCircle,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

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
        <Link href="#about" whileFocus={{ scale: 1.1 }}>
          About
        </Link>
        <Link href="#contact" whileFocus={{ scale: 1.1 }}>
          CV
        </Link>
        <Link href="#experience" whileFocus={{ scale: 1.1 }}>
          Experience
        </Link>
        <Link href="#contact" whileFocus={{ scale: 1.1 }}>
          Gallery
        </Link>
        <Link href="#work" whileFocus={{ scale: 1.1 }}>
          Work
        </Link>
        <Link href="#contact" whileFocus={{ scale: 1.1 }}>
          Contact
        </Link>
      </Nav>
      <SocialMedia>
        <Link href="http://www.github.com/robsonraphael" target="_blank">
          <FaGithub size="2em"/>
        </Link>
        <Link href="#" target="_blank">
          <FaLinkedin size="2.1em"/>
        </Link>
        <Link href="#" target="_blank">
          <FaInstagram size="2.2em"/>
        </Link>
      </SocialMedia>
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
