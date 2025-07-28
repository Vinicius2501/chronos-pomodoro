import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/GetNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const TipsWhenNoActiveTaks = {
    workTime: (
      <span>
        O próximo ciclo será de <b>{state.config.workTime}min</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        O descanso será de <b>{state.config.shortBreakTime}min</b>
      </span>
    ),
    longBreakTime: (
      <span>
        O descanso será de <b>{state.config.longBreakTime}min</b>
      </span>
    ),
  };

  const TipsWhenActiveTaks = {
    workTime: (
      <span>
        Foque por <b>{state.config.workTime}min</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        Descanse por <b>{state.config.shortBreakTime}min</b>
      </span>
    ),
    longBreakTime: (
      <span>
        Descanse por <b>{state.config.longBreakTime}min</b>
      </span>
    ),
  };

  return (
    <>
      {!!state.activeTask && TipsWhenActiveTaks[state.activeTask.type]}
      {!state.activeTask && TipsWhenNoActiveTaks[nextCycleType]}
    </>
  );
}
