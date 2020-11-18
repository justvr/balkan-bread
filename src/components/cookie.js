import React, { useState, useEffect } from 'react'
import '../service/cookie.js'
import cookie from '../service/cookie.js'
import Link from 'gatsby-link'

function Cookie() {
  const [show, setShow] = useState(false)

  function accept() {
    cookie.set('GA4', 'accepted')
    setShow(false)
  }
  function reject() {
    setShow(false)
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
        <p>How about, cookies
          <br />
          <small>
            We've got some cookies to improve your experience.
            By using Balkan Bread you agree to our
            <Link to="/privacy-and-cookie-management" style={{marginLeft: '6px'}}>
              Cookie Policy
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
            got it
          </button>
        <button
          onClick={reject}
          style={{background: 'none', border: 0}}
        >
          reject
        </button>
      </div>
    </div>) : null
}
export default Cookie
