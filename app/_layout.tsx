import { Stack } from "expo-router";
import { View } from "react-native";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <View className="flex-1 bg-fuchsia-400">
      <Stack>
        <Stack.Screen name="home" options={{ headerShown: false }} />
        <Stack.Screen name="about" options={{ presentation: "modal" }} />
      </Stack>
    </View>
  );
}
