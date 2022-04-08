import React from 'react'

const LeaveComments = () => {
    return (
        <>
            <div>
                <form action="#" className="form-contact py-5" id="contactForm" >
                    <div className="row">
                        <div className="col-sm-6 col-md-6">
                            <div className="form-group has-error">
                                <input type="text" className="form-control" id="p_name" placeholder="Enter Name" required="" />
                                <div className="help-block with-errors"><ul className="list-unstyled"></ul></div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6">
                            <div className="form-group">
                                <input type="email" className="form-control" id="p_email" placeholder="Enter Email" required="" />
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-12">
                            <div className="form-group">
                                <input type="text" className="form-control" id="p_phone" placeholder="Enter your website" />
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group py-4">
                        <textarea id="p_message" className="form-control" rows="6" placeholder="Enter Your Message"></textarea>
                        <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn" style={{backgroundColor:"#8bc34a"}}>POST COMMENTS</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LeaveComments