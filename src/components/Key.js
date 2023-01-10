import {useDispatch} from "react-redux";
import {InputLetter} from "../redux/actions/inputLetter";

function Key(props){

    const dispatch = useDispatch();

    return(
        <div className="key" onClick={()=>dispatch(InputLetter(props.val))} style={{backgroundColor:props.color}}>
            {props.val}
        </div>
    )
}

export default Key;