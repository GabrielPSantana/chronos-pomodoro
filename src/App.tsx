import { Container } from './component/Container';
import { Logo } from './component/Logo';
import { Menu } from './component/Menu';
import './styles/theme.css';
import './styles/global.css';

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
        <section>FORMULÁRIO</section>
      </Container>

      <Container>
        <section>FOOTER</section>
      </Container>
    </>
  );
}
