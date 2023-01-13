import { Task } from "../types";

export function handleToggleDone(
  index: number,
  tasks: Array<Task>,
  setTasks: React.Dispatch<React.SetStateAction<Array<Task>>>
): void {
  const newTasks: Array<Task> = [...tasks];
  newTasks[index].isDone = !newTasks[index].isDone;
  setTasks(newTasks);
}

export function handleToggleEdit(
  index: number,
  tasks: Array<Task>,
  setTasks: React.Dispatch<React.SetStateAction<Array<Task>>>
): void {
  const newTasks: Array<Task> = [...tasks];
  newTasks[index].isEditing = !newTasks[index].isEditing;
  setTasks(newTasks);
}

export function handleEditing(
  index: number,
  value: string,
  tasks: Array<Task>,
  setTasks: React.Dispatch<React.SetStateAction<Array<Task>>>
): void {
  if (value) {
    const newTasks: Array<Task> = [...tasks];
    newTasks[index].body = value;
    setTasks(newTasks);
  } else {
    return;
  }
}

export function handleDelete(
  index: number,
  tasks: Array<Task>,
  setTasks: React.Dispatch<React.SetStateAction<Array<Task>>>
): void {
  const newTasks: Array<Task> = [...tasks];
  newTasks.splice(index, 1);
  setTasks(newTasks);
}
