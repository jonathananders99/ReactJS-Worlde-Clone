import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NotWord} from "../../redux/actions/notWord";


function NotAWord() {
    const color = useSelector(state=>state.colorMain);
    const dispatch = useDispatch();

    return (
        <button className={"button"} style={{alignItems:"left", borderColor:color}} onClick = {()=>dispatch(NotWord())}>Continue</button>
    );
}

export default NotAWord;