import type { TaskModel } from '../../models/TaskModel';

export const TaskActionTypes = {
  START_TASK: 'START_TASK',
  INTERRUPT_TASK: 'INTERRUPT_TASK',
  COUNT_DOWN: 'COUNT_DOWN',
  COMPLETE_TASK: 'COMPLETE_TASK',
  RESET_TASKS: 'RESET_TASKS',
} as const;

export type TaskActionTypes =
  (typeof TaskActionTypes)[keyof typeof TaskActionTypes];

export type TaskActionModel =
  | {
      type: typeof TaskActionTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: typeof TaskActionTypes.INTERRUPT_TASK;
    }
  | {
      type: typeof TaskActionTypes.COUNT_DOWN;
      payload: { secondsRemaining: number };
    }
  | {
      type: typeof TaskActionTypes.COMPLETE_TASK;
    }
  | {
      type: typeof TaskActionTypes.RESET_TASKS;
    };
