import { useEffect, useState } from "react";

// Icons
import { Container, Image, Text, Title, By, Emoji, Msg } from "./styled";
import { HiCode } from "react-icons/hi";

// Components
import { SocialMedia } from "../social";

export const Home: React.FC = () => {
  const [hello, setHello] = useState(String);
  const posts: string[] = [
    "Oi",
    "Hi",
    "Hola",
    "Salut",
    "你好",
    "Привет",
    "やあ",
  ];

  useEffect((message: string[] = posts): void => {
    const rand: number = Math.floor(Math.random() * message.length);
    setHello(message[rand]);
  });

  return (
    <>
      <Container>
        <Image/>
        <Title>
          <Msg>{hello}</Msg>
          <Emoji>👋🏾</Emoji>
        </Title>
        <Text>
          Meu nome é Robson, sou Desenvolvedor Front-end e Freelancer nas horas
          vagas. Apaixonado por tecnologia, musica e esportes ! Tente olhar meu{" "}
          <a href="#">portifólio</a> e me seguir nas redes sociais! 🫠
        </Text>
        <By>
          <HiCode /> by Robson Raphael
        </By>
      </Container>
      <SocialMedia />
    </>
  );
};
