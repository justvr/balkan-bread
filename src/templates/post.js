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
import Cookie from '../components/cookie'
import '../assets/reset.css'

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

  return post ? (
    <>
      <SEO
        description={post.frontmatter.description}
        keywords={post.frontmatter.keywords}
        lang={langKey}
        title={post.frontmatter.title}
        ogType={post.frontmatter.title}
        ogImage={require(`../images/${post.frontmatter.image}`)}
        ogUrl={location.href}
        schema={{
          '@context':'https://schema.org',
          '@type':'Article',
          'author': 'justvr',
          'datePublished': post.frontmatter.date,
          'headline': post.frontmatter.title,
          'image': require(`../images/${post.frontmatter.image}`),
          'name': post.frontmatter.title,
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
        <h1 style={{color: 'rgb(188, 52, 37)'}}>{post.frontmatter.title}</h1>
        <small>{post.frontmatter.date}</small>
        <div style={{margin: '0 auto', maxWidth: 460}} dangerouslySetInnerHTML={{__html: post.html}} />
        <div>
          <Image src={post.frontmatter.image} alt={post.frontmatter.title} />
        </div>
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
          {langKey === 'en' ? 'one more slice please' : 'dodaj mi još jedno parče'}
        </Link>
      </div>
      <Breadcrumb
        crumbLabel={customCrumbLabel}
        crumbs={crumbs}
        crumbSeparator="/"
      />
      <Footer />
      <Cookie />
    </>
  ) : null
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
