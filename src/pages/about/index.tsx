import React from "react";

// Styled components
import { Container, Title, Text, Brads, Wrap, Quote } from "./styled";

// Components
import { SocialMedia } from "../../components/social";

export const About: React.FC = () => {
  return (
    <>
      <Container>
        <Title>Salve, sou Robson Raphael 🖖🏾</Title>
        <Wrap>
          <Text>
            <strong>Quem sou eu ?</strong>
            Eu poderia dizer que sou uma pessoa que gosta de passar o tempo
            programando, praticando esportes ou escutando música. Esta é uma
            definição perfeita de mim mesmo! Tenho 20 anos, nascido e criado em
            Pernambuco 🌵. Atualmente trabalhando como Freelancer. Sou
            Desenvolvedor FullStack, hoje em dia estou em um ponto onde desing e
            código se cruzam.
          </Text>
        </Wrap>
        <Wrap>
          <strong>Minhas Habilidades</strong>
          <Brads>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" />
          </Brads>
          <Text>
            Atualmente estou mergulhando no mundo Back-end, Cloud e UI/UX. Venho
            sempre usando meu tempo livre para aprender, publicar e ensinar
            novas tecnologias!
          </Text>
        </Wrap>
        <Wrap>
          <Text>
            Estou sempre aberto para trocar ideias e colaborar em projetos, você
            pode me seguir nas redes sociais ou entrar em contato comigo pelo
            meu <a href="mailto:robsonraphaelwork@gmail.com">e-mail.</a>
          </Text>
        </Wrap>
        <Quote>Não tenho medo eu sou filho do dono! 🙏🏽</Quote>
      </Container>
      <SocialMedia />
    </>
  );
};
