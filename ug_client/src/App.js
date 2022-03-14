import './App.css';
import { Route, Routes } from 'react-router-dom'
import NavBar from './component/CommonComponent/NavBar';
import Home from './component/Home/Home'
import About from './component/AboutUs/About';
import Service from './component/Services/Service';
import Footer from './component/CommonComponent/Footer';
import ContactUs from './component/ContactUs/ContactUs';
import Gallery from './component/Pages/Gallery/Gallery';
import Testimonials from './component/Pages/Testimonials/Testimonials';
import Faq from './component/Pages/FAQ/Faq';
import News from './component/Pages/News/News';
import SingleNews from './component/Pages/SingleNews/SingleNews';;

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
        <Route exact path='/faq' element={<Faq />} />
        <Route exact path='/news' element={<News />} />
        <Route exact path='/singlenews' element={<SingleNews />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App;