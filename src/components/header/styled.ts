import styled, { keyframes } from "styled-components";
import svg from "../../assets/Logo.svg";
import { motion } from "framer-motion";

export const Container = styled(motion.header)`
  width: 100%;
  height: 5em;
  padding: 0.4em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #24283b;
  position: sticky;

  @media (max-width: 768px) {
    height: 4.5em;
    padding: 0.3em;
  }
`;
export const Logo = styled.img.attrs({
  src: svg,
})`
  @media (max-width: 768px) {
    width: 65px;
    height: 55px;
  }
`;

export const Nav = styled(motion.nav)<{ active: string }>`
  display: ${(props) => props.active};
  gap: 1em;
  position: absolute;
  left: 0;
  top: 5em;
  width: 100%;
  padding: 1em;
  justify-content: space-evenly;

  a {
    padding: 0.7em;
    border-radius: 0.2em;
    color: #bb9af7;
    font-weight: bolder;
    transition: ease-in-out 0.3s;

    &:hover {
      color: #e0af68;
    }
    &:focus {
      background-color: #1a1b26;
      color: #7aa2f7;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-start;
    gap: 1.5em;
    position: static;
    padding: 0.5em;
    width: fit-content;
    font-weight: 450;

    a {
      padding: 1.6em 0.8em;
      border-radius: 0.2em;
    }
  }
`;
export const Link = styled(motion.a)`
  padding: 0.3em;
`;

export const Button = styled(motion.button)`
  border: none;
  background: none;
  font-size: 1.7em;
  display: flex;
  padding: 0.2em;
  cursor: pointer;
  color: #a9b1d6;
  @media (min-width: 768px) {
    display: none;
  }
`;
