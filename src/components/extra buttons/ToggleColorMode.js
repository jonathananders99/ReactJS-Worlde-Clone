import React from 'react';
import {ModeChange} from "../../redux/actions/modeChange";
import {useDispatch, useSelector} from "react-redux";

function ToggleColorMode() {
    const dispatch = useDispatch();
    const color = useSelector(state=>state.colorMain);

    return (
        <button className={"button"} style={{alignSelf:"right", borderColor:color}} onClick = {()=>dispatch(ModeChange())}>Toggle Light Mode</button>
    );
}

export default ToggleColorMode;