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
  gap: 0.4em;
`;

export const Image = styled.img.attrs({
  src: "https://avatars.githubusercontent.com/u/79436128?v=4",
})`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-top: 2em;
  margin-bottom: 0.9em;

  // Desktop
  @media (min-width: 768px) {
    margin-top: 1em;
    width: 250px;
    height: 250px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: white;
  width: 80%;
  text-align: left;
  margin-top: 5px;

  a {
    font-weight: 500;
    color: white;

    &:hover {
      border-bottom: 0.5px solid ${(props) => props.theme.colors.Comet};
    }
  }

  // Desktop
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 30px;
    width: 62%;
  }

  @media (min-width: 900px){
    width: 40%;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3em;

  span {
    letter-spacing: 0.1em;
    font-size: 20px;
    letter-spacing: 2px;
    font-weight: bolder;
    color: ${(props) => props.theme.colors.Mint};
  }

  // Desktop
  @media (min-width: 768px) {
    span {
      font-size: 22px;
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

    transform: rotate(-90deg);
    position: absolute;
    left: -45px;
    top: 50%;

    color: ${(props) => props.theme.colors.Biloba};
    font-size: 0.7em;
    font-weight: bold;
    font-style: italic;
  }
`;
export const Ani = styled(motion.div)`
  font-size: 22px;

  // Desktop
  @media (min-width: 768px) {
    font-size: 25px;
  }
`;
export const SocialMedia = styled.div`
  gap: 0.5em;
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-top: 2.5em;

  a {
    cursor: pointer;
    transition: ease-in 0.25s;
    text-decoration: none;
    color: ${(props) => props.theme.colors.Portage};

    @media (min-width: 768px) {
      &:hover {
        color: ${(props) => props.theme.colors.Desert};
      }
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

  @media (min-width: 768px){
    font-size: 20px;
    gap: 0.6em;
  }
`;
