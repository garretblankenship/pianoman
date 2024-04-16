

export default function generateGameKeys(){
    let gameKeys = [];
    let keysArray = ["a", "s", "d", "j", "k", "l"];
    
    while ( gameKeys.length < 301){
        const randomIndex = Math.floor(Math.random() * keysArray.length);
        gameKeys.push(keysArray[randomIndex]);
    }
    return gameKeys;
}