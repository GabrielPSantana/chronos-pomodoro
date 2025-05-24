import { Container } from '../../component/Container';
import { MainTemplate } from '../../templates/MainTemplate';

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>Página não encontrada.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
          consequuntur modi tempora sequi nesciunt, blanditiis eveniet
          aspernatur nemo quis corrupti. Dignissimos dicta neque velit et
          officia iure quos? Unde, ad?
        </p>
      </Container>
    </MainTemplate>
  );
}
