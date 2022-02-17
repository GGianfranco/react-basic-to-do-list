import React from "react";
import { useDispatch } from "react-redux";
import { add, navigate } from "./actions";
import { useState } from "react";
import "./Navigation.css";

function Navigation() {
  const [taskInput, setTaskInput] = useState("");
  const dispatch = useDispatch();

  const onSubmitTaskInput = (event) => {
    event.preventDefault();
    dispatch(add(taskInput));
    setTaskInput("");
  };
  const onChangeTaskInput = (event) => {
    setTaskInput(event.target.value);
  };

  return (
    <div className="navigation">
      <div className="user">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          //   width="24"
          //   height="25"
          width="100"
          height="100"
          viewBox="0 0 24 25"
        >
          <path d="M16.5 13.5c0 .828-.56 1.5-1.25 1.5s-1.25-.672-1.25-1.5.56-1.5 1.25-1.5 1.25.672 1.25 1.5zm-7.75-1.5c-.69 0-1.25.672-1.25 1.5s.56 1.5 1.25 1.5 1.25-.672 1.25-1.5-.56-1.5-1.25-1.5zm15.25 2.313c0 1.765-.985 3.991-3.139 4.906-2.063 3.295-4.987 5.781-8.861 5.781-3.741 0-6.846-2.562-8.861-5.781-2.154-.916-3.139-3.142-3.139-4.906 0-2.053.754-3.026 1.417-3.489-.39-1.524-1.03-5.146.963-7.409.938-1.065 2.464-1.54 4.12-1.274.719-1.532 3.612-2.141 5.5-2.141 3 0 6.609.641 9.141 3.516 1.969 2.236 1.648 5.741 1.388 7.269.676.446 1.471 1.419 1.471 3.528zm-9.6 4.687h-4.8s.678 1.883 2.4 1.883c1.788 0 2.4-1.883 2.4-1.883zm7.063-6.508c-4.11.393-7.778-3.058-9.073-5.274-.081.809.186 2.557.969 3.355-3.175.064-5.835-1.592-7.46-3.868-.837 1.399-1.242 3.088-1.242 4.775 0 .722-.746 1.208-1.406.914-.14-.063-.436-.101-.671.053-1 .648-.895 4.183 1.553 5.012.224.076.413.228.536.43.655 1.086 1.354 1.98 2.086 2.722.922.633 1.056-1.875 1.667-2.72.686-.949 2.455-1.126 3.578-.322 1.124-.804 2.892-.627 3.578.322.611.846.745 3.354 1.667 2.72.731-.741 1.43-1.636 2.086-2.722.123-.202.313-.354.536-.43 2.363-.8 2.596-4.185 1.596-4.967z" />
        </svg>
        <h3>Lebron James</h3>
        <p>Task Master</p>
      </div>
      <form className="addTask" onSubmit={onSubmitTaskInput}>
        <input
          type="text"
          value={taskInput}
          placeholder="Press enter to add a task."
          onChange={onChangeTaskInput}
        />
      </form>
      <div className="links">
        <div className="link" onClick={() => dispatch(navigate("ALL"))}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M18.571 6c-2.853 0-4.608 2.164-6.571 4.201-1.963-2.037-3.718-4.201-6.571-4.201-3.197 0-5.429 2.455-5.429 6s2.232 6 5.429 6c2.854 0 4.608-2.164 6.571-4.201 1.963 2.037 3.718 4.201 6.571 4.201 3.197 0 5.429-2.455 5.429-6s-2.232-6-5.429-6zm-13.142 10c-2.114 0-3.479-1.578-3.479-4s1.366-4 3.479-4c2.311 0 3.719 2.05 5.365 4-1.647 1.95-3.055 4-5.365 4zm13.142 0c-2.311 0-3.719-2.05-5.365-4 1.646-1.95 3.054-4 5.365-4 2.114 0 3.479 1.578 3.479 4s-1.365 4-3.479 4z" />
          </svg>
          <h3>All</h3>
        </div>
        <div className="link" onClick={() => dispatch(navigate("COMPLETED"))}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M10.041 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591zm-5.041-15c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-14c0-1.654-1.346-3-3-3h-14zm19 3v14c0 2.761-2.238 5-5 5h-14c-2.762 0-5-2.239-5-5v-14c0-2.761 2.238-5 5-5h14c2.762 0 5 2.239 5 5z" />
          </svg>
          <h3>Completed</h3>
        </div>
        <div
          className="link"
          onClick={() => dispatch(navigate("NOT_COMPLETED"))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M5 2c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-14c0-1.654-1.346-3-3-3h-14zm19 3v14c0 2.761-2.238 5-5 5h-14c-2.762 0-5-2.239-5-5v-14c0-2.761 2.238-5 5-5h14c2.762 0 5 2.239 5 5z" />
          </svg>
          <h3>Not Completed</h3>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
