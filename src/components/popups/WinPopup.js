import React from "react";
import Modal from "react-modal";
import {useSelector} from "react-redux";
import ResetGame from "../extra buttons/ResetGame";

export default function WinPopup() {
    const win = useSelector(state => state.win);
    const answer = useSelector(state=>state.answer);

    return (
        <Modal isOpen={win}
               ariaHideApp={false}
               className="modal"
               overlayClassName="overlay"
        >
            <h2 style={{textAlign:"center"}}>You Win!</h2>
            <p style={{textAlign:"center", fontSize:"small"}}>You correctly guessed the word: {answer}</p>
            {<ResetGame/>}
        </Modal>
    );
}