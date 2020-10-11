import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const SelectLanguage = (props) => {
  const links = props.langs ? props.langs.map(lang =>
    <li key={lang.langKey} style={{margin: '0 5px', color: 'rgb(188, 52, 37)'}} selected={lang.selected}>
      <Link to={lang.link} style={{
        textDecoration: 'none',
        marginBottom: 0
      }}>
        {lang.langKey}
      </Link>
    </li>
  ) : 'en';

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
