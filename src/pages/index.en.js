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
          <div>
            <Image src="balkan-bread-field.png" w="250px" h="198px" />
            <q>
              Icing bear claw ice cream chocolate gummi bears cookie fruitcake oat cake cake.
              Cheesecake chocolate toffee chocolate cake.
              Wafer pastry bonbon ice cream jelly beans ice cream croissant dragée <Link to="/balkan-bread"><h1 style={{display: 'inline', fontSize: '16px', marginLeft: '4px'}}>pudding</h1></Link>..
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
          </div>
        )
      }}
    />
  </Layout>
)

export default IndexPage