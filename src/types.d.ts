export interface Task {
  body: string;
  isDone: bool;
  isEditing: bool;
}

export interface Props {
  tasks: {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    colorMode?: ColorMode;
  };
}
