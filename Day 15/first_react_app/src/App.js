// import logo from './logo.svg';
// import './App.css';

import React from "react";
//import Factorial from "./Factorial";
import Calculator from "./Calculator";
import Factorial from './Factorial';



//Calculator
function App()
{
  return (
    <div>
      <Calculator num1={10} num2={5} operation={'subtract'}/>
      <Factorial num={5}/>
    </div>
  );
}

export default App;















// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
