import { Alert, Text, TouchableOpacity, View } from "react-native";
import * as Sharing from "expo-sharing";

export default function Index() {
  const handleShare = async () => {
    Sharing.shareAsync("https://google.com").catch((error) => {
      Alert.alert("Error", error.message);
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={handleShare} style={{ marginBottom: 20 }}>
        <Text style={{ color: "red" }}>Click here to share</Text>
      </TouchableOpacity>
    </View>
  );
}
