// import logo from './logo.svg';
// import './App.css';

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

import './App.css';
import Navigation from './components/Navigation';
// import Main from './components/Main';
// import Players from './components/Players'
import Footer from './components/Footer';
import PlayerList from './components/Players';
// import { Players } from './shared/ListOfPlayers';
function App() {
    return (
        <div className='App'>
            <Navigation/>
         <PlayerList/>
          <Footer/>
        </div>
    );
}
export default App;
