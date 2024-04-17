import { CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH } from "next/dist/shared/lib/constants";
import styles from "./styles.module.css";
import generateGameKeys from "../games/level1";

export default function GameOver(props) {
    // const {setTimer, setScore, setGameKeys, setTimerRunning} = props;
    const { resetGame } = props;
    

    function handlePlayAgain(){
        resetGame();
    }

    return (
        <div className={styles.gameOverContainer}>
            <div className={styles.gameOver}>
                <button onClick={handlePlayAgain}>PLAY AGAIN</button>
            </div>
        </div>
    );
}