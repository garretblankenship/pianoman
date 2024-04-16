import { CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH } from "next/dist/shared/lib/constants";
import styles from "./styles.module.css";

export default function GameOver(props) {
const {setTimer} = props;
const {setScore} = props;
const {setGameKeys} = props;
//function handlePlayAgain(){
   // setTimer(5);
    //setScore(0);
//}

    return (
        <div className={styles.gameOverContainer}>
            <div className={styles.gameOver}>
                <button>PLAY AGAIN</button>
            </div>
        </div>
    );
}