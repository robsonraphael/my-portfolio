import styled from "styled-components";
import { motion } from "framer-motion";
import { Colors } from "../../style/global";

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  background-color: ${Colors.Mirage};
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
`;

export const Image = styled.img.attrs({
  src: "https://avatars.githubusercontent.com/u/79436128?v=4",
})`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin-top: 1em;
  margin-bottom: 0.9em;

  @media (min-width: 768px) {
    width: 270px;
    height: 270px;
  }
`;

export const Text = styled.p`
  font-size: 1em;
  color: white;
  line-height: 1.5em;
  letter-spacing: 0.1em;

  a {
    font-weight: 500;
    color: white;

    &:hover {
      border-bottom: 0.5px solid ${Colors.Comet};
    }
  }

  @media (min-width: 768px) {
    width: 500px;
    font-size: 1.1em;
  }
`;
export const Title = styled.h1`
  color: white;
  font-size: 1.4em;
  letter-spacing: 0.1em;
  display: flex;
  gap: 0.3em;
  color: ${Colors.Mint};

  @media (min-width: 768px){
    font-size: 1.5em;
  }
`;
export const By = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2em;

  transform: rotate(90deg);
  position: absolute;
  left: -50px;
  top: 50%;

  color: ${Colors.Biloba};
  font-size: 0.8em;
  font-weight: bold;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const Ani = styled(motion.div)``;
export const SocialMedia = styled.div`
  gap: 0.5em;
  display: flex;
  align-items: center;
  font-size: 1.2em;
  margin-top: 3em;

  a {
    cursor: pointer;
    transition: ease-in 0.25s;
    text-decoration: none;
    color: ${Colors.Portage};
    &:hover {
      color: ${Colors.Desert};
    }

    &:focus {
      :nth-child(1) {
        color: #fff;
      }
      :nth-child(2) {
        color: #bb201d;
      }
      :nth-child(3){
        color: black;
      }
      :nth-child(4){
        color: #863ab6;
      }
      :nth-child(5){
        color: #026fab;
      }
      :nth-child(6){
        color: #101010;
      }
      :nth-child(7){
        color: #28a0d5;
      }
    }
  }
`;
