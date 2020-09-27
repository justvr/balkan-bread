import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/header'
import Footer from '../components/footer'
import Helmet from 'react-helmet'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider } from 'react-intl';
import 'intl';
import './index.css'
import Image from '../service/image';

const Layout = ({ children, location, i18nMessages, data }) => {
  const languages = require('../data/languages');
  const url = location.pathname;
  const { langs, defaultLangKey } = languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`.replace(`/${defaultLangKey}/`, '/');
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map((item) => ({ ...item, link: item.link.replace(`/${defaultLangKey}/`, '/') }));
  return (
    <IntlProvider
      locale={langKey}
      messages={i18nMessages}
    >
      <Helmet
        title={i18nMessages.seo.title}
        meta={[
          { name: 'description', content: `${i18nMessages.seo.meta.description}` },
          { name: 'keywords', content: `${i18nMessages.seo.meta.keywords}` },
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
    </IntlProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.object,
}

export default Layout