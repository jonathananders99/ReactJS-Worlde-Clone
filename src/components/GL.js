import {useSelector} from "react-redux";

function GL(props){
    const colorMain = useSelector(state => state.colorMain);

    return(
        <div className="gl" style={{borderColor:colorMain, backgroundColor:props.color}}>
            {props.val}
        </div>
    )
}
export default GL;