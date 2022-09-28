import React, { useContext, useState } from "react";
import DUMMY_DATA from "../../data/DUMMY_DATA";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { Context } from "../context/ClothesContext";

const IndexScreen = ({ navigation }) => {
  // const { state } = useContext(Context);
  const [data, setData] = useState(DUMMY_DATA);
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("MyCart")}>
        <Text>My Cart</Text>
      </TouchableOpacity>

      <FlatList
        data={data}
        keyExtractor={(img) => img.id}
        renderItem={({ item }) => {
          console.log(item.img);
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.container}>
                <Image
                  style={styles.tinyLogo}
                  source={{ uri: item.img }}
                ></Image>
                <Text>{item.color}</Text>
                <Text>{item.type}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {};

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

export default IndexScreen;
