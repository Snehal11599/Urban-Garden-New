import React from 'react'
import { GiThreeLeaves } from "react-icons/gi";
import emailjs from 'emailjs-com'
const style = {
    color: "#82B440", position: "center", keyboard: "focusable"
}
const ContactForm = () => {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm("service_j4qqhpq", "template_2qr7spt", e.target, "nFxs7WI33NkoTBKnZ").then(res => {
            alert('Message Sent Successfully')
            console.log(res);
        }).catch(err => console.log(err));
    }
    return (
        <><div className="section-heading text-center mb-4">
                <h1 className='py-4'>Get In Touch</h1>
                <GiThreeLeaves size="3rem" style={style} />
                <p className="text-muted">Consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta.</p>
                <p className="text-muted">Quisque ut nulla at nunc lacinia.</p>
            </div>


 {/* <div className="card-group">
  <div className="card">
  <div className="card-body">
     <h3 className="card-title">Contact</h3>
      
      <p className="card-text">099603 00310</p>
      <h3 className="card-title">Fax</h3>
      
      <p className="card-text">(123) 65412309</p>
      <h3 className="card-title">Email</h3>
      
      <p className="card-text">info@yoursite.com</p>
      </div>
    
  </div>
  <div className="card">
   
    <div className="card-body">
      <h3 className="card-title">Address</h3>
      <p className="card-text">Susgaon, Shivba chowk</p>
      <p className="card-text">Pune</p>
      <p className="card-text">Maharashtra 411021</p>
      <p className="card-text">India</p>
     
    </div>
  </div>

  <div className="card">
   
    <div className="card-body">
      <h3 className="card-title">Opening Hours</h3>
      <p className="card-text">Mon:	9:00 AM – 7:00 PM</p>
      <p className="card-text">Tue:	9:00 AM – 7:00 PM</p>
      <p className="card-text">Thu:	9:00 AM – 7:00 PM</p>
      <p className="card-text">Fri:	9:00 AM – 7:00 PM</p>
      <p className="card-text">Sat:	9:00 AM – 7:00 PM</p>
      <p className="card-text">Sun:	9:00 AM – 7:00 PM</p>
    </div>
  </div>
  <div className="card">
   
    <div className="card-body">
      <h3 className="card-title">Other Cities</h3>
      <p className="card-text">JAIPUR</p>
      <p className="card-text">LUCKNOW</p>
      <p className="card-text">NOIDA</p>
      <p className="card-text">DELHI</p>
      <p className="card-text">KANPUR</p>
      <p className="card-text">PATANA</p>
      <p className="card-text">GURGAV</p>
      <p className="card-text">CHANDIGHRH</p>
    </div>
  </div>
 
</div>  */}


<div className="section-heading text-center mb-4">
    <h1 className='py-4'>Send Enquiry</h1>
    </div>


            <div>
                <form action="#" className="form-contact py-5" id="contactForm" onSubmit={sendEmail} >
                    <div className="row">
                        <div className="col-sm-6 col-md-6">
                            <div className="form-group has-error">
                                <input type="text" className="form-control" id="p_name" name="name" placeholder="Enter Name" required="" />
                                <div className="help-block with-errors"><ul className="list-unstyled"></ul></div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6">
                            <div className="form-group">
                                <input type="email" className="form-control" id="p_email" name="email" placeholder="Enter Email" required="" />
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" id="p_phone" name="phone no" placeholder="Enter Phone Number" />
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6">
                            <div className="form-group">
                                <select className="form-control" id="p_service">
                                    <option value="0">Choose service you are interested in</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-group py-4">
                        <textarea id="p_message" className="form-control" rows="6" name="message" placeholder="Enter Your Message"></textarea>
                        <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group">
                        <div className="text-center">
                            <div id="success"></div>
                            <button type="submit" className="btn btn-success" style={{ pointerEvents: " all", cursor: "pointer" }} >SEND MESSAGE</button>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}

export default ContactForm