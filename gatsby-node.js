const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
  {
    allPrismicProjectTemplate(filter: {uid: {ne: "logo-selection"}}) {
      edges {
        node {
          id
          uid
          data {
            project_name {
              text
            }
            featured_image_video {
              url
            }
            featured_image {
              url
              alt
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
            featured_image_video {
              url
            }
            featured_image {
              url
              alt
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
            featured_image_video {
              url
            }
            featured_image {
              url
              alt
            }
          }
        }
      }
    }
  }
  `)

  pages.data.allPrismicProjectTemplate.edges.forEach((edge, i) => {
    createPage({
      path: `/${edge.node.uid}`,
      component: path.resolve("./src/templates/project.js"),
      context: {
        uid: edge.node.uid,
        previous: edge.previous
          ? edge.previous
          : pages.data.allPrismicProjectTemplate.edges[
            pages.data.allPrismicProjectTemplate.edges.length - 1
          ].node,
        next: edge.next
          ? edge.next
          : pages.data.allPrismicProjectTemplate.edges[0].node,
        doubleNext:
          i + 2 > pages.data.allPrismicProjectTemplate.edges.length - 1
            ? pages.data.allPrismicProjectTemplate.edges[
              i - (pages.data.allPrismicProjectTemplate.edges.length - 1) + 2
            ].node
            : pages.data.allPrismicProjectTemplate.edges[i + 2].node,
      },
    })
  })
}
