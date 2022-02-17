const navigationReducer = (state = "ALL", action) => {
  switch (action.type) {
    case "NAVIGATE":
      switch (action.value) {
        case "ALL":
          return "ALL";
        case "COMPLETED":
          return "COMPLETED";
        case "NOT_COMPLETED":
          return "NOT_COMPLETED";
        default:
          return "ALL";
      }
    default:
      return state;
  }
};

export default navigationReducer;
