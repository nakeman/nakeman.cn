/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `刘建文 ｜Nakeman.CN`,
    description: ``,
    author: `Kemin lau`,
    siteUrl: `http://nakeman.cn/`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-sharp`,
    "gatsby-plugin-netlify",
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogposts`,
        path: `${__dirname}/content/`,
      },
    },
  ],
}
