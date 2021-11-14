import { Emotion } from "data/emotionMapper";
import { action, Action } from "easy-peasy";

interface EmotionState {
  emotion: Emotion;
}

interface EmotionAction {
  setEmotion: Action<EmotionModel, Emotion>;
}

interface EmotionThunk {}

export interface EmotionModel
  extends EmotionState,
    EmotionAction,
    EmotionThunk {}

export const emotionModel: EmotionModel = {
  // *State
  emotion: "UNKNOWN",

  // *Action
  setEmotion: action((state, emo) => {
    state.emotion = emo;
  }),
};
