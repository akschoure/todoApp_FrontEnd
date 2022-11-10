import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import FirstComponent from './Components/FirstComponent';
import SecondComponent from './Components/SecondComponent';
import ThirdComponent from './Components/ThirdComponent';
import Counter from './Counter/Counter';

//import FirstComponent from  


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

class App extends Component {
  render(){
    return(
     <div className='name'>
     <Comps></Comps>
     
     </div>
    );
  }
}

class Comps extends Component {
  render(){
    return(
     <div className='name'>
     <FirstComponent></FirstComponent>
     <SecondComponent></SecondComponent>
     <ThirdComponent></ThirdComponent>
     <Counter></Counter>
     </div>
    );
  }
}





export default App;