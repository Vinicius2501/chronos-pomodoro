import { TrashIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';
import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { formatDate } from '../../utils/formatDate';
import { translateStatusTasks } from '../../utils/translateStatusTasks';
import { useState } from 'react';
import { sortTasks, type SortTaskOptions } from '../../utils/sortTasks';

export function History() {
  const typesDict = {
    workTime: 'Foco',
    shortBreakTime: 'Descanso rápido',
    longBreakTime: 'Descanso longo',
  };

  const { state } = useTaskContext();
  const [sortTasksOptions, setTasksOptions] = useState<SortTaskOptions>(() => {
    return {
      tasks: sortTasks({ tasks: state.tasks }),
      field: 'startDate',
      direction: 'desc',
    };
  });

  function handleSortTasks({ field }: Pick<SortTaskOptions, 'field'>) {
    const newDirection = sortTasksOptions.direction === 'desc' ? 'asc' : 'desc';

    setTasksOptions({
      tasks: sortTasks({
        direction: newDirection,
        tasks: sortTasksOptions.tasks,
        field: field,
      }),
      direction: newDirection,
      field: field,
    });
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>History</span>
          <span className={styles.buttonContainer}>
            <DefaultButton
              icon={<TrashIcon />}
              color='red'
              aria-label='"apagar todo o histórico'
              title='Apagar histórico'
            ></DefaultButton>
          </span>
        </Heading>
      </Container>
      <Container>
        <div className={styles.responsiveTable}>
          <table>
            <thead>
              <tr>
                <th
                  onClick={() => handleSortTasks({ field: 'name' })}
                  className={styles.thSort}
                >
                  Tarefa ↕
                </th>
                <th
                  onClick={() =>
                    handleSortTasks({ field: 'durationInMinutes' })
                  }
                  className={styles.thSort}
                >
                  Duração ↕
                </th>
                <th
                  onClick={() => handleSortTasks({ field: 'startDate' })}
                  className={styles.thSort}
                >
                  Data ↕
                </th>
                <th>Status</th>
                <th>Tipo</th>
              </tr>
            </thead>
            <tbody>
              {sortTasksOptions.tasks.map(task => {
                return (
                  <tr key={task.id}>
                    <td>{task.name}</td>
                    <td>{task.durationInMinutes}min</td>
                    <td>{formatDate(task.startDate)}</td>
                    <td>{translateStatusTasks(task, state.activeTask)}</td>
                    <td>{typesDict[task.type]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Container>
    </MainTemplate>
  );
}
