import AllWords from "../store/allWords";

const rootReducer = (state, action)=>{

    let activeGuess = state.guesses[state.try];
    let newGuesses = state.guesses;
    let curGuessed = state.guessed;

    let searchArray=(str)=>{
        for (let i=0; i<AllWords.length; i+=1){
            if (str.toString() === AllWords[i].toString()){
                return true;
            }
        }
        return false;
    }

    switch (action.type) {
        case "InputLetter":{
            let nL;
            if (!state.end) {
                const idx = activeGuess.indexOf('');
                if (activeGuess.includes("" && idx < state.answer.length)) {
                    activeGuess[idx] = action.val;
                }
            }

            newGuesses[state.try] = activeGuess;

            nL = {
                ...state,
                guesses: newGuesses,
                change: !state.change
            }

            return nL;
        }



        case "Delete": {

            let nD;

            if (!state.end) {
                let item;
                let stop = false;


                for (let i=4;  i >= 0;  i -= 1) {
                    if (!stop) {
                        if (activeGuess[i] !== '') {
                            item = activeGuess[i];
                            stop = true;
                        }
                    }
                }


                const idx = activeGuess.lastIndexOf(item);
                activeGuess[idx] = '';

                newGuesses[state.try] = activeGuess;

                nD = {
                    ...state,
                    guesses: newGuesses,
                    change: !state.change
                }

                return nD;
            }
            break;
        }



        case "SubmitGuess":
            let newTry = state.try+1;
            let win = state.win;
            let end = state.end;
            let loss = false;
            let nG;

            if (activeGuess.indexOf('') === -1  &&  !state.end){
                newGuesses[state.try] = activeGuess;

                //first check to see if it's a word
                if (searchArray(activeGuess.join(''))){
                    //then to see if the guess matches the answer
                    if (activeGuess.join('') === state.answer.join('')){
                        win = true;
                        end = true;
                    }

                    if (newTry === 5){
                        end = true;
                        if (!win){
                            loss = true;
                        }
                    }

                    curGuessed[newTry-1] = activeGuess;

                    nG = {
                        ...state,
                        guesses:newGuesses,
                        try:newTry,
                        change:!state.change,
                        win:win,
                        lose:loss,
                        end:end,
                        guessed:curGuessed
                    }

                    return nG;
                }

                else {
                    nG = {
                        ...state,
                        notWord:true
                    }

                    return nG;
                }



            }
            else{
                nG = {
                    //when you cant submit any more guesses you will return state
                    //and you will give pop up message saying the game is over
                    //and if they want to continue they need to press New Game Button
                    ...state
                }
                return nG;
            }


        default:{
            return state;
        }



        case "ModeChange":{
            let newColor = "";

            if (state.colorNum%2 === 0)
                newColor = "white";
            else
                newColor = "black";

            return {
                ...state,
                colorMain: newColor,
                colorNum: state.colorNum+1,
                change: !state.change
            };
        }



        case "Reset":{

            return {
                ...state,
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
                notWord:false
            };
        }

        case "NotWord":{

            return {
                ...state,
                notWord:false
            };
        }


    }

    return state;
}

export default rootReducer;
