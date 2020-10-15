import React from 'react'
import Link from 'gatsby-link'
import Image from '../service/image';

const Footer = () => (
  <>
    <div style={{height: '113px'}} />
    <div
      style={{
        alignItems: 'center',
        background: '#fff4e1',
        bottom: '0',
        color: 'rgb(188, 52, 37)',
        padding: '1.0875rem',
        position: 'fixed',
        textAlign: 'center',
        width: '100%',
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: 860,
        }}
      >
        <Link
          target="_blank"
          to="http://www.fb.com/balkanbread"
          rel="noopener noreferrer"
        >
          <Image src="facebook.svg" w="30px" alt="facebook icon" />
        </Link>
      </div>
      <div
        style={{
          margin: '0 auto',
          maxWidth: 860,
        }}
      >
        <Link to="/terms-and-conditions" style={{color: 'rgb(188, 52, 37)'}}><small>Terms & Conditions</small></Link>|
        <Link to="/privacy-and-cookie-management" style={{color: 'rgb(188, 52, 37)'}}>
          <small>Privacy & Cookie Policy</small>
        </Link>
      </div>
      <small>copyright &#xa9; Balkan Bread 2020</small>
    </div>
  </>
)

export default Footer;
