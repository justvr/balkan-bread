import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/header'
import Footer from '../components/footer'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider } from 'react-intl';
import 'intl';
import './index.css'
import { FacebookProvider, Like } from 'react-facebook';
import SEO from '../components/seo'
import Cookie from '../components/cookie';

const Layout = ({ children, location, i18nMessages }) => {
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
      <SEO
        description={i18nMessages.seo.meta.description}
        keywords={i18nMessages.seo.meta.keywords}
        lang={langKey}
        ogType='website'
        title={i18nMessages.seo.title}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          'about': `${i18nMessages.seo.meta.description}`,
          'author': 'justvr',
          'contentLocation': 'Berlin',
          'dateCreated': '2020-09-13',
          'isFamilyFriendly': 'true',
          'keywords': `${i18nMessages.seo.meta.keywords}`,
          'name': 'Balkan Bread',
          'translator': 'Sam Katterfield',
          'typicalAgeRange': '22-',
          'url': `${location.href}`,
        }}
      />
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
        <FacebookProvider appId={process.env.GATSBY_FB_APP_ID}>
          <Like
            href="http://www.facebook.com/balkanbread"
            layout="button_count"
            share
            size="large"
          />
        </FacebookProvider>
      </div>
      <Footer />
      <Cookie />
    </IntlProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.object,
}

export default Layout
