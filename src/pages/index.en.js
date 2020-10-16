import React from 'react'
import Link from 'gatsby-link'
import Layout from '../layouts/en'
import { StaticQuery, graphql } from 'gatsby'
import Image from '../service/image';

const IndexPage = (props) => (
  <Layout location={props.location}>
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
            <Image src="balkan-bread-field.png" w="250px" h="198px" alt="hero image" />
            <q>
              In this bakery, the dough is so fine that it passes through the keyboard.
              The Bread takes many forms. It is kneaded and twisted through different knowledge and experiences.
              In the end we are where the Balkans meet Berlin, and all of us who leave still eat
              <h1 style={{display: 'inline', fontSize: '16px', marginLeft: '4px'}}>Balkan bread</h1>.
            </q>
            justvr
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
          </>
        )
      }}
    />
  </Layout>
)

export default IndexPage
