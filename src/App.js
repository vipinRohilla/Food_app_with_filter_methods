import "./App.css";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import { useState } from 'react';

function App() {

  const[newChecked, setnewChecked] = useState([]);
  return (
    <>
      <div className="main-container">
        <LeftSide setnewChecked={setnewChecked}/>
        <RightSide newChecked={newChecked} />
      </div>
    </>
  );
}

export default App;
