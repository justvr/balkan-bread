import React from 'react'
import Link from 'gatsby-link'
import SelectLanguage from './selectLanguage';
import Image from '../service/image';

const Header = (props) => (
  <div
    style={{
      background: '#fff4e1',
    }}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 auto',
        maxWidth: 860,
        padding: '0 1.0875rem',
      }}
    >
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        <Image style={{marginBottom: '0'}} src="balkan-bread-logo.svg" w="200px" h="69px" alt="balkanbread logo" />
      </Link>
      <SelectLanguage langs={props.langs} />
    </div>
  </div>
)

export default Header;