import { StyleSheet, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

import SearchBar from "../components/SearchBar";
import Post from "../components/Post";

//Enter your own API key below
const API_KEY = "";
const BASE_URL = `https://api.mediastack.com/v1/news?countries=in&sort=popularity&access_key=${API_KEY}`;

const NewsFeed = ({ navigation }) => {
  const [fetchedData, setFetchedData] = useState([]);
  const [articles, setArticles] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      if (data.data) {
        setFetchedData(data.data);
        setArticles(data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <SearchBar placeholder="Search News" data={fetchedData} setFinalState={setArticles} />
      <View style={styles.postContainer}>
        <FlatList
          data={articles}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Post
              title={item.title}
              author={item.author}
              date={item.published_at}
              handlePress={() => navigation.navigate("newsPost", item)}
            />
          )}
        />
      </View>
    </View>
  );
};

export default NewsFeed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
    alignSelf: "stretch",
    backgroundColor: "#1B2432",
  },
  postContainer: {
    flex: 1,
  },
});
