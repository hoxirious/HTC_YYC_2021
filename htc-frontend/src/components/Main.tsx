import { postImage } from "apis/services/lambda-service";
import "./Main.sass"
import { WebcamCapture } from "./WebcamCapture";

export const Main = () => {
    
    return (
        <div className="main">
            <p className="title">Let us decide your mood</p>
            <WebcamCapture />
        </div>
    );
}