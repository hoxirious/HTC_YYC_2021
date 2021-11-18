import { getPlaylist } from "data/emotionMapper";
import React from "react";
import SpotifyPlayer from "react-spotify-player";
import { useStoreState } from "stores/StoreFront";
import "styles/components/Radio.sass";

export const Radio = () => {
  const size = {
    width: "50%",
    height: 300,
  };
  const view = "coverart"; // or 'coverart'
  const theme = "white"; // or 'white'
  const emotion = useStoreState((store) => {
    return store.emotionModel.emotion;
  });
  const structured_playlist = `spotify:playlist:${getPlaylist(emotion)}`;
  return (
    <>
      {emotion && (
        <SpotifyPlayer
          autoPlay={true}
          uri={structured_playlist}
          size={size}
          view={view}
          theme={theme}
        />
      )}
    </>
  );
};
