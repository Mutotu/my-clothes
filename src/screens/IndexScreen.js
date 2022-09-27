import React, { useContext } from "react";

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { DUMMY_DATA } from "../../data/DUMMY_DATA";

const IndexScreen = ({ navigation }) => {
  console.log(DUMMY_DATA);
  return (
    <View>
      <Text>Index Screen</Text>
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {};

const styles = StyleSheet.create({});

export default IndexScreen;
