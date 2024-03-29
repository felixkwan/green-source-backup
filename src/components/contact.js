import React, { Component } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import "./contact.scss"

class Contact extends Component {

    render() {

        return (
            <>
                <div className="block-contact pb-4">
                    <div className="container is-fullhd contact-content is-clearfix">
                        <div className="container py-6">
                            <div className="columns is-4 is-multiline is-desktop">
                                <div className="column is-half-desktop contact-tel">
                                    <div className="is-clearfix">
                                        <div className="contact-item">
                                            <h6 className="eng mb-4 eng-label">Contact</h6>
                                        </div>
                                        <div className="contact-item">
                                            <h5>電話聯絡方法</h5>
                                            <h4>2670-0378 / 9585-3845</h4>
                                        </div>
                                        <Link to="https://wa.me/85269965240">
                                            <h5 className="contact-btn-r contact-btn py-4 pl-5 s-size-6-mobile has-text-left-desktop"> <FontAwesomeIcon icon={faWhatsapp} className="ml-2 mr-5 mt-1 is-size-5 is-svg" />立即查詢報價或細節</h5>
                                        </Link>
                                    </div> 
                                </div>

                                <div className="column is-half-desktop">
                                    <div className="is-clearfix">
                                        <div className="contact-item">
                                            <h6 className="eng mb-4 eng-label">Email</h6>
                                        </div>
                                        <div className="contact-item">
                                            <h5 className="mb-1">以電郵形式搵我地</h5>
                                            <p>除左電話之外, 可以電郵到以下地址。</p>
                                        </div>
                                        <a href="mailto:gsgaderning@yahoo.com">
                                                <h5 className="contact-btn-l contact-btn py-4 pl-5 is-size-6-mobile has-text-left-desktop"> <FontAwesomeIcon icon={faEnvelopeOpen} className="ml-2 mr-5 mt-1 is-svg" />gsgaderning@yahoo.com</h5>
                                        </a>
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
