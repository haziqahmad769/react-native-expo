import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        Edit app/index.tsx to edit this screen.
      </Text>

      {/* <Link href={"/about"}>About screen</Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //is column direction by default
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  content: {
    fontSize: 52,
  },
});
