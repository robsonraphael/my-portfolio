import styled from "styled-components";

export const Container = styled.footer``;
export const Wrap = styled.div`
  width: 100%;
  height: 12vh;

  gap: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 1em;

  background-color: #232433;

  @media (min-width: 768px) {
    font-size: 22px;
    gap: 0.6em;
  }
`;
export const Link = styled.a`
  cursor: pointer;
  transition: ease-in 0.25s;
  text-decoration: none;
  color: ${(props) => props.theme.colors.Portage};

  // Desktop
  @media (min-width: 768px) {
    &:hover {
      color: ${(props) => props.theme.colors.Desert};
    }
  }

  &:focus {
    :nth-child(1) {
      color: #101010;
    }
    :nth-child(2) {
      color: #bb201d;
    }
    :nth-child(3) {
      color: #000;
    }
    :nth-child(4) {
      color: #863ab6;
    }
    :nth-child(5) {
      color: #026fab;
    }
    :nth-child(6) {
      color: #030303;
    }
    :nth-child(7) {
      color: #28a0d5;
    }
  }
`;
