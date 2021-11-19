import { postImage } from "apis/services/lambda-service";
import React, { useState, useEffect } from "react";
import Webcam from "react-webcam";
import { useStoreActions, useStoreState } from "stores/StoreFront";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

export const WebcamCapture = () => {
  const setEmotion = useStoreActions((actions) => {
    return actions.emotionModel.setEmotion;
  });

  const { isCapture } = useStoreState((store) => {
    return store.emotionModel;
  });

  const [image, setImage] = useState("");
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    const result = await postImage(imageSrc);
    setEmotion(result);
  }, [webcamRef, setEmotion]);

  useEffect(() => {
    if (isCapture) {
      capture();
    }
  }, [isCapture, capture]);

  return (
    <div className="webcam-container">
      {image === "" ? (
        <Webcam
          audio={false}
          ref={webcamRef}
          height={400}
          width={800}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
      ) : (
        <img src={image} />
      )}
    </div>
  );
};
