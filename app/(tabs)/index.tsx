import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useTheme from "../hooks/useTheme";

export default function Index() {
  const { toggleDarkMode } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        Edit app/index.tsx to edit this screen.
      </Text>

      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>toggle the mode</Text>
      </TouchableOpacity>

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
