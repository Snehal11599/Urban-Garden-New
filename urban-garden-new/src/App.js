import './App.css';
import { Route, Routes } from 'react-router-dom'
import NavBar from './component/NavBar';
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service';
import Footer from './component/Footer';
import ContactUs from './component/ContactUs';
import Gallery from './component/Gallery';

function App() {
  return (
    <>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/about" element={<About />}/>
        <Route path="/service" element={<Service />} />
        <Route exact path="/contactus" element={<ContactUs/>}/>
      </Routes>
      <Footer/>
      <Gallery/>

    </>
  )
}

export default App;
