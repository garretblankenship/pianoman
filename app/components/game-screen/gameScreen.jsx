'use client'
import styles from "./styles.module.css";
import { useRef, useEffect, useState } from "react";
import levelOneArray from "../games/level1";



export default function GameScreen() {
    const inputRef = useRef(null);
    const [gameKeys, setGameKeys] = useState(levelOneArray);
    


    useEffect(()=>{
        inputRef.current.focus();
    }, [])

    function handleInputBlur(){
        inputRef.current.focus();
    }

    function handleInputChange(event){
            console.log(event.target.value);
    }

    return (
        <div>
            <header className={styles.scoreboard}>
                <div>
                    <p>Timer:</p>
                    <p>60 sec</p>
                </div>
                <div>
                    <p>Score:</p>
                    <p>0 pts</p>
                </div>
            </header>
            <main className={styles.gameboard}>
                <input type="text" ref={inputRef} onBlur={handleInputBlur} onChange={handleInputChange} value={""}/>
                {gameKeys.slice(-4).map((item) => {
                    return (
                        <section>
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
            </main>
        </div>
    );
}