import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 5em;
  padding: 0.4em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(40, 40, 40);
  position: sticky;
`;
export const Logo = styled.a`
  font-size: 1.3em;
`;

export const Nav = styled.nav<{ active: string }>`
  display: ${(props) => props.active};
  gap: 1em;
  position: absolute;
  left: 0;
  top: 5em;
  width: 100%;
  padding: 1em;
  justify-content: space-evenly;

  a {
    padding: 0.7em;
    border-radius: 0.2em;
    background-color: rgb(40, 40, 40);
    color: white;
    font-weight: bolder;

    &:focus {
      background-color: rgb(200, 200, 200);
      color: black;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-start;
    gap: 1.5em;
    position: static;
    padding: 0.5em;
    width: fit-content;
    font-weight: 450;

    a {
      color: white;
      padding: 1.2em 1em;
      border-radius: 0.2em;

      &:focus {
        background-color: rgb(250, 250, 250);
        color: black;
      }
    }
  }
`;
export const Link = styled.a`
  padding: 0.3em;
  color: black;
`;
export const Button = styled.button`
  border: none;
  background: none;
  font-size: 1.8em;
  display: flex;
  padding: 0.2em;
  cursor: pointer;
  color: white;

  @media (min-width: 768px) {
    display: none;
  }
`;
