import styled from "styled-components";
import svg from "../../assets/Logo.svg";
import { motion } from "framer-motion";

export const Container = styled.header`
  height: 5em;
  padding: 0.3em;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.Ebony};

  // Desktop
  @media (min-width: 770px) {
    width: 100%;
    height: 6em;
    padding: 0.4em;
  }
`;
export const Logo = styled.img.attrs({ src: svg })`
  width: 60px;
  height: 60px;

  // Desktop
  @media (min-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;

export const Nav = styled(motion.nav)<{ active: string }>`
  display: ${(props) => props.active};
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 1em;

  position: absolute;
  top: 12%;
  left: 0;
  z-index: 99;

  width: 100%;
  height: 100vh;
  padding: 1em;
  background-color: ${(props) => props.theme.colors.Ebony};

  a {
    width: 90%;
    padding: 1em 0.5em;
    border-radius: 0.2em;

    font-size: 20px;
    color: ${(props) => props.theme.colors.Portage};
    text-align: center;
    font-weight: 600;
    transition: ease-in-out 0.3s;

    &:focus {
      color: ${(props) => props.theme.colors.Feijoa};
      background-color: ${(props) => props.theme.colors.Mirage};
    }
  }

  // Desktop
  @media (min-width: 770px) {
    position: static;
    z-index: 1;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    padding: 0.5em;
    width: fit-content;
    height: fit-content;
    background: none;

    a {
      font-size: 16px;
      width: calc(fit-content + 3%);

      &:hover {
        color: ${(props) => props.theme.colors.Desert};
      }

      &:focus {
        color: ${(props) => props.theme.colors.Feijoa};
        background: none;
      }
    }
  }
`;
export const Link = styled(motion.a)`
  padding: 0.3em;
`;

export const Button = styled(motion.button)`
  border: none;
  background: none;

  font-size: 30px;
  color: ${(props) => props.theme.colors.Biloba};

  display: flex;
  padding: 0.2em;
  cursor: pointer;

  // Desktop
  @media (min-width: 770px) {
    display: none;
  }
`;
