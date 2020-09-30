import React from 'react'
import Link from 'gatsby-link'
import Layout from '../layouts/en'
import SEO from '../components/seo'
import Image from '../service/image';

const NotFoundPage = (props) => (
  <Layout location={props.location}>
    <SEO title="404: Not found" />
    <div>
      <h1>Samo <Image src="balkan-bread-404.png" w="250px" h="142px" /> mrvica ostalo</h1>
      <p>Pratite <Link to="/">mrvice</Link> da pronađete dobar hleb...</p>
      <p><Link to="/en">Go back to the homepage</Link></p>
    </div>
  </Layout>
)

export default NotFoundPage