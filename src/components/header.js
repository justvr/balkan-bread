import React from 'react'
import Link from 'gatsby-link'
import SelectLanguage from './selectLanguage';
import Image from '../service/image';

const Header = (props) => (
  <div style={{ background: '#fff4e1', }}>
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
        to={'en' === props.langKey ? '/en/' : '/'}
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        <div style={{display: 'flex', width: '200px'}}>
          <Image
            style={{marginBottom: '0', width: '100%'}}
            src="balkan-bread-logo.png"
            alt="balkanbread logo"
          />
        </div>
      </Link>
      <SelectLanguage langs={props.langs} />
    </div>
  </div>
)

export default Header;
