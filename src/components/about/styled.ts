import styled from "styled-components";

export const Container = styled.main`
  background-color: ${(props) => props.theme.colors.Mirage};

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

      // Desktop
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

  // Desktop
  @media (min-width: 768px) {
    font-size: 1.3em;
  }
`;
export const Text = styled.p`
  color: #cfc9c2;
  width: 90%;
  font-size: 0.9em;

  a {
    color: white;
    font-weight: bolder;
  }

  strong {
    display: flex;
    color: white;
    font-size: 1.1em;

    // Desktop
    @media (min-width: 768px) {
      font-size: 1.11em;
    }
  }

  // Desktop
  @media (min-width: 768px) {
    font-size: 1em;
    width: 85%;
  }
`;
export const Wrap = styled.div`
  display: flex;
  gap: 0.3em;
  padding: 0.4em;

  img {
    width: 30px;
    height: 30px;

    // Desktop
    @media (min-width: 768px) {
      width: 40px;
      height: 40px;
    }
  }
`;
export const By = styled.aside`
  display: none;

  // Desktop
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 0.2em;

    transform: rotate(90deg);
    position: absolute;
    right: -50px;
    top: 50%;

    color: ${(props) => props.theme.colors.Biloba};
    font-size: 0.8em;
    font-weight: bold;
  }
`;
export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-size: 1.3em;
  margin: 2.5em auto;

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

  // Desktop
  @media (min-width: 768px) {
    font-size: 1.4em;
  }
`;
