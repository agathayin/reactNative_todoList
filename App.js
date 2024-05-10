import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./components/Header";
import ToDOItem from "./components/ToDoItem";
import AddNewItem from "./components/AddNewItem";

export default function App() {
  const [toDos, setToDos] = useState([
    { text: "go to the gym", key: 0 },
    { text: "buy some food", key: 1 },
    { text: "create an app", key: 2 },
    { text: "do code review", key: 3 },
  ]);
  const pressHandler = (key) => {
    setToDos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };
  const submitHandler = (text) => {
    setToDos((prevToDos) => {
      return [{ text: text, key: Math.random().toString() }, ...prevToDos];
    });
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddNewItem submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList data={toDos} renderItem={({ item }) => <ToDOItem item={item} pressHandler={pressHandler} />} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: { padding: 40 },
  list: { marginTop: 20 },
});
