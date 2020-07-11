import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  en: "English",
  'zh-hk': "繁體中文"
}

const Language = () => {
  return (
    <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>(
            <div className="navbar-item has-dropdown is-hoverable">
                <span className="navbar-link">
                    {languageName[currentLocale]} 
                </span>
                <div className="navbar-dropdown navbar-lang">
                    {languages.map(language => (
                        <button
                        key={language}
                        onClick={() => changeLocale(language)}
                        style={{
                            color: currentLocale === language ? `#46b972` : `#aadfc1`,
                            margin: 10,
                            cursor: `pointer`,
                        }}
                        >
                        {languageName[language]}
                        </button>
                    ))}
                </div>
            </div>
        )}
    </IntlContextConsumer>
  )
}

export default Language