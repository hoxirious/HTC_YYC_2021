import "styles/views/MainManager.sass";
import { WebcamCapture } from "../components/WebcamCapture";

export const MainManager = () => {

    return (
        <div className="main">
            <p className="title">Let us decide your mood</p>
            <WebcamCapture />
        </div>
    );
}