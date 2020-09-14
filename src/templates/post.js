import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Helmet from 'react-helmet'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { graphql } from 'gatsby'
import { IntlProvider } from 'react-intl';
import 'intl';
import Image from '../service/image';

const Layout = ({ location, i18nMessages, data }) => {
  const post = data.markdownRemark;
  const url = location.pathname;
  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`.replace(`/${defaultLangKey}/`, '/');
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map((item) => ({ ...item, link: item.link.replace(`/${defaultLangKey}/`, '/') }));
  return (
    <IntlProvider
      locale={langKey}
      messages={i18nMessages}
    >
      <div>
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header langs={langsMenu} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
            textAlign: 'center'
          }}
        >
          <h1 style={{color: '#f26f60'}}>{post ? post.frontmatter.title : ''}</h1>
          <small>{post ? post.frontmatter.date : ''}</small>
          <div style={{margin: '0 auto', maxWidth: 460}} dangerouslySetInnerHTML={{__html: post ? post.html : ''}} />
          {post && post.frontmatter.image ? <Image src={post.frontmatter.image} w="250px" /> : <Image src="balkan-bread-field.png" />}
        </div>
        <Footer />
      </div>
    </IntlProvider>
  )
};

export const postQuery = graphql`
	query BlogPostByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				date(formatString: "MMMM, DD, YYYY")
        image
				path
				title
			}
		}
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
	}
`

export default Layout