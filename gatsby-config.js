module.exports = {
  siteMetadata: {
    title: `Christine Ibbitson | Designer | Frontend Developer`,
    description: `Portfolio of Christine Ibbitson, Senior Designer and Frontend Developer based in Vancouver, Canada`,
    siteUrl: `https://www.christineibbitson.com`,
    author: `@christinei`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `casestudy`,
        path: `${__dirname}/src/casestudy/`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            option: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Christine Ibbitson`,
        short_name: `Christine`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#333333`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `Scope+One\:400`, // font-family: 'Aleo', serif;
          `Aleo\:300,400,700`, // font-family: 'Aleo', serif;
          `Muli\:200,300,400,500,600,700,800`, // font-family: 'Muli', sans-serif;
          `Source+Code+Pro\:200,300,400,500,600,700`, // font-family: 'Source Code Pro', monospace;
          `Roboto+Slab\:100,200,300,400,500,600,700,800`, // font-family: 'Roboto Slab', serif;
          `Roboto+Mono\:100,200,300,400,500,700`, // font-family: 'Roboto Mono', monospace;
          `Merriweather+Sans\:300,400,700`, // font-family: 'Merriweather Sans', sans-serif;
          `Merriweather\:300,400,700`, // font-family: 'Merriweather', serif;
          `Raleway\:200,300,400,500,600,700`, // font-family: 'Raleway', sans-serif;
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-offline`,
  ],
}
