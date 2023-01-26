import './App.css'
import { BrowserRouter, Routes, Route
 } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Login from './views/Login';
import Translations from './views/Translations';
import Profile from './views/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Login/> } />
        <Route path="/Translations" element={<Translations/>}/>
        <Route path="/Profile" element={<Profile/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
