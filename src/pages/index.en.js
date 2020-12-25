import React from 'react'
import Link from 'gatsby-link'
import Layout from '../layouts/index';
import { StaticQuery, graphql } from 'gatsby'
import Image from '../service/image';
import messages from '../data/messages/en';
import { FacebookProvider, Like } from 'react-facebook';
import SEO from '../components/seo'

const IndexPage = (props) => (
  <>
    <SEO
      lang='en'
      description={messages.seo.meta.description}
      keywords={messages.seo.meta.keywords}
      ogType='website'
      ogImage={require(`../images/balkan-bread-logo.png`)}
      ogUrl={props.location.href}
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
        'url': `${props.location.href}`,
      }}
    />
    <Layout
      location={props.location}
      i18nMessages='en'
    >
      <StaticQuery
        query={graphql`
          query IndexEnPageQuery {
            allMarkdownRemark(
              sort: { order: DESC, fields: frontmatter___date }
              filter: { frontmatter: {lang: {eq: "en"}}}
              ) {
              totalCount
              edges {
                node {
                  id
                  frontmatter {
                    date(formatString: "MMMM, YYYY")
                    lang
                    path
                    title
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const { edges } = data ? data.allMarkdownRemark : null;

          return (
            <>
              <div>
                <Image src="balkan-bread-field.png" alt="hero image" />
              </div>
              <q>
                In this bakery, the dough is so fine that it passes through the keyboard.
                The Bread takes many forms. It is kneaded and twisted through different knowledge and experiences.
                In the end we are where the Balkans meet Berlin, and all of us who leave still eat
                <Link to="/en/balkan-bread"><h1 style={{display: 'inline', fontSize: '16px', marginLeft: '4px'}}>Balkan bread</h1></Link>.
              </q>
              <hr style={{maxWidth: `60px`, margin: `1rem auto 1.2rem`,}} />
              {edges.map(edge => {
                const { frontmatter } = edge.node;
                return (
                  <div key={frontmatter.path}>
                    <Link style={{textDecoration: 'none'}} to={frontmatter.path}>
                      <h2 style={{fontSize: 'inherit', marginBottom: '0.5rem'}}>{frontmatter.title}</h2>
                    </Link>
                    &nbsp;
                    <small>
                      {' '}
                      <em>published on</em> {frontmatter.date}
                    </small>
                    <hr style={{maxWidth: `60px`, margin: `1rem auto 0`,}} />
                    <br />
                  </div>
                );
              })}
              <FacebookProvider appId={process.env.GATSBY_FB_APP_ID}>
                <Like
                  href="http://www.facebook.com/balkanbread"
                  layout="button_count"
                  size="large"
                />
              </FacebookProvider>
            </>
          )
        }}
      />
    </Layout>
  </>
)

export default IndexPage
