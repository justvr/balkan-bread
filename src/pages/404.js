import React from 'react'
import Link from 'gatsby-link'
import Layout from '../layouts/index';
import SEO from '../components/seo'
import Image from '../service/image';

const NotFoundPage = (props) => (
  <Layout location={props.location}>
    <SEO title="404: Not found" />
    <div>
      <h1>Samo <Image src="balkan-bread-404.png" /> mrvica ostalo</h1>
      <p>Pratite <Link to="/">mrvice</Link> da pronađete dobar hleb...</p>
      <p><Link to="/en">You've lost the bakery</Link></p>
    </div>
  </Layout>
)

export default NotFoundPage
