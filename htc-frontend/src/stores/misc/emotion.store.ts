import { Emotion } from "data/emotionMapper";
import { action, Action } from "easy-peasy";

interface EmotionState {
  emotion: Emotion | null;
  isCapture: boolean;
}

interface EmotionAction {
  setEmotion: Action<EmotionModel, Emotion | null>;
  capture: Action<EmotionModel, void>;
}

interface EmotionThunk {}

export interface EmotionModel
  extends EmotionState,
    EmotionAction,
    EmotionThunk {}

export const emotionModel: EmotionModel = {
  // *State
  emotion: "UNKNOWN",
  isCapture: false,

  // *Action
  setEmotion: action((state, emo) => {
    state.emotion = emo;
  }),
  capture: action((state) => {
    state.isCapture = true;
  }),
};
