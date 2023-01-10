import React from 'react';
import Popup from 'reactjs-popup';

function PopUp() {

    return (
        <Popup
            trigger={<button className="rules">Wordle Unlimited</button>}>
            <div>
                <h2 style={{textAlign:"center"}}>Welcome To Wordle Unlimited!</h2>
                <br/>
                <h3>Rules:</h3>
                <li>Guess the randomly picked 5 letter word using the below keyboard.</li>
                <li>You can only guess real 5 letter words (some real words have been omitted).</li>
                <li>You only have 5 guesses.</li>
                <li>To input letters you need to use the keyboard on the screen.</li>
                <br/>
                <h3>Hints:</h3>
                <li>There are over 12k words to choose from</li>
                <li>Letters that light up green are in the correct place.</li>
                <li>Letters that light up yellow are in the word but are not in the right place.</li>
                <li>Letters that light up red are not in the word.</li>
                <li>Pressing the reset button will reset everything minus light mode and a new word will be chosen.</li>
                <li>Letters that light up red are not in the word.</li>
            </div>
        </Popup>
    );
}

export default PopUp;