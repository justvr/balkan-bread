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
import CookieConsent from 'react-cookie-consent';

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
      <CookieConsent
        buttonStyle={{
          border: 'none',
          margin: '0.5rem',
        }}
        buttonText="I understand"
        cookieName="gatsby-gdpr-google-analytics"
        declineButtonText="Decline"
        disableStyles={true}
        enableDeclineButton
        expired={30}
        flipButtons
        style={{
          background: 'rgb(63 191 165)',
          border: '2px solid rgb(49, 127, 96)',
          borderRadius: '0.5rem',
          padding: '1.45rem',
          position: 'fixed',
          right: 0,
          bottom: '100px'
        }}
      >
        This site uses cookies ...
      </CookieConsent>
    </IntlProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.object,
}

export default Layout
