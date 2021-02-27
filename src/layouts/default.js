/**
 * default layout for all pages holding the IntlProvider
 */
import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/header'
import Footer from '../components/footer'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider } from 'react-intl';
import 'intl';
import Cookie from '../components/cookie'
import '../assets/reset.css'
import messagesEn from '../data/messages/en';
import messagesSr from '../data/messages/sr';
import flatten from 'flat'

const Layout = ({ children, location }) => {
  const languages = require('../data/languages');
  const url = location.pathname;
  const { langs, defaultLangKey } = languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`.replace(`/${defaultLangKey}/`, '/');
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map((item) => ({ ...item, link: item.link.replace(`/${defaultLangKey}/`, '/') }));
  return (
    <IntlProvider
      locale={langKey}
      messages={'en' === langKey ? flatten(messagesEn) : flatten(messagesSr)}
    >
      <Header langs={langsMenu} langKey={langKey} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 860,
          padding: '1.45rem 1.0875rem',
          paddingTop: 0,
          textAlign: 'center',
        }}
      >
        {children}
      </div>
      <Footer />
      <Cookie />
    </IntlProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
}

export default Layout
