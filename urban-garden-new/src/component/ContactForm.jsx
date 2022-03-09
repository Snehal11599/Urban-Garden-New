import React from 'react'
import { GiThreeLeaves } from "react-icons/gi";

const style = {
    color: "#82B440", position: "center", keyboard: "focusable"
}


const ContactForm = () => {
    return (
        <>
            <div className="section-heading text-center mb-4">
                <h1 className='py-4'>Send Us A Message</h1>
                <GiThreeLeaves size="3rem" style={style}  />
                <p className="text-muted">Consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta.</p>
                <p className="text-muted">Quisque ut nulla at nunc lacinia.</p>
            </div>
            <div>
                <form action="#" className="form-contact py-5" id="contactForm" >
                    <div className="row">
                        <div className="col-sm-6 col-md-6">
                            <div className="form-group has-error">
                                <input type="text" className="form-control" id="p_name" placeholder="Enter Name" required=""/>
                                    <div className="help-block with-errors"><ul className="list-unstyled"></ul></div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6">
                            <div className="form-group">
                                <input type="email" className="form-control" id="p_email" placeholder="Enter Email" required=""/>
                                    <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" id="p_phone" placeholder="Enter Phone Number"/>
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
                        <textarea id="p_message" className="form-control" rows="6" placeholder="Enter Your Message"></textarea>
                        <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group">
                        <div className="text-center">
                            <div id="success"></div>
                            <button type="submit" className="btn btn-success"style={{pointerEvents:" all", cursor: "pointer"}}>SEND MESSAGE</button>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}

export default ContactForm