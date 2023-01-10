import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Reset} from "../../redux/actions/reset";


function ResetGame() {
    const color = useSelector(state=>state.colorMain);
    const dispatch = useDispatch();

    return (
        <button className={"button"} style={{alignItems:"left", borderColor:color}} onClick = {()=>dispatch(Reset())}>Complete Game Reset</button>
    );
}

export default ResetGame;