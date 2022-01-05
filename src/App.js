
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Timeline from './Components/Timeline/Timeline';

function App() {
  return (

    <div style={{ backgroundColor: '#f3f2ef' }} className="App">




      <BrowserRouter>

        <Header></Header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
