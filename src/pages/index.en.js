import React, { useState, useEffect } from 'react'
import Link from 'gatsby-link'
import Layout from '../layouts/default';
import { graphql } from 'gatsby'
import Image from '../service/image';
import messages from '../data/messages/en';
import { FacebookProvider, Like } from 'react-facebook';
import SEO from '../components/seo'
import { FormattedMessage } from 'react-intl';

const IndexPage = ({ location, data }) => {
  const { edges } = data ? data.allMarkdownRemark : null
  const step = 3

  const [articles, setArticles] = useState(edges.slice(0, step))
  const [nmOfArticles, setNmOfArticles] = useState(step)
  const [hasMore, setHasMore] = useState(true)

  const onClick = () => {
    if (edges.length > nmOfArticles) {
      setArticles(articles.concat(edges.slice(nmOfArticles, nmOfArticles + step)))
      setNmOfArticles(nmOfArticles + step)
    }
  }

  useEffect(() => {
    if (edges.length < nmOfArticles) {
      setHasMore(false)
    }
  }, nmOfArticles)

  return (
    <Layout
    location={location}
    i18nMessages='en'
  >
    <SEO
      lang='en'
      description={messages.seo.meta.description}
      keywords={messages.seo.meta.keywords}
      ogType='website'
      ogImage={require(`../images/balkan-bread-logo.png`)}
      ogUrl={location.href}
      title={messages.seo.title}
      schema={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'about': `${messages.seo.meta.description}`,
        'author': 'justvr',
        'contentLocation': 'Berlin',
        'dateCreated': '2020-09-13',
        'isFamilyFriendly': 'true',
        'keywords': `${messages.seo.meta.keywords}`,
        'name': 'Balkan Bread',
        'translator': 'Sam Katterfield',
        'typicalAgeRange': '22-',
        'url': `${location.href}`,
      }}
    />
    <div>
      <Image src="balkan-bread-field.png" alt="hero image" />
    </div>
    <q>
      <FormattedMessage id="introduction1" />
      <Link to="/en/balkan-bread">
        <h1 style={{display: 'inline', fontSize: '16px', marginLeft: '4px'}}>
          <FormattedMessage id="introduction2" />
        </h1>
      </Link>.
    </q>
    <hr style={{maxWidth: `60px`, margin: `1rem auto 1.2rem`,}} />
    {articles.map(edge => {
      const { frontmatter } = edge.node;
      const date = frontmatter.date
      const month = date.split(',')[0]
      const year = date.split(',')[1]

      return (
        <div key={frontmatter.path}>
          <Link style={{textDecoration: 'none'}} to={frontmatter.path}>
            <h2 style={{fontSize: 'inherit', marginBottom: '0.5rem'}}>{frontmatter.title}</h2>
          </Link>
          &nbsp;
          <small>
            {' '}
            <em><FormattedMessage id="published" /></em> {messages.date[month]}{year}
          </small>
          <hr style={{maxWidth: `60px`, margin: `1rem auto 0`,}} />
          <br />
        </div>
      );
    })}
    {hasMore ? <button onClick={onClick} className="load-more">read more</button> : null}
    <FacebookProvider appId={process.env.GATSBY_FB_APP_ID}>
      <Like
        href="http://www.facebook.com/balkanbread"
        layout="button_count"
        size="large"
      />
    </FacebookProvider>
  </Layout>
  )
}

export const postQuery = graphql`
query IndexPageQuery {
  allMarkdownRemark(
    sort: { order: DESC, fields: frontmatter___date }
    filter: { frontmatter: {lang: {eq: "en"}}}
    ) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          date(formatString: "M, YYYY")
          lang
          path
          title
        }
      }
    }
  }
}
`

export default IndexPage
