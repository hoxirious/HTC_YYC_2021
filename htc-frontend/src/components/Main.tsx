import "./Main.sass"
import { WebcamCapture } from "./WebcamCapture";

export const Main = () => {
    
    return (
        <div className="main">
            <p className="title">Let us decide your mood</p>
            <WebcamCapture />
            <button className="capture-button" >Capture</button>
        </div>
    );
}