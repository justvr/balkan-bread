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
        <a
          href="https://www.instagram.com/balkanbread/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image src="instagram.svg" w="22px" alt="instagram icon" />
        </a>
        <a
          href="http://www.fb.com/balkanbread"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image src="facebook.svg" w="30px" alt="facebook icon" />
        </a>
      </div>
      <div
        style={{
          margin: '0 auto',
          maxWidth: 860,
        }}
      >
        <Link to="/terms-and-conditions" style={{color: 'rgb(188, 52, 37)'}}><small>Terms & Conditions</small></Link>
      </div>
      <small>copyright &#xa9; Balkan Bread 2020</small>
    </div>
  </>
)

export default Footer;
