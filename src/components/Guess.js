import GL from "./GL";
import {useSelector} from "react-redux";

function Guess(props){
    const answer = useSelector(state => state.answer);
    const guessed = useSelector(state => state.guessed);
    
    let runGL=(itm, idx, row)=>{
        let color = "#b3b4ba";
        for (let x=0; x<5; x+=1){
            //if letter exists in the answer just a different place
            if (answer.toString().indexOf(guessed[row][idx]) !== -1  &&  answer.toString()[idx] !== guessed[row][idx]  &&  guessed[row][idx] !== ''){
                color = "#d9b629";
            }
            //if letter is in the right place
            else if (answer.toString()[idx] === guessed[row][idx]){
                color = "#1e820c";
            }
            //if letter isnt in the word
            else if (guessed[row][idx] !== ''){
                color = "#820C0CFF";
            }
            //if it isnt a letter and a space
            else if (guessed[row][idx] === ''){
                color = "#89898CFF";
            }
        }

        return color;
    }

    let gl_run = props.val.map((itm, idx)=>
        <GL key={idx} val={itm} color={runGL(itm, idx, props.row)}/>
    );

    return(
        <div className="guess">
            {gl_run}
        </div>
    )
}
export default Guess;