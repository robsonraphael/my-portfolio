import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.main`
  width: 100%;
  height: 100%;

  background-color: ${(props) => props.theme.colors.Mirage};
  padding: 1em;
  padding-bottom: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4em;
`;

export const Image = styled(motion.img).attrs({
  src: "https://avatars.githubusercontent.com/u/79436128?v=4",
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3 },
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

  @media (min-width: 900px) {
    width: 40%;
  }
`;

export const Title = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3 },
})`
  display: flex;
  align-items: center;
  gap: 0.3em;
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

export const Emoji = styled(motion.div).attrs({
  animate: { rotate: [-15, 30, -15, 30, 0], scale: [1.1, 1] },
  transition: { delay: 3, repeat: Infinity, repeatDelay: 5 },
})`
  font-size: 22px;

  // Desktop
  @media (min-width: 768px) {
    font-size: 25px;
  }
`;

export const Msg = styled.h1`
  letter-spacing: 0.1em;
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: bolder;
  color: ${(props) => props.theme.colors.Mint};

  // Desktop
  @media (min-width: 768px) {
    font-size: 22px;
  }
`;
