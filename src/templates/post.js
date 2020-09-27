import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Helmet from 'react-helmet'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
import { graphql } from 'gatsby'
import 'intl';
import Image from '../service/image'
// import { IntlProvider, FormattedMessage } from "react-intl";
import Link from 'gatsby-link'

const Layout = ({ location, i18nMessages, data }) => {
  const languages = require('../data/languages');
  const post = data.markdownRemark;
  const url = location.pathname;
  const { langs, defaultLangKey } = languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`.replace(`/${defaultLangKey}/`, '/');
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map((item) => ({ ...item, link: item.link.replace(`/${defaultLangKey}/`, '/') }));

  return (
    <div>
      <Helmet
        title={post ? post.frontmatter.title : ''}
        meta={[
          { name: 'description', content: `${post ? post.frontmatter.description : ''}` },
          { name: 'keywords', content: `${post ? post.frontmatter.keywords : ''}` },
        ]}
      />
      <Header langs={langsMenu} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '1.45rem 1.0875rem',
          textAlign: 'center'
        }}
      >
        <h1 style={{color: '#f26f60'}}>{post ? post.frontmatter.title : ''}</h1>
        <small>{post ? post.frontmatter.date : ''}</small>
        <div style={{margin: '0 auto', maxWidth: 460}} dangerouslySetInnerHTML={{__html: post ? post.html : ''}} />
        {post && post.frontmatter.image ? <Image src={post.frontmatter.image} w="250px" /> : <Image src="balkan-bread-field.png" />}
        <Link to={homeLink}>{langKey === 'en' ? 'back to home' : 'nazad na početnu'}</Link>
      </div>
      <Footer />
    </div>
  )
};

export const postQuery = graphql`
	query BlogPostByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				date(formatString: "MMMM, DD, YYYY")
        description
        image
        keywords
				path
				title
			}
		}
	}
`

export default Layout