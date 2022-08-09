import { useState, useEffect } from "react";
// Styled components
import { Container, Logo, Nav, Link, Button } from "./styled";
// Icons
import { FaHamburger, FaRegTimesCircle } from "react-icons/fa";

export const Header : React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const slide: {} = {
    open: { opacity: [0, 1], x: [-400, 0] },
    closed: { opacity: 1, x: 0 },
  };

  useEffect(() => {
    const url: string = document.URL;
    let parse: string = url.split("/")[3];
    switch (parse) {
      case "about":
        let about = document.querySelector('a[href="about"]') as HTMLElement;
        about.style.color = "#9ECE6A";
        break;
      case "experience":
        let experience = document.querySelector(
          'a[href="experience"]'
        ) as HTMLElement;
        experience.style.color = "#9ECE6A";
        break;
    }
  });

  return (
    <Container>
      <Link href="/">
        <Logo />
      </Link>
      <Nav
        active={isActive ? "flex" : "none"}
        animate={isActive ? "open" : "closed"}
        variants={slide}
        id="nav"
      >
        <Link href="about">About</Link>
        <Link href="experience">Experience</Link>
        <Link href="/contact">Gallery</Link>
        <Link href="/work">Work</Link>
      </Nav>
      <Button onClick={() => setIsActive(!isActive)} whileTap={{ scale: 0.9 }}>
        <FaHamburger display={isActive ? "none" : "flex"} />
        <FaRegTimesCircle display={!isActive ? "none" : "flex"} />
      </Button>
    </Container>
  );
};
