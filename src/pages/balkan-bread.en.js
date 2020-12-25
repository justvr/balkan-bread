import React from 'react'
import Link from 'gatsby-link'
import Layout from '../layouts/index';
import SEO from '../components/seo'
import Image from '../service/image';

const BalkanBread = (props) => {
  return (
    <Layout
      location={props.location}
      i18nMessages='en'
    >
      <SEO
        description='explaining balkan bread'
        keywords='balkan bread'
        lang='en'
        ogType='website'
        title='About Balkan Bread'
      />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 860,
          padding: '1.45rem 1.0875rem',
          textAlign: 'center'
        }}
      >
        <h1 style={{color: 'rgb(188, 52, 37)'}}>Balkan bread</h1>
        <hr style={{display: 'inline-block', width: '150px'}} />
        <p>I recently moved from the Balkans, more specifically from Serbia. Infact, it wasn't recently. It was at the beginning of 2019. I chose to make the jump. There was no economic necessity forcing me to go.</p>
        <p>And life can be rocky. There are ups and downs. Some people are lucky enough to come across a meadow full of flowers and remain there. But some don't. Success or failure is not guaranteed.</p>
        <p>My path is not easy. Sometimes it’s a struggle. But I like to stay positive about any setbacks. And sometimes I come across a flower on a rock and I can't really complain. Most of the time I’m just getting by, enjoying the bread as I go.</p>
        <p>With this blog, I want to show my path and share the occasional shortcut for life in Germany in the hope that it will satisfy people’s curiosity and maybe even help someone.</p>
        <p>I spent hours researching life in Germany. And it didn't have to be that way. I wish I’d had a place where I could find information about life hacks, about the people, about the institutions, about the bureaucracy, about everyday products, about language, about ... life.</p>
        <p>I promise to write realistically about every aspect of life from my perspective. Who I am and what others have experienced and learned. New ideas and insights. Good and bad experiences.</p>
        <p>I will try to show off the Berlin culture that I know and to share the lifestyle that I am still now only just discovering.</p>
        <p>This also applies to food, and us Balkan people never eat a meal without bread.</p>
        <div>
          <Image src="balkan-bread-about.png" />
        </div>
        <Link to="/en">Go back to the homepage</Link>
      </div>
    </Layout>
  )}

export default BalkanBread
