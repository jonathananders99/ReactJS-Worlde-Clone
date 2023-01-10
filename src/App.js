import Keys from "./components/Keys";
import Guesses from "./components/Guesses";
import ExtraButtons from "./components/ExtraButtons";
import {useSelector} from "react-redux";



function App() {
    const colorMain = useSelector(state => state.colorMain);
    return (
        <div className="App" style={{backgroundColor:colorMain}}>
            {<ExtraButtons/>}
            {<Guesses/>}
            {<Keys/>}
        </div>
  );
}

export default App;
