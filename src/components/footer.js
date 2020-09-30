import React from 'react'
import Link from 'gatsby-link'
import Image from '../service/image';

const Footer = () => (
  <div
    style={{
      background: '#fff4e1',
    }}
  >
    <div
      style={{
        alignItems: 'center',
        color: 'rgb(242, 109, 94)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: '0 auto',
        maxWidth: 860,
        padding: '1.0875rem',
        textAlign: 'center'
      }}
    >
      <div style={{display: 'flex'}}>
        <Link
          target="_blank"
          to="http://www.fb.com/balkanbread"
        >
          <Image src="facebook.svg" w="30px" />
        </Link>
      </div>
      <small>copyright ©️ Balkan Bread 2020</small>
    </div>
  </div>
)

export default Footer;