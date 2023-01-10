import PopUp from "./popups/PopUp";
import ResetGame from "./extra buttons/ResetGame";
import ToggleColorMode from "./extra buttons/ToggleColorMode";
import React from 'react';

function ExtraButtons() {
    return (
        <div>
            {<PopUp/>}
            {<ResetGame/>}
            {<ToggleColorMode/>}
        </div>
    );
}

export default ExtraButtons;