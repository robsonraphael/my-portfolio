import styled from "styled-components";

export const Container = styled.main`
  background-color: ${(props) => props.theme.colors.Mirage};

  display: flex;
  flex-direction: column;
  gap: 2em;

  width: 100%;
  height: 100%;
  padding: 2em;
  padding-bottom: 4em;
`;

export const Wrap = styled.div`
  strong {
    display: flex;
    color: white;
    font-size: 1em;

    // Desktop
    @media (min-width: 768px) {
      font-size: 1.1em;
    }
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: 1.2em;
  font-weight: 400;

  // Desktop
  @media (min-width: 768px) {
    font-size: 1.4em;
    font-weight: 550;
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

export const Brads = styled.div`
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

export const Quote = styled.blockquote`
  color: white;
  font-size: 0.9em;
  font-weight: lighter;
  font-style: italic;
`;
