import './App.css';
import { Route, Routes } from 'react-router-dom'
import NavBar from './component/NavBar';
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service';

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
      </Routes>

    </>
  );
}

export default App;
