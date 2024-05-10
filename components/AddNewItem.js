import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from "react-native";

export default function AddNewItem({ submitHandler }) {
  const [text, setText] = useState("");
  const changeHandler = (value) => {
    setText(value);
  };
  const add = (str) => {
    submitHandler(str);
    setText("");
  };
  return (
    <View style={styles.addNewItemContainer}>
      <TextInput style={styles.input} placeholder="new to-do..." onChangeText={changeHandler} value={text} />
      <TouchableOpacity onPress={() => add(text)} style={styles.addBtn}>
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  addNewItemContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-between",
  },
  input: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 16,
    width: "80%",
  },
  addBtn: {
    backgroundColor: "#87CEEB",
    paddingHorizontal: 23,
    paddingVertical: 16,
    borderRadius: 5,
  },
  btnText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
