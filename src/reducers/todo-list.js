const todoListReducer = (
  state = [{ title: "Throw the trash.", completed: false, id: 0 }],
  action
) => {
  switch (action.type) {
    case "ADD":
      state.push({ ...action.value, id: state.length });
      return [...state];
    case "COMPLETE":
      const temp = state[Number(action.value)].completed;
      state[Number(action.value)].completed = !temp;
      return [...state];
    case "REMOVE":
      console.log(JSON.stringify(action));
      state[Number(action.value)] = null;
      return [...state].filter((task) => task);
    default:
      return [...state];
  }
};

export default todoListReducer;
