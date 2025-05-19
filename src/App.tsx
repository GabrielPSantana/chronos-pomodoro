import { Container } from './component/Container';
import { Logo } from './component/Logo';
import { Menu } from './component/Menu';
import './styles/theme.css';
import './styles/global.css';
import { CountDown } from './component/CountDown';
import { DefaultInput } from './component/DefaultInput';
import { Cycles } from './component/Cycles';
import { DefaultButton } from './component/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './component/Footer';

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
            <DefaultInput
              labelText='task'
              placeholder='Digite algo'
              id='meuInput'
              type='text'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>

      <Container>
        <Footer/>
      </Container>
    </>
  );
}
