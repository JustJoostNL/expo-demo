import { Button, View } from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";
import { router } from "expo-router";

export default function Index() {
  const player = useVideoPlayer(
    {
      uri: "https://demo.unified-streaming.com/k8s/features/stable/no-handler-origin/tears-of-steel/tears-of-steel-trickplay.m3u8",
    },
    (player) => {
      player.play();
    },
  );

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <VideoView player={player} style={{ width: 300, height: 200 }} />

      <Button title="Go to second route" onPress={() => router.push("/second")} />
    </View>
  );
}
