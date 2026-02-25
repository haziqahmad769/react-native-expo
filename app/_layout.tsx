import { Stack } from "expo-router";
import { ThemeProvider } from "./hooks/useTheme";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ title: "Home" }}></Stack.Screen>
        {/* <Stack.Screen name="about" options={{ title: "About" }}></Stack.Screen> */}
      </Stack>
    </ThemeProvider>
  );
}
