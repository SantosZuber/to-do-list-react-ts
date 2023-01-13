export interface Task {
  body: string;
  isDone: bool;
  isEditing: bool;
}

interface Props {
  tasks: {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  };
}
