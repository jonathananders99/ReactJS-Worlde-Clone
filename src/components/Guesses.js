import Guess from "./Guess";
import React from "react";
import {useSelector} from "react-redux";
import WinPopup from "./popups/WinPopup";
import LosePopup from "./popups/LosePopup";
import NotWordPopup from "./popups/NotWordPopup";

function Guesses(){

    const guesses = useSelector(state => state.guesses);
    const change = useSelector(state=>state.change);


    React.useEffect(()=>{

    }, [change, guesses])

    let guess_run = guesses.map((itm, idx)=>
        <Guess key={idx} val={itm} row={idx}/>
    )

    return(
        <div className="guesses">
            {guess_run}
            {<WinPopup/>}
            {<LosePopup/>}
            {<NotWordPopup/>}
        </div>
    );
}

export default Guesses;