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
                    fluid {
                      src
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
                    fluid {
                      src
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
                    fluid {
                      src
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
        previous: edge.previous
          ? edge.previous
          : pages.data.allPrismicProjectTemplate.edges[
              pages.data.allPrismicProjectTemplate.edges.length - 1
            ].node,
        next: edge.next
          ? edge.next
          : pages.data.allPrismicProjectTemplate.edges[0].node,
      },
    })
  })
}
