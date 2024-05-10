import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingBottom: 14,
    backgroundColor: "#87CEEB",
    alignContent: "center",
    justifyContent: "center",
  },
  title: { color: "#fff", fontSize: 20, textAlign: "center" },
});
