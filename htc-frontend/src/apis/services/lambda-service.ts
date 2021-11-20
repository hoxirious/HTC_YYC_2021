import axios from "axios";
import { Emotion } from "data/emotionMapper";
import dotenv from "dotenv";
dotenv.config();

export const postImage = async (
  image: string | null,
): Promise<Emotion | null> => {
  if (image) {
    const endpoint = process.env.REACT_APP_EMOTION_ENDPOINT as string;
    const result = await axios.post(endpoint, {
      image: image,
    });
    return result.data.body ? result.data.body.maxEmo : "CALM";
  }
  return null;
};
