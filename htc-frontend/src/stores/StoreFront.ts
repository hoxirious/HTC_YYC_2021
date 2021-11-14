import { createStore, createTypedHooks } from "easy-peasy";
import { emotionModel, EmotionModel } from "./misc/emotion.store";

export interface StoreModel {
  emotionModel: EmotionModel;
}

export const model: StoreModel = {
  emotionModel,
};

export const store = createStore(model);

const { useStoreActions, useStoreState } = createTypedHooks<StoreModel>();

export { useStoreActions, useStoreState };