import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function ToDOItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)} style={styles.item}>
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginTop: 20,
    borderLeftWidth: 10,
    borderColor: "#ddd",
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  text: { fontSize: 20 },
});
