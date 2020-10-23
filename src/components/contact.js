import React, { Component } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faCaretRight } from '@fortawesome/free-solid-svg-icons'

import "./contact.scss"
import { LinkButton } from "gatsby-interface"

class Contact extends Component {

    render() {

        return (
            <>
                <div className="block-contact pb-4 has-background-white-ter">
                    <div className="container is-fullhd contact-content is-clearfix">
                        <div className="container is-max-desktop py-6">
                            <div className="columns is-4 is-multiline is-desktop">
                                <div className="column is-half-desktop contact-tel has-text-centered-touch">
                                    <div className="mx-4">
                                        <div className="contact-item">
                                            <h6 className="eng mb-4">Contact</h6>
                                        </div>
                                        <div className="contact-item">
                                            <h5>電話聯絡方法</h5>
                                            <h4>2670 0378 / 2697 6456</h4>
                                        </div>
                                        <Link to="https://wa.me/85269965240">
                                            <h5 className="contact-btn mt-4 px-6 py-4 has-background-white"> <FontAwesomeIcon icon={faEnvelopeOpen} className="mx-2 mt-1" />立即查詢報價或細節</h5>
                                        </Link>
                                    </div> 
                                </div>

                                <div className="column is-half-desktop has-text-centered-touch">
                                    <div className="mx-4">
                                        <div className="contact-item">
                                            <h6 className="eng mb-4">Email</h6>
                                        </div>
                                        <div className="contact-item">
                                            <h5 className="mb-1">以電郵形式搵我地</h5>
                                            <p>除左電話之外, 可以電郵到以下地址。</p>
                                        </div>
                                        <Link to="/">
                                                <h5 className="contact-btn mt-4 px-6 py-4 has-background-white"> <FontAwesomeIcon icon={faEnvelopeOpen} className="mx-2 mt-1" />gsgaderning@yahoo.com</h5>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </>
    )};
}

export default Contact
