// Menu
export const add = (title, completed = false) => {
  return {
    type: "ADD",
    value: {
      title,
      completed,
    },
  };
};
export const complete = (id) => {
  return {
    type: "COMPLETE",
    value: id,
  };
};
export const remove = (id) => {
  return {
    type: "REMOVE",
    value: id,
  };
};

export const navigate = (link) => {
  return {
    type: "NAVIGATE",
    value: link,
  };
};
