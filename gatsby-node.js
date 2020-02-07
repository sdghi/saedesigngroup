const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicProjectTemplate {
        edges {
          node {
            id
            uid
            data {
              project_name {
                text
              }
              featured_image {
                localFile {
                  childImageSharp {
                    fixed {
                      srcSet
                    }
                  }
                }
              }
            }
          }
          next {
            uid
            id
            data {
              project_name {
                text
              }
              featured_image {
                localFile {
                  childImageSharp {
                    fixed {
                      srcSet
                    }
                  }
                }
              }
            }
          }
          previous {
            uid
            id
            data {
              project_name {
                text
              }
              featured_image {
                localFile {
                  childImageSharp {
                    fixed {
                      srcSet
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  pages.data.allPrismicProjectTemplate.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: path.resolve("./src/templates/project.js"),
      context: {
        id: edge.node.id,
        previous:
          pages.data.allPrismicProjectTemplate.edges[
            pages.data.allPrismicProjectTemplate.edges.length - 1
          ].node,
        next: edge.next,
      },
    })
  })
}

// edge.previous
// ? edge.previous
// :
