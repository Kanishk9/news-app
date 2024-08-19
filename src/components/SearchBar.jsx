import { StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder || "Search"}
        value={searchText}
        onChangeText={setSearchText}
      />
      <Icon name="search" size={20} color="#888" style={styles.icon} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 20,
  },
  icon: {
    marginRight: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
  },
});
