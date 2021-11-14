import { action, Action, thunk, Thunk } from "easy-peasy";


interface EmotionState {
  emotion: string;
}

interface EmotionAction {
  setEmotion: Action<EmotionModel, string>;
}

interface EmotionThunk {
  // callService: Thunk<EmotionModel, never, any, EmotionModel, Promise<void>>;
  // fetchService: Thunk<EmotionModel, string, any, Promise<void>>;
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

  // *Thunk
  // callService: thunk(async (actions, _) => {
  //   try {
  //     action.setEmotion(postMessage());
  //   } catch (error) {
  //     console.error("Cannot fetch services info");
  //   }
  // }),
  // fetchService: thunk(async (action, payload) => {
  //   action.setService(payload);
  // }),
};