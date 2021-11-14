import { postImage } from "apis/services/lambda-service";
import React, { useState } from "react";
import Webcam from "react-webcam";
import { useStoreActions } from "stores/StoreFront";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

export const  WebcamCapture =  () => {
  const setEmotion = useStoreActions((actions) => {
    return actions.emotionModel.setEmotion;
  });

  const [image, setImage] = useState("");
  const webcamRef = React.useRef(null);

  const capture = React.useCallback( async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    const result = await postImage(imageSrc);
    setEmotion(result);
  }, [webcamRef]);

  return (
    <>
      <div className="webcam-container">
        {image === "" ? (
          <>
            <Webcam
              audio={false}
              ref={webcamRef}
              height={400}
              width={800}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
            <button className="capture-button" onClick={capture}>
              Capture
            </button>
          </>
        ) : (
          <img src={image} />
        )}
      </div>
    </>
  );
};
// import React from "react";
// import Webcam from "react-webcam";

// const videoConstraints = {
//   width: 1280,
//   height: 720,
//   facingMode: "user",
// };

// export const WebcamCapture = () => {
//   const webcamRef = React.useRef(null);
//   const capture = React.useCallback(() => {
//     const imageSrc = webcamRef.current.getScreenshot();
//   }, [webcamRef]);

//   return (
//     <>
//       <Webcam
//         audio={false}
//         height={720}
//         ref={webcamRef}
//         screenshotFormat="image/jpeg"
//         width={1280}
//         videoConstraints={videoConstraints}
//       />
//       <button onClick={capture}>Capture photo</button>
//     </>
//   );
// };
