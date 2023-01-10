import React from "react";
import Modal from "react-modal";
import {useSelector} from "react-redux";
import NotAWord from "../extra buttons/NotAWord";

export default function NotWordPopup() {
    const notWord = useSelector(state => state.notWord);

    return (
        <Modal isOpen={notWord}
               ariaHideApp={false}
               className="modal"
               overlayClassName="overlay"
        >
            <h2 style={{textAlign:"center"}}>Not a Valid Word</h2>
            <NotAWord/>
        </Modal>
    );
}