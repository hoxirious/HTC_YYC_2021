import { ItemProps } from "App";
import React from "react";
import "./Player.sass";

export interface PlayerProps {
  item: ItemProps
  is_playing: boolean
  progress_ms: number
}


const Player = ({ item, is_playing, progress_ms }: PlayerProps) => {

  const backgroundStyles = {
    backgroundImage: `url(${item.item.album.images[0].url})`,
  };

  const progressBarStyles = {
    width: (progress_ms * 100 / item.item.duration_ms) + '%'
  };

  return (
    <div className="App">
      <div className="main-wrapper">
        <div className="now-playing__img">
          <img src={item.item.album.images[0].url} />
        </div>
        <div className="now-playing__side">
          <div className="now-playing__name">{item.item.name}</div>
          <div className="now-playing__artist">
            {item.item.artists[0].name}
          </div>
          <div className="now-playing__status">
            {is_playing ? "Playing" : "Paused"}
          </div>
          <div className="progress">
            <div
              className="progress__bar"
              style={progressBarStyles}
            />
          </div>
        </div>
        <div className="background" style={backgroundStyles} />{" "}
      </div>
    </div>
  );
}
export default Player;