import React from 'react'
import Link from 'gatsby-link'
import Layout from "../layouts/sr"
import { StaticQuery, graphql } from "gatsby"

const IndexPage = (props) => (
  <Layout location={props.location}>
    <StaticQuery
      query={graphql`
        query IndexPtPageQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: frontmatter___date }
            filter: { frontmatter: {lang: {eq: "sr"}}}
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
          <div>
            <q className="description">
              U ovoj pekari se peče mnogo različitog hleba. Testo je prošlo kroz mnoga usta, a sada i kroz moju tastaturu.
              Hleb uzima mnoge oblike ispravljene i izvitoperene različitim znanjem i iskustvima.
              Ali se na kraju svede na to da sve to jedan veliki Balkanski Hleb.
            </q>
            <hr style={{maxWidth: `60px`, margin: `1rem auto 1.2rem`,}} />
            {edges.map(edge => {
              const { frontmatter } = edge.node;
              return (
                <div key={frontmatter.path}>
                  <Link style={{textDecoration: 'none'}} to={frontmatter.path}>
                    <h2 style={{color: '#00bfa6', fontSize: 'inherit', marginBottom: '0.5rem'}}>{frontmatter.title}</h2>
                  </Link>
                  &nbsp;
                  <small>
                    {' '}
                    <em>objavljeno</em> {frontmatter.date}
                  </small>
                  <hr style={{maxWidth: `60px`, margin: `1rem auto 0`,}} />
                  <br />
                </div>
              );
            })}
          </div>
        )
      }}
    />
  </Layout>
)

export default IndexPage