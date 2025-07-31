import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';
import { useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

export function Settings() {
  const { state } = useTaskContext();

  const workTimeInputRef = useRef<HTMLInputElement>(null);
  const shortBreakInputRef = useRef<HTMLInputElement>(null);
  const longBreakInputRef = useRef<HTMLInputElement>(null);

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const workTime = workTimeInputRef.current?.value;
    const shortBreakTime = shortBreakInputRef.current?.value;
    const longBreakTime = longBreakInputRef.current?.value;

    console.log(workTime, shortBreakTime, longBreakTime);
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>
      <Container>
        <p>
          Modifique as configurações para tempo de foco, descanso rápido e
          descanso longo
        </p>
      </Container>
      <Container>
        <form onSubmit={handleSaveSettings} action='' className='form'>
          <div className='formRow'>
            <DefaultInput
              id='workTime'
              labelText='Foco'
              ref={workTimeInputRef}
              defaultValue={state.config.workTime}
            ></DefaultInput>
          </div>
          <div className='formRow'>
            <DefaultInput
              id='sortBreakTime'
              labelText='Descanso rápido'
              ref={shortBreakInputRef}
              defaultValue={state.config.shortBreakTime}
            ></DefaultInput>
          </div>
          <div className='formRow'>
            <DefaultInput
              id='longBreakTime'
              labelText='Descanso longo'
              ref={longBreakInputRef}
              defaultValue={state.config.longBreakTime}
            ></DefaultInput>
            <div className='formRow'>
              <DefaultButton
                icon={<SaveIcon />}
                aria-label='salvar configurações'
                title='Salvar configurações'
              ></DefaultButton>
            </div>
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
