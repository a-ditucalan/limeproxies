const path = require("path")

const slugify = text => {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

const createTagPages = (createPage, posts) => {
  const singleTagTemplate = path.resolve(`src/templates/singleTagTemplate.js`)

  const postsByTag = {}
  postsByTag['Others'] = []

  posts.forEach(({node}) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!postsByTag[tag]) {
          postsByTag[tag] = []
        }

        postsByTag[tag].push(node)
      })
    } else {
      postsByTag['Others'].push(node)
    }
  })

  const tags = Object.keys(postsByTag)

  tags.forEach(tagName => {
    const posts = postsByTag[tagName]

    createPage({
      path: `/tags/${slugify(tagName)}`,
      component: singleTagTemplate,
      context: {
        posts,
        tagName
      }
    })
  })
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)
  const useCaseTemplate = path.resolve(`src/templates/useCaseTemplate.js`)
  const readingPageTemplate = path.resolve(`src/templates/readingPageTemplate.js`)
  const plainPageTemplate = path.resolve(`src/templates/plainPageTemplate.js`)
  const locationsTemplate = path.resolve(`src/templates/locationsTemplate.js`)
  const indexLearningTemplate = path.resolve(`src/templates/indexLearningTemplate.js`)
  const singleLearningTemplate = path.resolve(`src/templates/singleLearningTemplate.js`)
  const singleLearningVideosTemplate = path.resolve(`src/templates/singleLearningVideosTemplate.js`)
  const whyLimeproxiesTemplate = path.resolve(`src/templates/whyLimeproxiesTemplate.js`)

  return graphql(`
    {
      blog: allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___date] }
        limit: 1000
        filter: { fileAbsolutePath: {regex : "\/blog/"} },
      ) {
        edges {
          node {
            html
            frontmatter {
              title
              path
              author
              date
              excerpt
              thumbnail
              tags
              featured
              featurednail
            }
            timeToRead
          }
        }
      },
      usecases: allMarkdownRemark(
        filter: { fileAbsolutePath: {regex : "\/usecases/"} },
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      },
      whylimeproxies: allMarkdownRemark(
        filter: { fileAbsolutePath: {regex : "\/whylimeproxies/"} },
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      },
      readingpages: allMarkdownRemark(
        filter: { fileAbsolutePath: {regex : "\/readingpages/"} },
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      },
      plainPage: allMarkdownRemark(
        filter: { fileAbsolutePath: {regex : "\/plainpage/"} },
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      },
      locations: allMarkdownRemark(
        filter: { fileAbsolutePath: {regex : "\/locations/"} },
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      },
      learning: allMarkdownRemark(
        filter: { 
          fileAbsolutePath: {regex : "\/learning/"},
          frontmatter: { hiddentype: {in: ["learningIndex"]} }
        },
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      },
      articles: allMarkdownRemark(
        filter: { 
          fileAbsolutePath: {regex : "\/articles/"} 
          frontmatter: { hiddentype: {in: ["article"]} }
        },
      ) {
        edges {
          node {
            frontmatter {
              path
              title
            }
          }
        }
      }, 
      resources: allMarkdownRemark(
        filter: { 
          fileAbsolutePath: {regex : "\/resources/"},
          frontmatter: { hiddentype: {in: ["resource"]} }
        },
      ) {
        edges {
          node {
            frontmatter {
              path
              title
            }
          }
        }
      },
      videos: allMarkdownRemark(
        filter: { 
          fileAbsolutePath: {regex : "\/videos/"},
          frontmatter: { hiddentype: {in: ["video"]} }
        },
      ) {
        edges {
          node {
            frontmatter {
              path
              title
            }
          }
        }
      },
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    createTagPages(createPage, result.data.blog.edges)
   
    const posts = result.data.blog.edges
    posts.forEach(({ node }, index) => {
      createPage({
        path: `/blog${node.frontmatter.path}`,
        component: blogPostTemplate,
        context: {
          pathSlug: node.frontmatter.path,
          authorName: node.frontmatter.author,
          prev: index === 0 ? null : posts[index - 1].node,
          next: index === (posts.length - 1) ? null : posts[index + 1].node
        },
      })
    })

    result.data.learning.edges.forEach(({ node }) => {
      createPage({
        path: `/resources${node.frontmatter.path}`,
        component: indexLearningTemplate,
        context: {
          pathSlug: node.frontmatter.path,
        },
      })
    })

    const bestPractices = result.data.articles.edges
    bestPractices.forEach(({ node }, index) => {
      createPage({
        path: `/best-practices${node.frontmatter.path}`,
        component: singleLearningTemplate,
        context: {
          pathSlug: node.frontmatter.path,
          prev: index === 0 ? null : bestPractices[index - 1].node,
          next: index === (bestPractices.length - 1) ? null : bestPractices[index + 1].node,
          template: 'best-practices'
        },
      })
    })

    const resources = result.data.resources.edges
    resources.forEach(({ node }, index) => {
      createPage({
        path: `/tutorials${node.frontmatter.path}`,
        component: singleLearningTemplate,
        context: {
          pathSlug: node.frontmatter.path,
          prev: index === 0 ? null : resources[index - 1].node,
          next: index === (resources.length - 1) ? null : resources[index + 1].node,
          template: 'tutorials'
        },
      })
    })

    const videos = result.data.videos.edges
    videos.forEach(({ node }, index) => {
      createPage({
        path: `/videos${node.frontmatter.path}`,
        component: singleLearningVideosTemplate,
        context: {
          pathSlug: node.frontmatter.path,
          prev: index === 0 ? null : videos[index - 1].node,
          next: index === (videos.length - 1) ? null : videos[index + 1].node,
          template: 'videos'
        },
      })
    })

    result.data.usecases.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: useCaseTemplate,
        context: {}, // additional data can be passed via context
      })
    })

     
    result.data.whylimeproxies.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: whyLimeproxiesTemplate,
        context: {}, // additional data can be passed via context
      })
    })


    result.data.readingpages.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: readingPageTemplate,
        context: {}, // additional data can be passed via context
      })
    })

    result.data.plainPage.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: plainPageTemplate,
        context: {}, // additional data can be passed via context
      })
    })

    result.data.locations.edges.forEach(({ node }) => {
      createPage({
        path: `/private-proxies${node.frontmatter.path}`,
        component: locationsTemplate,
        context: {
          pathSlug: node.frontmatter.path,
        }, // additional data can be passed via context
      })
    })
  })
}