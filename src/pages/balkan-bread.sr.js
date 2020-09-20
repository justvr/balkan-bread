import React from 'react'
import Link from 'gatsby-link'
import Layout from "../layouts/en"

const SecondPage = (props) => (
  <Layout location={props.location}>
    <div>
      <h1>Balkanski hleb</h1>
      <p>Ovde cu pokusati da objasnim zasto je ovaj blog nastao</p>
      <Link to="/en/">Početna</Link>
    </div>
  </Layout>
)

export default SecondPage