import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/ClothesContext";
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const singleCloth = state.find(
    (cloth) => cloth.id === navigation.getParam("id")
  );

  return (
    <View>
      <Text>Show screeen</Text>
    </View>
  );
};

// ShowScreen.navigationOptions = ({ navigation }) => {
//   return {
//     headerRight: () => (
//       <TouchableOpacity
//         onPress={() =>
//           navigation.navigate("Edit", { id: navigation.getParam("id") })
//         }
//       >
//         <EvilIcons name='pencil' size={35} />
//       </TouchableOpacity>
//     ),
//   };
// };
const styles = StyleSheet.create({});
export default ShowScreen;