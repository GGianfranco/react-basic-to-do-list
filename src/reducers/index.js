import todoListReducer from "./todo-list";
import navigationReducer from "./navigation";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  todoList: todoListReducer,
  navigation: navigationReducer,
});

export default allReducers;
