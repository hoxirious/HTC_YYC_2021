import axios from "axios";

const form = new FormData();
form.append("productImage", "./Documents/", "stickers.jpg");
// Pass image stream from response directly to form

export const postImage = async (form: FormData) => {
  const response = await axios.post("https://example.com", form, {
    headers: {
    },
  });
};
