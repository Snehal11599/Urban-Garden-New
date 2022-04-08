import React from 'react';
import ContactForm from './ContactForm';
import Banner from '../CommonComponent/Banner';
import SimpleMap from './SimpleMap';

const ContactUs = () => {
  return (
    <div>
        <Banner  title="Contact Us"/>
        
        <ContactForm/>
        <SimpleMap/>
    </div>
  )
}
export default ContactUs