import { Heading, IconButton, useColorMode, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { ToDoForm } from "./components/ToDoForm";
import { ToDoList } from "./components/ToDoList";
import { data } from "./data/data";
import { Task } from "./types";

function App() {
  const [tasks, setTasks] = useState<Array<Task>>([]);
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <VStack p={4} gap={70}>
      <IconButton
        icon={colorMode == "light" ? <FaMoon /> : <FaSun />}
        isRound={true}
        aria-label={"Dark mode switch"}
        alignSelf={"flex-end"}
        onClick={toggleColorMode}
      />
      <Heading size={"2xl"}>To-do list</Heading>
      <ToDoList tasks={tasks} setTasks={setTasks} colorMode={colorMode} />
      <ToDoForm tasks={tasks} setTasks={setTasks} />
    </VStack>
  );
}

export default App;
