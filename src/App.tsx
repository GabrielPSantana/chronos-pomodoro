import './styles/theme.css';
import './styles/global.css';
import { Container } from './component/Container';

export function App() {
  return (
    <>
      <Container>
        <section>LOGO</section>
      </Container>

      <Container>
        <section>MENU</section>
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
