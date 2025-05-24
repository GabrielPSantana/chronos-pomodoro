import { Container } from '../../component/Container';
import { CountDown } from '../../component/CountDown';
import { MainForm } from '../../component/MainForm';
import { MainTemplate } from '../../templates/MainTemplate';

export function Home() {
  return (
    <>
      <MainTemplate>
        <Container>
          <CountDown />
        </Container>

        <Container>
          <MainForm />
        </Container>
      </MainTemplate>
    </>
  );
}
