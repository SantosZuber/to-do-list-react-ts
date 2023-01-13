import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Input,
  Badge,
} from "@chakra-ui/react";
import { FaTrash, FaCheck, FaPen } from "react-icons/fa";
import { Props, Task } from "../types";
import { twinkle } from "../animations/animations";
import {
  handleDelete,
  handleEditing,
  handleToggleEdit,
  handleToggleDone,
} from "./ToDoManagers";

export function ToDoList({ tasks, setTasks, colorMode }: Props["tasks"]) {
  if (!tasks.length) {
    return (
      <Badge colorScheme={"green"} p={4} m={4} borderRadius={"lg"}>
        You don't have any to-dos!
      </Badge>
    );
  }
  return (
    <VStack
      divider={<StackDivider />}
      borderColor={"gray.100"}
      borderWidth={"2px"}
      p={4}
      borderRadius={14}
      w="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems={"stretch"}
    >
      {tasks.map((todo, index) => {
        return (
          <HStack key={index}>
            <Input
              type={"text"}
              animation={todo.isEditing ? `${twinkle} infinite 2s` : "none"}
              textDecorationLine={todo.isDone ? "line-through" : "none"}
              color={colorMode == "light" ? "black" : "white"}
              opacity={todo.isDone ? "30%" : "100%"}
              onChange={(e) => {
                handleEditing(index, e.target.value, tasks, setTasks);
              }}
              border={"none"}
              value={todo.body}
              readOnly={!todo.isEditing}
            />

            <Spacer />
            <IconButton
              aria-label="done"
              icon={<FaCheck />}
              color={"white"}
              bgColor={"#10d602"}
              _hover={{ backgroundColor: "#5cd347" }}
              _active={{
                backgroundColor: "#61dd58",
              }}
              onClick={() => {
                handleToggleDone(index, tasks, setTasks);
              }}
            />
            <IconButton
              aria-label="edit"
              icon={<FaPen />}
              color={"white"}
              bgColor={"#3185e0"}
              _hover={{ backgroundColor: "#5496dd" }}
              _active={{
                backgroundColor: "#74a8e0",
              }}
              onClick={() => {
                handleToggleEdit(index, tasks, setTasks);
              }}
            />
            <IconButton
              aria-label="delete"
              icon={<FaTrash />}
              color={"white"}
              bgColor={"red"}
              _hover={{ backgroundColor: "#f95959" }}
              _active={{
                backgroundColor: "#ef7575",
                transition: "0.1s background-color",
              }}
              onClick={() => {
                handleDelete(index, tasks, setTasks);
              }}
            />
          </HStack>
        );
      })}
    </VStack>
  );
}
