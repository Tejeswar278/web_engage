import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./components/Home"
import Welcome from './components/Welcome';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
