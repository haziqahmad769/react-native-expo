import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useTheme from "../hooks/useTheme";

export default function Index() {
  const { toggleDarkMode } = useTheme();

  const todos = useQuery(api.todos.getTodos);
  console.log(todos);
  const addTodo = useMutation(api.todos.addTodo);

  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        Edit app/index.tsx to edit this screen.
      </Text>

      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>toggle the mode</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => addTodo({ text: "walk the dog" })}>
        <Text>Add a new to do</Text>
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
