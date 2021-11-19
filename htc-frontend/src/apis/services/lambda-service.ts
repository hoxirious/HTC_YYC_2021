import axios from "axios";
import { Emotion } from "data/emotionMapper";

export const postImage = async (
  image: string | null,
): Promise<Emotion | null> => {
  if (image) {
    const result = await axios.post(
      "https://7qp66ux023.execute-api.us-west-1.amazonaws.com/beta/get-emo",
      { image: image },
    );
    return result.data.body ? result.data.body.maxEmo : "CALM";
  }
  return null;
};
