import styled from "styled-components";

export const Container = styled.main`
  background-color: ${(props) => props.theme.colors.Mirage};
  height: 80vh;
  padding: 2em;
  display: flex;
  flex-direction: column;
  gap: 1em;

  @media (min-width: 768px){
    height: 75vh;
  }
`;
export const Title = styled.h1`
  font-size: 18px;
  color: #f5f5f5;
  margin-top: 0.5em;

  @media (min-width: 768px){
    font-size: 20px;
  }
`;
export const Text = styled.p<{size?: string; padd?: string }>`
  color: #cccc;
  font-size: ${(props) => props.size || "14px"};
  padding: ${(props) => props.padd};
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 1px;
  text-align: justify;
  width: 95%;  

  strong {
    color: ${props => props.theme.colors.Biloba};
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3em;
  font-size: 17px;
  color: #dddd;
  font-weight: medium;
  position: relative;
  top: 90px;
`;
export const Link = styled.a`
  color: ${props => props.theme.colors.Biloba};
  font-weight: bolder;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;