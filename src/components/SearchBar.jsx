import {
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState("");

  const searchInputRef = useRef(null);

  const handleOutsideClick = () => {
    if (searchInputRef.current) {
      searchInputRef.current.blur(); // Blur the input field
    }
  };

  useEffect(() => {
    const searchedArticles = props.data.filter((article) => {
      if (article.title.toLowerCase().includes(searchText.toLowerCase()))
        return article;
    });
    props.setFinalState(searchedArticles);
  }, [searchText]);

  return (
    <TouchableWithoutFeedback onPress={handleOutsideClick}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={props.placeholder || "Search"}
          value={searchText}
          ref={searchInputRef}
          onChangeText={setSearchText}
        />
        <Icon name="search" size={20} color="#888" style={styles.icon} />
      </View>
    </TouchableWithoutFeedback>
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
