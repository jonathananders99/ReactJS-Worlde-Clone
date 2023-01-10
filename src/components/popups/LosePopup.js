import React from "react";
import Modal from "react-modal";
import {useSelector} from "react-redux";
import ResetGame from "../extra buttons/ResetGame";

export default function LosePopup() {
    const lose = useSelector(state => state.lose);
    const answer = useSelector(state=>state.answer);

    return (
        <Modal isOpen={lose}
               ariaHideApp={false}
               className="modal"
               overlayClassName="overlay"
        >
            <h2 style={{textAlign:"center"}}>You Lose!</h2>
            <p style={{textAlign:"center", fontSize:"small"}}>The correct answer was: {answer}</p>
            {<ResetGame/>}
        </Modal>
    );
}