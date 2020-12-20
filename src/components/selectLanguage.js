import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const SelectLanguage = (props) => {
  const links = props.langs ? props.langs.map(lang =>
    <li key={lang.langKey} style={{margin: '0 5px',}} selected={lang.selected}>
      <Link to={lang.link} style={{
        color: 'rgb(188, 52, 37)',
        marginBottom: 0,
        textDecoration: 'none',
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
      margin: 0,
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
