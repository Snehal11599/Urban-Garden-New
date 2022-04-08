import './App.css';
import { Route, Routes } from 'react-router-dom'
import NavBar from './component/CommonComponent/NavBar';
import Home from './component/Home/Home'
import Aboutus from './component/AboutUs/Aboutus';
import Service from './component/Services/Service';
import Footer from './component/CommonComponent/Footer';
import ContactUs from './component/ContactUs/ContactUs';
import Gallery from './component/Features/Gallery/Gallery';
import Testimonials from './component/Features/Testimonials/Testimonials';
import Faq from './component/Features/FAQ/Faq';
import News from './component/Features/News/News';
import SingleNews from './component/Features/SingleNews/SingleNews';
import Login from './component/Home/Login';
import Register from'./component/Home/Register';
import ReceiveQuote from './component/Quote/ReceiveQuote';
import AddService from './component/Quote/AddQuotes';
import Header from './component/CommonComponent/Header';
function App() {
  return (
    <>
    <Header/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Aboutus" element={<Aboutus/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route exact path="/contactus" element={<ContactUs/>}/>
        <Route exact path='/gallery' element={<Gallery />} />
        <Route exact path='/testimonials' element={<Testimonials/>}/>
        <Route exact path='/faq' element={<Faq/>}/>
        <Route exact path='/news' element={<News/>} />
        <Route exact path='/singlenews' element={<SingleNews/>}/>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/Register' element={<Register/>}/>
        <Route exact path='/ReceiveQuote' element={<ReceiveQuote/>}/>
        <Route exact path='/AddQuotes' element={<AddService/>}/>
      </Routes>
       <Footer /> </>
  )
}
export default App;
