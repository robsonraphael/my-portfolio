import styled from "styled-components";
import svg from "../../assets/Logo.svg";
import { motion } from "framer-motion";
import { Colors } from "../../style/global";

export const Container = styled.header`
  position: sticky;
  width: 100%;
  height: 6em;
  padding: 0.4em;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${Colors.Ebony};

  // Desktop
  @media (max-width: 770px) {
    height: 5em;
    padding: 0.3em;
  }
`;
export const Logo = styled.img.attrs({ src: svg })`
  width: 60px;
  height: 60px;
  @media (min-width: 768px){
    width: 65px;
    height: 65px;
  }
`;

export const Nav = styled(motion.nav)<{ active: string }>`
  display: ${(props) => props.active};
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 1.5em;

  position: absolute;
  left: 0;
  top: 5.1em;

  width: 100%;
  height: 100vh;
  padding: 1em;
  background-color: ${Colors.Ebony};

  a {
    width: 90%;
    padding: 1em 0.5em;
    border-radius: 0.2em;

    font-size: 1.3em;
    color: ${Colors.Portage};
    text-align: center;
    font-weight: 600;
    transition: ease-in-out 0.3s;

    &:focus {
      color: ${Colors.Feijoa};
      background-color: ${Colors.Mirage};
    }
  }

  // Desktop
  @media (min-width: 770px) {
    position: initial;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    padding: 0.5em;
    width: fit-content;
    height: fit-content;
    background: none;

    a {
      font-size: 1em;
      width: calc(fit-content + 3%);
      &:hover {
        color: ${Colors.Desert};
      }
      &:focus {
        color: ${Colors.Feijoa};
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
  font-size: 1.7em;
  display: flex;
  padding: 0.2em;
  cursor: pointer;
  color: ${Colors.Biloba};
  @media (min-width: 770px) {
    display: none;
  }
`;
