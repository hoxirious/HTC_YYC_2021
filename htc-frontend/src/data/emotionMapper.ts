
export const getPlaylist = (emotion: Emotion):MappedList =>{
    return emotionMap[emotion];
}

export const emotionMap = {
   "HAPPY" : "37i9dQZF1DXdPec7aLTmlC",
   "SAD" : "6nxPNnmSE0d5WlplUsa5L3",
   "CALM" : "6IKQrtMc4c00YzONcUt7QH"
}

export type Emotion = keyof typeof emotionMap;
export type MappedList = typeof emotionMap[Emotion];

