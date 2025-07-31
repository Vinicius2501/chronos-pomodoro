import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';
import { useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { showMessage } from '../../adapters/showMessage';
import { TaskActionTypes } from '../../contexts/TaskContext/TaskActions';

export function Settings() {
  const { state, dispatch } = useTaskContext();

  const workTimeInputRef = useRef<HTMLInputElement>(null);
  const shortBreakInputRef = useRef<HTMLInputElement>(null);
  const longBreakInputRef = useRef<HTMLInputElement>(null);
  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formErrors: string[] = [];

    showMessage.dismiss();

    const workTime = Number(workTimeInputRef.current?.value);
    const shortBreakTime = Number(shortBreakInputRef.current?.value);
    const longBreakTime = Number(longBreakInputRef.current?.value);

    if (isNaN(workTime)) {
      formErrors.push('Utilize apenas números para foco!');
    }
    if (isNaN(shortBreakTime)) {
      formErrors.push('Utilize apenas números para descanso rápido!');
    }
    if (isNaN(longBreakTime)) {
      formErrors.push('Utilize apenas números para descanso longo!');
    }

    if (workTime < 1 || workTime > 99) {
      formErrors.push('Digite valores entre 1 e 99 para foco!');
    }
    if (shortBreakTime < 1 || shortBreakTime > 15) {
      formErrors.push('Digite valores entre 1 e 15 para descanso rápido!');
    }
    if (longBreakTime < 1 || longBreakTime > 30) {
      formErrors.push('Digite valores entre 1 e 30 para descanso longo!');
    }

    if (formErrors.length > 0) {
      formErrors.forEach(error => {
        showMessage.error(error);
      });
      return;
    }

    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: {
        workTime: workTime,
        shortBreakTime: shortBreakTime,
        longBreakTime: longBreakTime,
      },
    });

    showMessage.success('Configurações salvas com sucesso!');
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
              type='number'
            ></DefaultInput>
          </div>
          <div className='formRow'>
            <DefaultInput
              id='sortBreakTime'
              labelText='Descanso rápido'
              ref={shortBreakInputRef}
              defaultValue={state.config.shortBreakTime}
              type='number'
            ></DefaultInput>
          </div>
          <div className='formRow'>
            <DefaultInput
              id='longBreakTime'
              labelText='Descanso longo'
              ref={longBreakInputRef}
              defaultValue={state.config.longBreakTime}
              type='number'
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
