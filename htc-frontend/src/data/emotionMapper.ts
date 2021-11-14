export const getPlaylist = (emotion: Emotion): MappedList => {
  return emotionMap[emotion];
};

export const emotionMap = {
  HAPPY: "37i9dQZF1DXdPec7aLTmlC",
  SAD: "6nxPNnmSE0d5WlplUsa5L3",
  CALM: "6IKQrtMc4c00YzONcUt7QH",
  ANGRY: "6zi7YF4FPL27vmPDlOzD43",
  CONFUSED: "43XObCYwWhKwv5hdQRnua4",
  DISGUSTED: "6aeg0C0VgdFFLr6bZZvxDp",
  SUPRISED: "56ECBy7myR2MrJA6WUQTSf",
  UNKNOWN: "4JBOdWnCSTocIqUogwWDQ5",
  FEAR: "37i9dQZF1EIdTyqrt0mCSD",
};

export type Emotion = keyof typeof emotionMap;
export type MappedList = typeof emotionMap[Emotion];
