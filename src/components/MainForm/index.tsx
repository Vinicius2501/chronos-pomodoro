import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/GetNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatSecondstoMinutes } from '../../utils/formatSecondsToMinutes';
//import style from './style.module.css';

export function MainForm() {
  const { state, setState } = useTaskContext();
  const taskNameImput = useRef<HTMLInputElement>(null);

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (taskNameImput.current === null) return;

    const taskName = taskNameImput.current.value.trim();

    if (!taskName) {
      alert('Digite o nome da tarefa');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      durationInMinutes: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining = newTask.durationInMinutes * 60;

    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining: secondsRemaining,
        formattedSecondsRemaining: formatSecondstoMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleInterruptTask() {
    setState(prevState => {
      return {
        ...prevState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: prevState.tasks.map(task =>{
          if(prevState.activeTask && prevState.activeTask.id === task.id) return {...task,interruptDate: Date.now()}
          return task
        })
      };
    });
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          id='input'
          type='text'
          placeholder='Digite algo'
          ref={taskNameImput}
          disabled={!!state.activeTask}
        />
      </div>
      <div className='formRow'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      {state.currentCycle > 0 && (
        <div className='formRow'>
          <Cycles />
        </div>
      )}
      <div className='formRow'>
        {!state.activeTask && (
          <DefaultButton
            icon={<PlayCircleIcon />}
            type='submit'
            aria-label='Iniciar nova tarefa'
            title='Iniciar nova tarefa'
            color='green'
            key='botao_submit'
          />
        )}

        {!!state.activeTask && (
          <DefaultButton
            icon={<StopCircleIcon />}
            type='button'
            aria-label='Parar tarefa ativa'
            title='Parar tarefa ativa'
            color='red'
            onClick={handleInterruptTask}
            key='botao_button'
          />
        )}
      </div>
    </form>
  );
}
