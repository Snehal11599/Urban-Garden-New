import './App.css';
import { Route, Routes } from 'react-router-dom'
import NavBar from './component/NavBar';
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service';
import Footer from './component/Footer';
import ContactUs from './component/ContactUs';
import Gallery from './component/Gallery';
import Testimonials from './component/Testimonials';
import Faq from './component/Faq';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route exact path="/contactus" element={<ContactUs />} />
        <Route exact path='/gallery' element={<Gallery />} />
        <Route exact path='/testimonials' element={<Testimonials />} />
        <Route exact path='/faq' element={<Faq/>} />
      </Routes>
      <Footer />

    </>
  )
}

export default App;
