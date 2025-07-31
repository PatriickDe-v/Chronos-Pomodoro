import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        reprehenderit dolores labore? Reprehenderit dolor sit libero,
        accusantium in laudantium aut suscipit optio a perferendis deleniti modi
        eligendi distinctio laboriosam ipsam!
      </p>
    </>
  );
}
