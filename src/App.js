import './App.css';
import Navigation from './components/Navigation';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import  Detail  from './components/Detail';
import {Contact} from './components/Contact';
import PlayerList  from './components/Players';

function App() {
    return (
        <div className='App'>
            <Navigation />
            <Routes>
                <Route path='/' element={<PlayerList />}></Route>
                <Route path='/detail/:id' element={<Detail />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
            </Routes>
        
            <Footer />
        </div>
    );
}
export default App;

