import { action, Action } from "easy-peasy";


interface EmotionState {
  emotion: string;
}

interface EmotionAction {
  setEmotion: Action<EmotionModel, string>;
}

interface EmotionThunk {
}

export interface EmotionModel
  extends EmotionState,
    EmotionAction,
    EmotionThunk {}

export const emotionModel: EmotionModel = {
  // *State
  emotion: "",

  // *Action
  setEmotion: action((state,emo) => {
    state.emotion = emo;
  })

};