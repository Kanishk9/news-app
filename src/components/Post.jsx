import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { decode } from "html-entities";
import { extractDateTime } from "../utils/utils";

const Post = ({title, author, date, handlePress}) => {
  return (
    <TouchableOpacity onPress={() => handlePress()}>
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>{decode(title)}</Text>
        </View>
        <View style={styles.authorContainer}>
          <Text>{decode(author) || "Unknown"}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>{extractDateTime(date)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#70C391",
    borderRadius: 20,
    padding: 30,
    marginVertical: 10,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  dateContainer: {
    padding: 10,
  },
  authorContainer: {
    marginVertical: 5,
    paddingBottom: 10,
    alignSelf: "flex-end",
  },
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  dateText: {
    fontStyle: "italic",
  },
});
