import { useEvent } from "expo";
import { useVideoPlayer, VideoView } from "expo-video";

const hlsPlaylistUrl =
  "https://5b44cf20b0388.streamlock.net:8443/vod/smil:hls-maudios-prod.smil/playlist.m3u8";

const mp4VideoUrl = "https://mirror.selfnet.de/CCC/congress/2019/h264-hd/36c3-11235-eng-deu-fra-36C3_Infrastructure_Review_hd.mp4";

export default function Video() {
  const player = useVideoPlayer(
    {
      uri: hlsPlaylistUrl,
    },
    (player) => {
      player.play();
      player.allowsExternalPlayback = true;
      player.staysActiveInBackground = true;
    }
  );

  const data = useEvent(player, "availableAudioTracksChange");
  console.log("availableAudioTracksChange", data);

  return (
    <VideoView
      allowsPictureInPicture
      player={player}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
