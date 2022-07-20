import { Container, Image, Text, Title, By, Ani, SocialMedia } from "./styled";
import { HiCode, HiOutlineMail } from "react-icons/hi";
import { RiBehanceLine, RiLinkedinFill } from "react-icons/ri";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaDev, FaGithub } from "react-icons/fa";

export const Content = () => {
  return (
    <Container>
      <Image />
      <Title>
        Hii{" "}
        <Ani
          animate={{ rotate: [-15, 30, -15, 30, 0], scale: [1.1, 1] }}
          transition={{ delay: 3, repeat: Infinity, repeatDelay: 5 }}
        >
          👋🏾
        </Ani>
      </Title>
      <Text>
        Meu nome é Robson, sou Desenvolvedor Front-end e Freelancer nas horas vagas. Apaixonado
        por tecnologia, musica e esportes ! Tente olhar meu{" "}
        <a href="#">portifólio</a> e me seguir nas redes sociais! 🫠
      </Text>
      <By>
        <HiCode size="1.2em" /> by Robson Raphael
      </By>
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
    </Container>
  );
};
