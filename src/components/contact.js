import React, { Component } from "react"

class Contact extends Component {

    render() {

        return (
            <>
                <div className="block-contact">
                    <div className="container contact-content-wrapper">
                        <div className="contact-item">
                            <h2>Contact</h2>
                            <small>Let's get to work. If you are thinking about a new garden.</small>
                        </div>
                        <div className="contact-item contact-number">
                            <h5>Tel</h5>
                            <h4>2670 0378 / 2697 6456</h4>
                        </div>
                        <div className="contact-item contact-mail">
                            <a href="#">
                                <span><i className="fi fi-email"></i>Send us a mail</span>
                                <span><i className="fi fi-angle-right"></i></span>
                            </a>
                        </div>
                    </div>
                </div>
            </>
    )};
}

export default Contact
