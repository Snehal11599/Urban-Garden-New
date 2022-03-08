import './App.css';
import { Route, Routes } from 'react-router-dom'
import NavBar from './component/NavBar';
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service';
import Footer from './component/Footer';
import ContactUs from './component/ContactUs';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}  />
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/contactus" element={<ContactUs/>}/>
      </Routes>
      <Footer/>

    </>
  )
}

export default App;
