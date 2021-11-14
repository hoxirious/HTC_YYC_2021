import { authEndpoint, clientId, redirectUri, scopes } from 'apis/data/config';
import { sendRequest } from 'apis/utils/api.util';
import axios from 'axios';
import Player, { PlayerProps } from 'components/Player';
import { WebcamCapture } from 'components/WebcamCapture';
import React, { useCallback, useEffect, useState } from 'react';
import './App.sass';
import logo from './logo.svg';

export interface ItemProps {
  item: {
    album: {
      images: [{ url: string }]
    }
    name: string,
    artists: [{ name: string }],
    duration_ms: number,
  }
}
// export const fetchCurrentPlaying = async (): Promise<PlayerProps | null> => {
//   const result = await sendRequest<never, PlayerProps>({
//     endpointInfo: {
//       endpoint: "https://api.spotify.com/v1/me/player/",
//       method: "get",
//     }
//   });
//   return result.result;
// };
export const fetchCurrentPlaying = (): string => {
  const token = getToken();
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  console.log(token);
  axios
    .get("https://api.spotify.com/v1/me/player/", config)
    .then(response => {
      console.log(response.data);
      return response.data;
    })
  return "";
};


export const getToken = async (): Promise<string> => {
  const body = {
    "grant_type": "authorization_code",
    "redirect_uri": redirectUri,
    "client_id": clientId,
  };
  await axios
    .post("https://accounts.spotify.com/api/token/", body)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return "";
    });

  return "";

};

function App() {
  const [token, setToken] = useState<string>("");
  // const [no_data, set_no_data] = useState<boolean>(false);
  const [response, setResponse] = useState<PlayerProps>();

  const getCurrentlyPlaying = async (token: string) => {
    // Make a call using the token
    const result = fetchCurrentPlaying();
    // if (result) {
    //   setResponse(result);
    // }
  }
  const tick = useCallback(() => {
    if (token) {
      getCurrentlyPlaying(token);
    }
  }, [token]);




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <WebcamCapture /> */}
        <a
          className="btn btn--loginApp-link"
          href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
        >
          Login to Spotify
        </a>
        {token && response && (
          <Player
            item={response?.item}
            is_playing={response?.is_playing}
            progress_ms={response?.progress_ms}
          />
        )}
        {/* {no_data && (
            <p>
              You need to be playing a song on Spotify, for something to appear here.
            </p>
          )} */}
      </header>
    </div>
  );
}
export default App;
