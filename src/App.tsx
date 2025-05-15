import { Container } from './component/Container';
import { Logo } from './component/Logo';
import { Menu } from './component/Menu';
import './styles/theme.css';
import './styles/global.css';
import { CountDown } from './component/CountDown';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <section>FORMULÁRIO</section>
      </Container>

      <Container>
        <section>FOOTER</section>
      </Container>
    </>
  );
}
