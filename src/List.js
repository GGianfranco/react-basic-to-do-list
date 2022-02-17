import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
import "./List.css";

function List() {
  const todoList = useSelector((state) => state.todoList);
  const navigation = useSelector((state) => state.navigation);

  useEffect(() => {
    console.log(JSON.stringify(todoList));
  }, [todoList]);

  // Filters task using the navigation state from our Redux store.
  const allTask = () => {
    return todoList.map((task) => (
      <Task key={task.id} id={task.id} task={task} />
    ));
  };
  const completedTasks = () => {
    return todoList
      .filter((task) => task.completed === true)
      .map((task) => <Task key={task.id} id={task.id} task={task} />);
  };
  const notCompletedTasks = () => {
    return todoList
      .filter((task) => task.completed != true)
      .map((task) => <Task key={task.id} id={task.id} task={task} />);
  };

  const navigationTitle = () => {
    switch (navigation) {
      case "ALL":
        return <h1>ALL</h1>;
      case "COMPLETED":
        return <h1>COMPLETED</h1>;
      case "NOT_COMPLETED":
        return <h1>NOT COMPLETED</h1>;
      default:
        return <h1>ALL</h1>;
    }
  };

  const filterTasks = () => {
    switch (navigation) {
      case "ALL":
        return allTask();
      case "COMPLETED":
        return completedTasks();
      case "NOT_COMPLETED":
        return notCompletedTasks();
      default:
        return allTask();
    }
  };

  return (
    <div className="list">
      <div className="status">{navigationTitle()}</div>
      <div className="cards">{filterTasks()}</div>
    </div>
  );
}

export default List;
