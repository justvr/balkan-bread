const languages = require('./src/data/languages');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `cultural differences between living in germany berlin and serbia`,
    description: `living in germany berlin compared to the life in serbia and balkan`,
    siteUrl: `https://www.balkanbread.com`,
    keywords: ['berlin', 'germany', 'balkan', 'everyday life'],
    author: `justvr`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.balkanbread.com',
        sitemap: 'https://www.balkanbread.com/sitemap.xml',
        policy: [{ userAgent: '*', disallow: '' }]
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Balkan Bread`,
        short_name: `Balkan Bread`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // @see https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: languages.defaultLangKey,
        langKeyForNull: 'any',
        markdownRemark: {
          postPage: 'src/templates/post.js',
          query: `
          {
            allMarkdownRemark {
              edges {
                node {
                  fields {
                    slug,
                    langKey
                  }
                }
              }
            }
          }
          `,
        },
        prefixDefault: false,
        useLangKeyLayout: true,
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/blog`,
        name: 'pages'
      }
    },
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        // useAutoGen: required 'true' to use autogen
        useAutoGen: true,
        // autoGenHomeLabel: optional 'Home' is default
        autoGenHomeLabel: `home`,
        // exlude: optional, include this array to overwrite paths you don't want to
        // generate breadcrumbs for.
        exclude: [`/404/`],
      }
    },
  ],
}
