import React, { useState, useEffect } from 'react'
import '../service/cookie.js'
import cookie from '../service/cookie.js'
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl';

const Cookie = () => {
  const [show, setShow] = useState(false)

  function hide() {
    setShow(false)
  }

  function addScript( src, callback ) {
    var s = document.createElement( 'script' )
    s.setAttribute( 'src', src )
    s.onload=callback
    document.body.appendChild( s )
  }

  function addScriptText(script) {
    const s = document.createElement('script')
    s.type = 'text/javascript'
    const code = script
    try {
      s.appendChild(document.createTextNode(code))
      document.body.appendChild(s)
    } catch (e) {
      s.text = code
      document.body.appendChild(s)
    }
  }

  // for now it's only GA4
  function accept() {
    cookie.set('GA4', 'accepted')
    addScript('https://www.googletagmanager.com/gtag/js?id=G-VFMLXXHDC3')
    addScriptText(`
      window.dataLayer = window.dataLayer || []
      function gtag(){dataLayer.push(arguments)}
      gtag('js', new Date())
      gtag('config', 'G-VFMLXXHDC3')
    `)

    hide()
  }

  useEffect(() => {
    if ('accepted' !== cookie.get('GA4')) {
      setShow(true)
    }
  }, [])

  return show ? (
    <div
      style={{
        background: '#fff4e1',
        borderRadius: '9px',
        bottom: '100px',
        boxShadow: '0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12)',
        maxWidth: '320px',
        padding: '1.0875rem',
        position: 'fixed',
        right: 0,
        width: '100%',
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: 860,
        }}
      >
        <p><FormattedMessage id="cookie.title" />
          <br />
          <small>
            <FormattedMessage id="cookie.description1" />
            <Link to="/privacy-and-cookie-management" style={{marginLeft: '6px'}}>
              <FormattedMessage id="cookie.description2" />
            </Link>.
          </small>
        </p>
        <button
          onClick={accept}
          style={{
          border: 0,
          padding: '0.4rem 1.2rem',
          background: 'rgb(49, 127, 96)',
          borderRadius: '30px',
          color: 'white',
          textTransform: 'uppercase',
          fontSize: '0.8rem',
          marginRight: '0.4rem',
        }}>
          <FormattedMessage id="cookie.buttons.accept" />
        </button>
        <button
          onClick={hide}
          style={{background: 'none', border: 0}}
        >
          <FormattedMessage id="cookie.buttons.reject" />
        </button>
      </div>
    </div>) : null
}
export default Cookie
