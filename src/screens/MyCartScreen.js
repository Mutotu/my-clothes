import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Context } from "../context/ClothesContext";
import { Feather } from "@expo/vector-icons";
import DUMMY_DATA from "../../data/DUMMY_DATA";

const MyCartScreen = ({ navigation }) => {
  const { state, addCloth } = useContext(Context);
  const singleCloth = DUMMY_DATA.find(
    (cloth) => cloth.id === navigation.getParam("id")
  );

  return (
    <View>
      <Text>Show screeen</Text>
      {/* <Feather
        name='plus'
        size={35}
        onPress={() => {
          addCloth(singleCloth);
        }}
      />
      <Image style={styles.tinyLogo} source={{ uri: singleCloth.img }}></Image>
      <Text>{singleCloth.type}</Text>
      <Text>{singleCloth.color}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 350,
    height: 350,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
export default MyCartScreen;
