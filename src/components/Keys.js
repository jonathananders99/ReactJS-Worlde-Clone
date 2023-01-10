import Key from "./Key";
import {useDispatch, useSelector} from "react-redux";
import {Delete} from "../redux/actions/delete";
import {SubmitGuess} from "../redux/actions/submitGuess";
import React from "react";

function Keys(){
    const keys ='qwertyuiopasdfghjklzxcvbnm'.split("");
    const dispatch = useDispatch();
    const answer = useSelector(state => state.answer);
    const guessed = useSelector(state => state.guessed);
    const change = useSelector(state=>state.change);

    React.useEffect(()=>{
    }, [guessed,change])

    //1:28:06 for ideas

    //have this function change into the 2 for loops and have it assign the colors from there
    //cycle thru 24 times/length of keyboard
    //if letter has been guessed it runs through the two loops to see if it is in the word

    let letterInGuessed =(curLetter)=>{
        let color = "#89898CFF";
        for (let i=0; i<5; i+=1){
            for (let x=0; x<5; x+=1) {

                //if curLetter is equal to a guessed letter
                if (curLetter === guessed[i][x]){

                    //if letter is in the right place
                    if (answer.toString()[x] === guessed[i][x]){
                        color = "#1e820c";
                    }
                    //if letter exists in the answer just a different place
                    else if (answer.toString().indexOf(guessed[i][x]) !== -1  &&  answer.toString()[x] !== guessed[i][x]  &&  guessed[i][x] !== ''  &&  color !== "#1e820c"){
                        color = "#d9b629";
                    }
                    //if letter isnt in the word
                    else if (guessed[i][x] !== ''  &&  color !== "#d9b629"  &&  color !== "#1e820c"){
                        color = "#820C0CFF";
                    }
                }
            }
        }
        return color;
    }
    
    
    let keys_run = keys.map((itm, idx)=>
        <Key key={idx} val={itm} color={letterInGuessed(itm)}/>
    )

    return(
        <div className="keys">
            {keys_run}
            <div className={"key submit"} onClick = {()=>dispatch(SubmitGuess())}>Enter</div>
            <div className={"key delete"} onClick = {()=>dispatch(Delete())}>Delete</div>
        </div>
    )
}

export default Keys;