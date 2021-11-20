import { Radio } from "components/Radio";
import { useStoreActions, useStoreState } from "stores/StoreFront";
import "styles/views/MainManager.sass";
import { WebcamCapture } from "../components/WebcamCapture";

export const MainManager = () => {
    const capture = useStoreActions(store => {
        return store.emotionModel.capture;
    })
    const emotion = useStoreState((store) => {
        return store.emotionModel.emotion;
    });

    return (
        <div className="main-manager">
            {emotion === "UNKNOWN" &&
                <div className="main-content">
                    <div className="main-content__left">
                        <p className="title">Let us decide your mood</p>
                        <button className="capture-button" onClick={() => capture()}>
                            Capture
                        </button>
                    </div>
                    <div className="main-content__right">
                        <WebcamCapture />
                    </div>
                </div>}
            {emotion !== "UNKNOWN" &&
                <div className="radio-content">
                    <Radio />
                </div>
            }
        </div>
    );
}