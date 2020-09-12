import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';

const SelectLanguage = (props) => {
  const links = props.langs.map(lang =>
    <Link to={lang.link} key={lang.langKey} style={{
      color: 'white',
      textDecoration: 'none',
      marginBottom: 0
    }}>
      <li style={{margin: '0 5px', color: '#f26d5e'}} selected={lang.selected}>
        {lang.langKey}
      </li>
    </Link>
  );

  {/* <header style={{
    color: 'white'
  }}>
    <FormattedMessage id="selectLanguage" />
  </header> */}
  return (
    <ul style={{
      alignItems: 'center',
      display: 'inline-flex',
      listStyle: 'none',
      marginBottom: 0,
      }}
    >
      {links}
    </ul>
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.array
};

export default SelectLanguage;