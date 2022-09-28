import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/ClothesContext";
import ShowScreen from "./src/screens/ShowScreen";
import MyCartScreen from "./src/screens/MyCartScreen";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    MyCart: MyCartScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "My Clothes",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
