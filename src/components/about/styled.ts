import styled from "styled-components";
import { Colors } from "../../style/global";

export const Container = styled.main`
  background-color: ${Colors.Mirage};
  display: flex;
  flex-direction: column;
  gap: 2em;
  width: 100%;
  height: 100%;
  padding: 2em;

  i {
    color: white;
    font-size: 0.9em;
    font-weight: lighter;
  }
  div {
    strong {
      display: flex;
      color: white;
      font-size: 1em;

      @media (min-width: 768px) {
        font-size: 1.1em;
      }
    }
  }
`;
export const Title = styled.h1`
  color: white;
  font-size: 1.2em;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 1.3em;
  }
`;
export const Text = styled.p`
  color: #cfc9c2;
  width: 90%;
  font-size: 0.9em;

  strong {
    display: flex;
    color: white;
    font-size: 1.1em;

    @media (min-width: 768px) {
      font-size: 1.11em;
    }
  }

  @media (min-width: 768px) {
    font-size: 1em;
    width: 85%;
  }

  a {
    color: white;
    font-weight: bolder;
  }
`;
export const Wrap = styled.div`
  display: flex;
  gap: 0.3em;
  padding: 0.4em;

  img {
    width: 30px;
    height: 30px;

    @media (min-width: 768px) {
      width: 40px;
      height: 40px;
    }
  }
`;
export const By = styled.aside`
  display: flex;
  align-items: center;
  gap: 0.2em;

  transform: rotate(90deg);
  position: absolute;
  right: -50px;
  top: 50%;

  color: ${Colors.Biloba};
  font-size: 0.8em;
  font-weight: bold;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const SocialMedia = styled.div`
  gap: 0.5em;
  display: flex;
  align-items: center;
  font-size: 1.3em;
  margin: 2.5em auto;

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
  @media (min-width: 768px) {
    font-size: 1.4em;
  }
`;
