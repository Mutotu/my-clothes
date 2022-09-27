import createDataContext from "./createDataContext";

const clothesReducer = (state, action) => {
  switch (action.type) {
    case "add_cloth":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
        },
      ];
    default:
      return state;
  }
};

const addCloth = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_cloth", payload: { title, content } });
    if (callback) callback();
  };
};

export const { Context, Provider } = createDataContext(
  clothesReducer,
  {
    addCloth,
  },
  [{ title: "TEST", content: "COnetnen", id: 1 }]
);
