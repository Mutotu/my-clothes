import createDataContext from "./createDataContext";

const clothesReducer = (state, action) => {
  switch (action.type) {
    case "add_cloth":
      return [
        ...state,
        {
          item: action.payload,
        },
      ];
    default:
      return state;
  }
};

const addCloth = (dispatch) => {
  // return (title, content, callback) => {
  //   dispatch({ type: "add_cloth", payload: { title, content } });
  //   if (callback) callback();
  // };

  return (singleCloth) => {
    dispatch({ type: "add_cloth", payload: singleCloth });
  };
};

export const { Context, Provider } = createDataContext(
  clothesReducer,
  {
    addCloth,
  },
  []
);
