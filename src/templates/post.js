import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
import { graphql } from 'gatsby'
import 'intl';
import Image from '../service/image'
import Link from 'gatsby-link'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import SEO from '../components/seo'

const Layout = ({ location, data, pageContext }) => {
  const basePath = 'https://www.balkanbread.com'
  const {
    breadcrumb: { crumbs },
  } = pageContext
  let customCrumbLabel = location.pathname.toLowerCase().replace('/', '')
  if (customCrumbLabel.startsWith('en/')) {
    customCrumbLabel = customCrumbLabel.slice(3)
  }
  const languages = require('../data/languages');
  const post = data.markdownRemark;
  const url = location.pathname;
  const { langs, defaultLangKey } = languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`.replace(`/${defaultLangKey}/`, '/');
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map((item) => ({ ...item, link: item.link.replace(`/${defaultLangKey}/`, '/') }));

  return (
    <>
      <SEO
        description={`${post ? post.frontmatter.description : ''}`}
        keywords={`${post ? post.frontmatter.keywords : ''}`}
        lang={langKey}
        title={post ? post.frontmatter.title : ''}
        schema={{
          '@context':'https://schema.org',
          '@type':'Article',
          'author': 'justvr',
          'datePublished': post ? post.frontmatter.date : '',
          'headline': post ? post.frontmatter.title : '',
          'image': post ? require(`../images/${post.frontmatter.image}`) : '',
          'name': post ? post.frontmatter.title : '',
        }}
      />
      <Header langs={langsMenu} langKey={langKey} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 860,
          padding: '1.45rem 1.0875rem',
          textAlign: 'center'
        }}
      >
        <h1 style={{color: 'rgb(188, 52, 37)'}}>{post ? post.frontmatter.title : ''}</h1>
        <small>{post ? post.frontmatter.date : ''}</small>
        <div style={{margin: '0 auto', maxWidth: 460}} dangerouslySetInnerHTML={{__html: post ? post.html : ''}} />
        {
          post && post.frontmatter.image
            ? <Image src={post.frontmatter.image} w="250px" alt={post.frontmatter.title} />
            : <Image src="balkan-bread-field.png" />
        }
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${basePath + url}`}
          className="fb-btn"
          rel="noopener noreferrer"
          target="_blank"
        >
          Share
        </a>
        <br />
        <Link to={homeLink}>
          {langKey === 'en' ? 'one more piece please' : 'dodaj mi još jedno parče'}
        </Link>
      </div>
      <Breadcrumb
        crumbLabel={customCrumbLabel}
        crumbs={crumbs}
        crumbSeparator="/"
      />
      <Footer />
    </>
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
