import axios from "axios";

export const postImage = async (image: string): Promise<string> => {
  const result = await axios.post(
    "https://7qp66ux023.execute-api.us-west-1.amazonaws.com/beta/get-emo",
    { image: image },
  );
  return result.data.body.maxEmo;
};
