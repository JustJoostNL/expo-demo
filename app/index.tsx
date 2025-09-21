import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import * as Notifications from "expo-notifications";

export default function Index() {
  const [data, setData] = useState<string | undefined>(undefined);

  useEffect(() => {
    (async () => {
      console.log("getting token");
      const data = await Notifications.getExpoPushTokenAsync();
      console.log("this log never shows because the function does not resolve");
      setData(data.data);
    })();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "red" }}>{data ?? "no data"}</Text>
    </View>
  );
}
