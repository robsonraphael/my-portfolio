import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  position: static;
  z-index: 1;

  background-color: ${(props) => props.theme.colors.Mirage};
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
`;

export const Image = styled.img.attrs({
  src: "https://avatars.githubusercontent.com/u/79436128?v=4",
})`
  width: 240px;
  height: 240px;
  border-radius: 50%;
  margin-top: 2em;
  margin-bottom: 0.9em;

  // Desktop
  @media (min-width: 768px) {
    width: 260px;
    height: 260px;
  }
`;

export const Text = styled.p`
  font-size: 0.95em;
  color: white;
  line-height: 1.5em;
  letter-spacing: 0.1em;
  text-align: center;
  width: 90%;

  a {
    font-weight: 500;
    color: white;

    &:hover {
      border-bottom: 0.5px solid ${(props) => props.theme.colors.Comet};
    }
  }

  // Desktop
  @media (min-width: 768px) {
    font-size: 1em;
  }
  @media (min-width: 820px) {
    width: 50%;
  }
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3em;

  span {
    letter-spacing: 0.1em;
    font-size: 1.5em;
    font-weight: bolder;
    color: ${(props) => props.theme.colors.Mint};
  }

  // Desktop
  @media (min-width: 768px) {
    span {
      font-size: 1.6em;
    }
  }
`;
export const By = styled.div`
  display: none;

  // Desktop
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 0.2em;

    transform: rotate(90deg);
    position: absolute;
    left: -50px;
    top: 50%;

    color: ${(props) => props.theme.colors.Biloba};
    font-size: 0.8em;
    font-weight: bold;
  }
`;
export const Ani = styled(motion.div)`
  font-size: 1.3em;

  // Desktop
  @media (min-width: 768px) {
    font-size: 1.4em;
  }
`;
export const SocialMedia = styled.div`
  gap: 0.5em;
  display: flex;
  align-items: center;
  font-size: 1.3em;
  margin-top: 2.5em;

  a {
    cursor: pointer;
    transition: ease-in 0.25s;
    text-decoration: none;
    color: ${(props) => props.theme.colors.Portage};

    &:hover {
      color: ${(props) => props.theme.colors.Desert};
    }

    &:focus {
      :nth-child(1) {
        color: #fff;
      }
      :nth-child(2) {
        color: #bb201d;
      }
      :nth-child(3) {
        color: black;
      }
      :nth-child(4) {
        color: #863ab6;
      }
      :nth-child(5) {
        color: #026fab;
      }
      :nth-child(6) {
        color: #101010;
      }
      :nth-child(7) {
        color: #28a0d5;
      }
    }
  }
`;
