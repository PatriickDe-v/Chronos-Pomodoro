import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  // O JSX deve ser retornado como a expressao
  // Use parenteses para envolver o JSX de varias linhas
  return (
    <>
      <Heading>Olá mundo!</Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        reprehenderit dolores labore? Reprehenderit dolor sit libero,
        accusantium in laudantium aut suscipit optio a perferendis deleniti modi
        eligendi distinctio laboriosam ipsam!
      </p>
    </>
  );
}
