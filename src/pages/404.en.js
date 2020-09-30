import React from 'react'
import Link from 'gatsby-link'
import Layout from '../layouts/en'
import SEO from '../components/seo'
import Image from '../service/image';

const NotFoundPage = (props) => (
  <Layout location={props.location}>
    <SEO title="404: Not found" />
    <div>
      <h1>Only <Image src="balkan-bread-404.png" w="250px" h="142px" /> breadcrumbs left</h1>
      <p>Follow <Link to="/en">breadcrumbs</Link> to find a good bread </p>
    </div>
  </Layout>
)

export default NotFoundPage