import { Button, HStack, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Props, Task } from "../types";

const INITIAL_STATE: Task = {
  body: "",
  isDone: false,
  isEditing: false,
};

export function ToDoForm({ tasks, setTasks }: Props["tasks"]) {
  const [newTask, setNewTask] = useState<Task>(INITIAL_STATE);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    addTask(newTask);
  }

  function addTask(newTask: Task): void {
    if (newTask.body) {
      const newTasks: Task[] = [...tasks, newTask];
      setTasks(newTasks);
      setNewTask(INITIAL_STATE);
    } else {
      return;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack>
        <Input
          variant={"filled"}
          placeholder={"Add a to-do"}
          value={newTask.body}
          onChange={(e) => {
            setNewTask({
              body: e.target.value,
              isDone: false,
              isEditing: false,
            });
          }}
        />
        <Button type="submit">Add</Button>
      </HStack>
    </form>
  );
}
