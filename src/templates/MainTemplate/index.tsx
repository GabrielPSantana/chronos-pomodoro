import { Container } from '../../component/Container';
import { Footer } from '../../component/Footer';
import { Logo } from '../../component/Logo';
import { Menu } from '../../component/Menu';

type MainTemplateProps = {
  children: React.ReactNode;
};
export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      {children}

      <Container>
        <Footer />
      </Container>
    </>
  );
}
