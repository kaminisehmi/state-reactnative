import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Import the heart icon from FontAwesome

const InstaLikedPost = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(100);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(likeCount - 1);
    } else {
      setLiked(true);
      setLikeCount(likeCount + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.likeCount}>{likeCount} Likes</Text>
      <TouchableOpacity onPress={handleLike}>
        <Icon
          name={liked ? "heart" : "heart-o"} // Filled heart if liked, otherwise empty heart
          size={30}
          color={liked ? "red" : "black"} // Red if liked, black if not
        />
      </TouchableOpacity>
    </View>
  );
};

export default InstaLikedPost;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  likeCount: {
    fontSize: 18,
    marginBottom: 10,
  },
});
