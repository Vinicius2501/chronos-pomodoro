import { Container } from '../../components/Container';
import { MainTemplate } from '../../templates/MainTemplate';

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>404 - Pagina não encontrada</h1>
      </Container>
    </MainTemplate>
  );
}
