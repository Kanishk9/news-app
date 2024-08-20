import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

import { decode } from "html-entities";
import { extractDateTime } from "../utils/utils";

const NewsPost = ({ route }) => {
  const news = route.params;

  return (
    <ScrollView style={styles.scrollviewContainer}>
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>{decode(news.title)}</Text>
        </View>
        <View style={styles.authorContainer}>
          <Text style={styles.authorText}>-{news.author || "Unknown"}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>
            {extractDateTime(news.published_at)}
          </Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{decode(news.description)}</Text>
        </View>
        <View style={styles.sourceContainer}>
          <Text>Source:-</Text>
          <Text>{news.source}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default NewsPost;

const styles = StyleSheet.create({
  scrollviewContainer: {
    backgroundColor: "#70C391",
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 30,
  },
  headingContainer: {
    padding: 10,
  },
  authorContainer: {
    padding: 10,
    alignSelf: "flex-end",
  },
  dateContainer: {
    padding: 10,
  },
  descriptionContainer: {
    padding: 10,
  },
  headingText: {
    fontSize: 34,
    fontWeight: "bold",
  },
  authorText: {
    fontSize: 16,
  },
  dateText: {
    fontSize: 18,
    fontStyle: "italic",
  },
  descriptionText: {
    fontSize: 18,
    fontWeight: "400",
  },
  sourceContainer: {
    padding: 10,
  },
});
