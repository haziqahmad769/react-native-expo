import { createHomeStyles } from "@/assets/styles/home.styles";
import Header from "@/components/Header";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useTheme from "../hooks/useTheme";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();

  // const styles = createStyles(colors);

  const homeStyles = createHomeStyles(colors);

  // const todos = useQuery(api.todos.getTodos);
  // console.log(todos);
  // const addTodo = useMutation(api.todos.addTodo);

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={homeStyles.container}
    >
      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView style={homeStyles.safeArea}>
        <Header />
        {/* <Text style={styles.content}>
        Edit app/index.tsx to edit this screen.
      </Text> */}

        <TouchableOpacity onPress={toggleDarkMode}>
          <Text>toggle the mode</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={() => addTodo({ text: "walk the dog" })}>
        <Text>Add a new to do</Text>
      </TouchableOpacity> */}

        {/* <Link href={"/about"}>About screen</Link> */}
      </SafeAreaView>
    </LinearGradient>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, //is column direction by default
//     // flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "red",
//   },
//   content: {
//     fontSize: 52,
//   },
// });

// const createStyles = (colors:ColorScheme) => {
//   const styles = StyleSheet.create({
//   container: {
//     flex: 1, //is column direction by default
//     // flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     gap:10,
//     backgroundColor:colors.bg,

//   },
//   content: {
//     fontSize: 52,
//   },
// });
// return styles;
// }
