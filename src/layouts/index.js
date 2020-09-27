import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/header'
import Footer from '../components/footer'
import Helmet from 'react-helmet'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { StaticQuery, graphql } from 'gatsby'
import 'intl';
import './index.css'
import Image from '../service/image';

const Layout = ({ children, location }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              languages {
                defaultLangKey
                langs
              }
            }
          }
        }
      `}
      render={data => {
        const url = location.pathname;
        const { langs, defaultLangKey } = data.site.siteMetadata.languages;
        const langKey = getCurrentLangKey(langs, defaultLangKey, url);
        const homeLink = `/${langKey}/`.replace(`/${defaultLangKey}/`, '/');
        const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map((item) => ({ ...item, link: item.link.replace(`/${defaultLangKey}/`, '/') }));

        return (
          <>
            <Helmet
              title="gde Balkan peče život u Berlinu"
              meta={[
                { name: 'description', content: 'Upoznajte život u Nemačkoj. Saznajte nove ideje i možda primenite u Vašem svakodnevnom životu' },
                { name: 'keywords', content: 'berlin, nemacka, balkan, svakodnevnica, kako izgleda ziveti u nemackoj berlin' },
              ]}
            />
            <Header langs={langsMenu} />
            <div
              style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '1.45rem 1.0875rem',
                paddingTop: 0,
                textAlign: 'center'
              }}
            >
              <Image src="balkan-bread-field.png" w="250px" h="198px" />
              {children}
            </div>
            <Footer />
          </>
        )
      }}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.object,
}

export default Layout