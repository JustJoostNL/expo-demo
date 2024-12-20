import { useVideoPlayer, VideoView } from "expo-video";

const testHlsUrl =
  "https://demo.unified-streaming.com/k8s/features/stable/no-handler-origin/tears-of-steel/tears-of-steel-trickplay.m3u8";

export default function Video() {
  const player = useVideoPlayer(
    {
      uri: testHlsUrl,
      metadata: {
        title: "Tears of Steel",
        artist: "Blender Foundation",
      },
    },
    (player) => {
      player.play();
      player.allowsExternalPlayback = true;
      player.staysActiveInBackground = true;
      player.showNowPlayingNotification = true;
    }
  );

  return (
    <VideoView
      allowsPictureInPicture
      player={player}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
