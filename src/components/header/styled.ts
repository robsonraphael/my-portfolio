import styled, { keyframes } from "styled-components";
import svg from "../../assets/Logo.svg";
import { motion } from "framer-motion";
import { Colors } from "../../style/global";

export const Container = styled.header`
  position: sticky;
  width: 100%;
  height: 5em;
  padding: 0.4em;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${Colors.Ebony};

  // Desktop
  @media (max-width: 770px) {
    height: 4.5em;
    padding: 0.3em;
  }
`;
export const Logo = styled.img.attrs({ src: svg })``;

export const Nav = styled(motion.nav)<{ active: string }>`
  display: ${(props) => props.active};
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 1.5em;

  position: absolute;
  left: 0;
  top: 4.5em;

  width: 100%;
  padding: 1em;
  background-color: ${Colors.Comet};

  a {
    width: 90%;
    padding: 0.5em;
    border-radius: 0.2em;

    font-size: 1.4em;
    color: ${Colors.Portage};
    text-align: center;
    font-weight: 600;
    transition: ease-in-out 0.3s;

    &:focus {
      color: ${Colors.Feijoa};
      background-color: ${Colors.Ebony};
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
    background: none;

    a {
      font-size: 1em;
      width: calc(fit-content + 3%);
      &:hover {
        color: ${Colors.Desert};
      }
      &:focus {
        background-color: ${Colors.Mirage};
        color: ${Colors.Feijoa};
        padding: 1.3em;
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
export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2em;
  a {
    color: ${Colors.Biloba};
    transition: ease-in 0.25s;
    &:hover{
      color: ${Colors.Desert};
    }

    &:nth-child(1){
      &:focus{
        color: #171515;
      }
    }
    &:nth-child(2){
      &:focus{
        color: #0274b3;
      }
    }
    &:nth-child(3){
      &:focus{
        color: #bf3188;
      }
    }
  }
  @media (max-width: 770px){
    display: none;
  }
`;
