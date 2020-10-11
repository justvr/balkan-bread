import React from 'react'
import Link from 'gatsby-link'
import Image from '../service/image';

const Footer = () => (
  <>
    <div style={{height: '113px'}} />
    <div
      style={{
        background: '#fff4e1',
        padding: '1.0875rem',
        alignItems: 'center',
        color: 'rgb(242, 109, 94)',
        textAlign: 'center',
        position: 'fixed',
        bottom: '0',
        width: '100%'
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
        >
          <Image src="facebook.svg" w="30px" />
        </Link>
      </div>
      <div
        style={{
          margin: '0 auto',
          maxWidth: 860,
        }}
      >
        <Link to="/terms-and-conditions" style={{color: 'rgb(242, 109, 94)'}}><small>Terms & Conditions</small></Link>|
        <Link to="/privacy-and-cookie-management" style={{color: 'rgb(242, 109, 94)'}}>
          <small>Privacy & Cookie Policy</small>
        </Link>
      </div>
      <small>copyright ©️ Balkan Bread 2020</small>
    </div>
  </>
)

export default Footer;
