import AllWords from "./allWords";

function initState(){

    return {
        guesses: [
            ['','','','',''],
            ['','','','',''],
            ['','','','',''],
            ['','','','',''],
            ['','','','','']
        ],
        guessed: [
            ['','','','',''],
            ['','','','',''],
            ['','','','',''],
            ['','','','',''],
            ['','','','','']
        ],
        try:0,
        answer:AllWords[Math.floor(Math.random() * AllWords.length)],
        change:false,
        end:false,
        win:false,
        lose:false,
        notWord:false,
        colorMain:"black",
        colorNum:0
    }
}

export default initState;