import React from 'react'
import { graphql } from 'gatsby'
import 'intl';
import Image from '../service/image'
import Link from 'gatsby-link'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import SEO from '../components/seo'
import Layout from '../layouts/default';
import { FormattedMessage } from 'react-intl';

const Post = ({ location, data, pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext
  const customCrumbLabelOrigin = location.pathname.toLowerCase().replace('/', '')
  const customCrumbLabel = customCrumbLabelOrigin.startsWith('en/') ? customCrumbLabelOrigin.slice(3) : customCrumbLabelOrigin
  const post = data.markdownRemark;
  const url = location.pathname;

  return post ? (
    <Layout
      location={location}
      i18nMessages={'en' === post.frontmatter.lang ? 'en' : 'sr'}
    >
      <SEO
        lang={post.frontmatter.lang}
        description={post.frontmatter.description}
        keywords={post.frontmatter.keywords}
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
          href={`https://www.facebook.com/sharer/sharer.php?u=${location.origin + url}`}
          className="fb-btn"
          rel="noopener noreferrer"
          target="_blank"
        >
          Share
        </a>
        <br />
        <Link to={'en' === post.frontmatter.lang ? '/en/' : '/'}>
          <FormattedMessage id="post.homeLink" />
        </Link>
      </div>
      <Breadcrumb
        crumbLabel={customCrumbLabel}
        crumbs={crumbs}
        crumbSeparator="/"
        disableLinks={[`/${customCrumbLabelOrigin}`]}
      />
    </Layout>
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
        lang
				path
				title
			}
		}
	}
`

export default Post
