import React, { Component } from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

class Cases extends Component {
    render() {
        return (
          <>
            <div className="client-list">
                <div className="columns is-multiline is-gapless">
                    <div className="column is-half">
                        <div id="case1" className="container case">
                            <div className="case-content-wrapper">
                                <div className="case-content">
                                    <h3 className="case-title"><FormattedMessage id="client.cases.case1" /></h3>
                                    <div className="case-info">
                                        <p><FormattedMessage id="client.cases.case1-des" /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-half">
                        <div id="case2" className="container case">
                            <div className="case-content-wrapper">
                                <div className="case-content">
                                    <h3 className="case-title">College</h3>
                                    <div className="case-info">
                                        <p>高品質のアスパラガスをたくさんつくるためには広大な土地、そして丁寧な収穫や選別を行なう「人の手」があります。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-half">
                        <div id="case3" className="container case">
                            <div className="case-content-wrapper">
                                <div className="case-content">
                                    <h3 className="case-title">College</h3>
                                    <div className="case-info">
                                        <p>高品質のアスパラガスをたくさんつくるためには広大な土地、そして丁寧な収穫や選別を行なう「人の手」があります。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-half">
                        <div id="case4" className="container case">
                            <div className="case-content-wrapper">
                                <div className="case-content">
                                    <h3 className="case-title">College</h3>
                                    <div className="case-info">
                                        <p>高品質のアスパラガスをたくさんつくるためには広大な土地、そして丁寧な収穫や選別を行なう「人の手」があります。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )};
}

export default Cases
