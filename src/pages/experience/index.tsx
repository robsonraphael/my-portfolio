// Styled components
import { Container, Title, Text, Wrap, Link } from "./styled";

// Components
import { SocialMedia } from "../../components/social";

export const Experience : React.FC = () => {
  return (
    <>
      <Container>
        <Title>
          Em Busca da <strong>Primeira oportunidade de trabalho</strong> CLT na
          web
        </Title>
        <Text>
          Estudo o meio web a <strong>mais de 2 anos</strong>, estou em uma fase
          em que presto serviços de forma independente. Buscando comercios em
          expansão que querem introduzir o seu produto na internet, fazer alguma
          modificação em seu site ou, um UP com Landing page, email Marketing e
          SEO.
        </Text>
        <Wrap>
          Veja meus projetos <Link href="/work">aqui</Link>
        </Wrap>
      </Container>
      <SocialMedia />
    </>
  );
};
