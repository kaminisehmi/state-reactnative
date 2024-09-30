import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

const Practisestate = () => {
  const [name, Setname] = useState("Shaun");
  const [person, Setperson] = useState({ name: "Mario", age: 40 });
  const [current, setCurrent] = useState(true);
  const Handlepress = () => {
    Setname("Chin-li");
    Setperson({ name: "Luigi", age: 45 });
    setCurrent(false);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textcontainer}>My name is : {name}</Text>
      <Text style={styles.textcontainer}>
        My name is : {person.name} and My age is: {person.age}
      </Text>
      <Text style={styles.textcontainer}>
        {current ? "current session" : "next session"}
      </Text>
      <Button title="clickme" onPress={Handlepress}></Button>
    </View>
  );
};

export default Practisestate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  textcontainer: {
    fontSize: 26,
    color: "red",
  },
  buttoncontainer: {
    marginTop: 20,
  },
});
