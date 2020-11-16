import React from "react"

import hkuSVG from "../images/logo-hku.svg"
import jllSVG from "../images/logo-jll.svg"
import cbreSVG from "../images/logo-cbre.svg"
import issSVG from "../images/logo-iss.svg"

const Clients = () => {
    return (
        <>
            <div className="block-client">
                <div className="container is-max-fullhd">
                    <div className="hero">
                        <div className="hero-body">
                            <div className="block-heading has-text-centered-tablet mb-6">
                                <h4 className="eng mb-4 px-1 eng-label">Our Clients</h4>
                                <h1 className="eng mb-2 px-1">
                                    Serve the best, Make you the best.
                                </h1>
                                <h3 className="is-hidden-mobile">
                                    我哋為各大物業管理公司,院校,屋苑提供各類專業園藝服務,咨詢及施工。
                                </h3>
                                <h3 className="px-1 is-hidden-tablet">
                                    我哋為各大物業管理公司,院校,屋苑提供各類專業園藝服務,咨詢及施工。
                                </h3>
                            </div>
                        </div>
                    </div>
                
                
                <div className="client-list columns is-multiline is-2 is-mobile has-text-centered">
                    <div className="column is-half-mobile is-one-quarter-widescreen">
                    <img src={hkuSVG}
                        className="image is-128x128 logo"
                        alt=""
                    />
                    <h5 className="client-title my-3">香港大學</h5>
                    </div>
                    <div className="column is-half-mobile is-one-quarter-widescreen">
                    <img src={jllSVG}
                        className="image is-128x128 logo"
                        alt=""
                    />
                    <h5 className="client-title my-3">仲量聯行</h5>
                    </div>
                    <div className="column is-half-mobile is-one-quarter-widescreen">
                    <img src={cbreSVG}
                        className="image is-128x128 logo"
                        alt=""
                    />
                    <h5 className="client-title my-3">世邦魏理仕</h5>
                    </div>
                    <div className="column is-half-mobile is-one-quarter-widescreen">
                    <img src={issSVG}
                        className="image is-128x128 logo"
                        alt=""
                    />
                    <h5 className="client-title my-3">置邦物業管理</h5>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Clients