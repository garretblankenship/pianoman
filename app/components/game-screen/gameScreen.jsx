'use client'
import styles from "./styles.module.css";
import { useRef, useEffect, useState } from "react";
import GameOver from "../game-over/gameOver";
import generateGameKeys from "../games/level1";

export default function GameScreen() {
    const inputRef = useRef(null);
    const [gameKeys, setGameKeys] = useState(generateGameKeys());
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(5);
    const [timerRunning, setTimerRunning] = useState(false);
    const [isWrong, setIsWrong] = useState(false);

    useEffect(()=>{
        inputRef.current.focus();
    }, [])

    function handleInputBlur(){
        inputRef.current.focus();
    }

    function handleInputChange(event){

        if (!timerRunning){
            setTimerRunning(true);
            startTimer();
        }

        if (!isWrong && timer > 0) {
            const playerKey = event.target.value;
            const gameKey = gameKeys[gameKeys.length - 1];       
            
            if(playerKey === gameKey){
                correctChoice();
            }else{
                wrongChoice();
            }
        }
    }

    function correctChoice(){
        console.log("correct");
        setGameKeys(gameKeys.slice(0,-1));
        setScore(score + 1);
    }

    function wrongChoice(){
        setIsWrong(true);

        setTimeout(() => {
            setIsWrong(false);
        }, 2000);
    }

    function startTimer(){
        const timerInterval = setInterval(() =>{
            setTimer((time) => {
                if (time > 0) {
                    return time - 1;
                } else {
                    clearInterval(timerInterval);
                    return 0;
                }
            });
        }, 1000);
    }

    function resetGame() {
        setTimer(5);
        setScore(0);
        setGameKeys(generateGameKeys());
        setTimerRunning(false);
    }

    return (
        <div>
            <header className={styles.scoreboard}>
                <div>
                    <p>Timer:</p>
                    <p>{timer} sec</p>
                </div>
                <div className={styles.instructionBox}>
                    <p>Press the key matching the yellow block inside the green space to start the timer and earn points!</p>
                </div>
                <div>
                    <p>Score:</p>
                    <p>{score} pts</p>
                </div>
            </header>
            <main className={styles.gameboard}>
                <input type="text" ref={inputRef} onBlur={handleInputBlur} onChange={handleInputChange} value={""}/>
                {gameKeys.slice(-4).map((item) => {
                    return (
                        <section className={isWrong ? styles.redBar : ""}>
                            <ul>
                                <li className={item === "a" ? styles.selected : styles.unselected}></li>
                                <li className={item === "s" ? styles.selected : styles.unselected}></li>
                                <li className={item === "d" ? styles.selected : styles.unselected}></li>
                                <li className={item === "j" ? styles.selected : styles.unselected}></li>
                                <li className={item === "k" ? styles.selected : styles.unselected}></li>
                                <li className={item === "l" ? styles.selected : styles.unselected}></li>
                            </ul>
                        </section>
                    )
                })}
                <ul className={styles.legend}>
                    <li>a</li>
                    <li>s</li>
                    <li>d</li>
                    <li>j</li>
                    <li>k</li>
                    <li>l</li>
                </ul>
            </main>
            {timer <= 0 ? <GameOver resetGame={resetGame}/> : ""}
        </div>
    );
}