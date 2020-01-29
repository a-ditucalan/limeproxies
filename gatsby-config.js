module.exports = {
  siteMetadata: {
    siteUrl: `https://purple-rain.netlify.com/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: 'markdown-content',
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [require('autoprefixer')()]
      }
    },
    `gatsby-plugin-react-helmet`, {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: ['/tags/*', `/edges.node.path`,
                  '/tags',
                  '/thankyou',
                  '/sample'
                ],
        sitemapSize: 5000,
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage {
            edges {
              node {
                path
              }
            }
          }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
            url: site.siteMetadata.siteUrl + edge.node.path,
            changefreq: `daily`,
            priority: 0.7,
          }
        }),
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://purple-rain.netlify.com',
        sitemap: 'https://purple-rain.netlify.com/sitemap.xml',
        policy: [{ userAgent: '*', disallow: ['/blog/page/', '/blog/tag/', '/tag/'] }]
      }
    }
  ],
};