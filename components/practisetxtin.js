import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

const Practisetxtin = () => {
  const [inputText, setInputText] = useState("");

  const onChangeHandler = (text) => {
    setInputText(text);
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Enter some text:</Text>
      <TextInput
        style={styles.input}
        placeholder="Type here"
        onChangeText={onChangeHandler}
        value={inputText}
      />
      <Text style={styles.text}>You typed: {inputText}</Text>
    </View>
  );
};

export default Practisetxtin;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    margin: 10,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#666",
    padding: 10,
    width: "80%",
    borderRadius: 5,
    marginBottom: 20,
  },
});
