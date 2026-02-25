import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";
import { ThemeProvider } from "./hooks/useTheme";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

export default function RootLayout() {
  return (
    <ConvexProvider client={convex}>
      <ThemeProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="(tabs)"
            options={{ title: "Home" }}
          ></Stack.Screen>
          {/* <Stack.Screen name="about" options={{ title: "About" }}></Stack.Screen> */}
        </Stack>
      </ThemeProvider>
    </ConvexProvider>
  );
}
