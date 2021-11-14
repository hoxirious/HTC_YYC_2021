import { getPlaylist } from "data/emotionMapper";
import React from "react";
import SpotifyPlayer from "react-spotify-player";
import { useStoreState } from "stores/StoreFront";
import "./Player.sass";

const Player = () => {
  const size = {
    width: "100%",
    height: 300,
  };
  const view = "list"; // or 'coverart'
  const theme = "black"; // or 'white'
  const emotion = useStoreState((store) => {
    return store.emotionModel.emotion;
  });
  const playlist = `spotify:playlist:${getPlaylist(emotion)}`;
  return (
    <>
      {console.log(emotion)}
      {emotion && (
        <SpotifyPlayer
          autoPlay={true}
          uri={playlist}
          size={size}
          view={view}
          theme={theme}
        />
      )}
    </>
  );
};
export default Player;
