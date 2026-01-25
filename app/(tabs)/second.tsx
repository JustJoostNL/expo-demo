import { Text, View } from "react-native";

export default function Second() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 20 }}>
      <Text style={{ color: "white" }}>Second Tab</Text>
      <Text style={{ color: "white" }}>
        Video still plays in the background, while it should unmount...
      </Text>
    </View>
  );
}
