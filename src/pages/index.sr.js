import React from 'react'
import Link from 'gatsby-link'
import Layout from '../layouts/sr'
import { StaticQuery, graphql } from 'gatsby'
import Image from '../service/image';

const IndexPage = (props) => (
  <Layout location={props.location}>
    <StaticQuery
      query={graphql`
        query IndexSrPageQuery {
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
          <>
            <div>
              <Image src="balkan-bread-field.png" w="250px" h="198px" alt="hero image" />
            </div>
            <q>
              U ovoj pekari testo je tako fino da prolazi i kroz tastaturu.
              Hleb uzima mnoge oblike ispravljene i izvitoperene različitim znanjem i iskustvima.
              Ali na kraju tu smo gde Balkan sreće Berlin, a svi koji odemo na kraju ipak jedemo
              <Link to="/balkan-bread"><h1 style={{display: 'inline', fontSize: '16px', marginLeft: '4px'}}>Balkanski Hleb</h1></Link>.
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
                    <em>objavljeno</em> {frontmatter.date}
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
