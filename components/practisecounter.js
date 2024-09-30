import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

const Practisecounter = () => {
  const [counter, setCounter] = useState(0);
  const onClickHandler = () => {
    setCounter(counter + 1);
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Counter is: {counter * 5}</Text>
      <Button title="Add" onPress={onClickHandler}></Button>
      <Text style={styles.text}>You clicked {counter} times</Text>
    </View>
  );
};

export default Practisecounter;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: 20,
    fontStyle: "italic",
    margin: 10,
  },
});
