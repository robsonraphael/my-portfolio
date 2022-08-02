// Styled components
import { Container, Wrap, Link } from "./styled";

// Icons
import { MdEmail } from "react-icons/md";
import {
  FaDev,
  FaGithub,
  FaMedium,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export const SocialMedia : React.FC = () => {
  return (
    <Container>
      <Wrap>
        <Link href="#">
          <FaMedium />
        </Link>
        <Link href="mailto:robsonraphaelwork@gmail.com" target="_blank">
          <MdEmail />
        </Link>
        <Link href="http://www.github.com/robsonraphael" target="_blank">
          <FaGithub />
        </Link>
        <Link href="#">
          <FaInstagram />
        </Link>
        <Link
          href="https://www.linkedin.com/in/robson-raphael-42a628224/"
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link href="#">
          <FaDev />
        </Link>
        <Link href="#">
          <FaTwitter />
        </Link>
      </Wrap>
    </Container>
  );
};
