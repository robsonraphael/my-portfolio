import React from "react";

/* Styled components */
import { Container, Title, Text, Wrap, By, SocialMedia } from "./styled";

/* Icons */
import { HiCode, HiOutlineMail } from "react-icons/hi";
import { RiBehanceLine, RiLinkedinFill } from "react-icons/ri";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaDev, FaGithub } from "react-icons/fa";

export const About: React.FC = () => {
  return (
    <Container>
      <Title>Hello, Sou Robson Raphael! 🖖🏾</Title>
      <Text>
        <strong>Quem sou eu ?</strong>
        Eu poderia dizer que sou uma pessoa que gosta de passar o tempo
        programando, praticando esportes ou escutando música. Esta é uma
        definição perfeita de mim mesmo! Tenho 20 anos, nascido e criado em
        Pernambuco 🌵. Atualmente trabalhando como Freelancer. Sou Desenvolvedor
        FullStack, hoje em dia estou em um ponto onde desing e código se cruzam.
      </Text>
      <div>
        <strong>Minhas Habilidades</strong>
        <Wrap>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" />
        </Wrap>
        <Text>
          Atualmente estou mergulhando no mundo Back-end, Cloud e UI/UX. Venho
          sempre usando meu tempo livre para aprender, publicar e ensinar novas
          tecnologias!
        </Text>
      </div>
      <Text>
        Estou sempre aberto para trocar ideias, você pode me seguir nas redes
        sociais ou entrar em contato comigo pelo meu{" "}
        <a href="mailto:robsonraphaelwork@gmail.com">e-mail.</a>
      </Text>
      <i>Não tenho medo eu sou filho do dono! 🙏🏽</i>
      <SocialMedia>
        <a href="#">
          <RiBehanceLine />
        </a>
        <a href="mailto:robsonraphaelwork@gmail.com" target="_blank">
          <HiOutlineMail />
        </a>
        <a href="http://www.github.com/robsonraphael" target="_blank">
          <FaGithub />
        </a>
        <a href="#">
          <BsInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/robson-raphael-42a628224/"
          target="_blank"
        >
          <RiLinkedinFill />
        </a>
        <a href="#">
          <FaDev />
        </a>
        <a href="#">
          <BsTwitter />
        </a>
      </SocialMedia>
      <By>
        <HiCode size="1.2em" /> by Robson Raphael
      </By>
    </Container>
  );
};
