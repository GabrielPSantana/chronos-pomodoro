import { Container } from './component/Container';
import { Logo } from './component/Logo';
import { Menu } from './component/Menu';
import './styles/theme.css';
import './styles/global.css';
import { CountDown } from './component/CountDown';
import { DefaultInput } from './component/DefaultInput';

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
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput labelText='task' placeholder='Digite algo' id='meuInput' type='text' />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <p>Ciclos</p>
            <p>0 0 0 0 0 0 0</p>
          </div>

          <div className='formRow'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>

      <Container>
        <section>FOOTER</section>
      </Container>
    </>
  );
}
