import type { TaskModel } from '../models/TaskModel';

export function translateStatusTasks(
  task: TaskModel,
  activeTask?: TaskModel | null,
) {
  if (task.id === activeTask?.id) return 'Em progresso';
  if (task.completeDate) return 'Completa';
  if (task.interruptDate) return 'Interrompida';
  return 'Abandonada';
}
