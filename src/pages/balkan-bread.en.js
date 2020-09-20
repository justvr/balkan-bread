import React from 'react'
import Link from 'gatsby-link'
import Layout from "../layouts/en"

const SecondPage = (props) => (
  <Layout location={props.location}>
    <div>
      <h1>Balkan bread</h1>
      <p>Welcome</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default SecondPage