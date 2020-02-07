import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Link from "gatsby-plugin-transition-link"
import SEO from "../components/seo"

const ProjectSlices = ({ slices, theme }) => {
  return slices.map((slice, index) => {
    const res = (() => {
      switch (slice.slice_type) {
        case "text_section":
          return "text section"
        case "testimonial":
          return "testimonial"
        case "large_image":
          return "large image"
        case "2_3_image__caption":
          return "2/3 image"
        case "image_gallery":
          return "image gallery"
        case "staggered_images":
          return "staggered images"
        default:
          return
      }
    })()
    return res
  })
}

const Project = ({ project, theme }) => {
  return (
    <div>
      <ProjectSlices slices={project.data.body} theme={theme} />
    </div>
  )
}

export default props => {
  const doc = props.data.allPrismicProjectTemplate.edges.slice(0, 1).pop()
  const title = doc.node.data.project_name.text

  const { next, previous } = props.pageContext
  const { project_name: nextName } = next.data
  const { project_name: prevName } = previous.data
  const {
    src: prevImage,
  } = previous.data.featured_image.localFile.childImageSharp.fixed
  const {
    src: nextImage,
  } = next.data.featured_image.localFile.childImageSharp.fixed

  if (!doc) return null

  return (
    <Layout>
      <SEO title={title} />
      <Project project={doc.node} theme={doc.node.data.theme} />
      <div>
        <h3>previous</h3>
        <Link to={`/${previous.uid}`}>
          <img src={prevImage} alt={prevName.text} />
          <p>{prevName.text}</p>
        </Link>
        <h3>next</h3>

        <Link to={`/${next.uid}`}>
          <img src={nextImage} alt={nextName.text} />
          <p>{nextName.text}</p>
        </Link>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($uid: String) {
    allPrismicProjectTemplate(filter: { uid: { eq: $uid } }) {
      edges {
        node {
          data {
            project_name {
              text
            }
            body {
              ... on PrismicProjectTemplateBody23ImageCaption {
                slice_type
                primary {
                  image {
                    alt
                    localFile {
                      childImageSharp {
                        fixed {
                          srcSet
                        }
                      }
                    }
                  }
                  caption {
                    text
                  }
                }
              }
              ... on PrismicProjectTemplateBodyImageGallery {
                slice_type
                items {
                  gallery_image {
                    alt
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
              ... on PrismicProjectTemplateBodyLargeImage {
                slice_type
                primary {
                  image {
                    alt
                    localFile {
                      childImageSharp {
                        fixed {
                          srcSet
                        }
                      }
                    }
                  }
                  caption {
                    text
                  }
                }
              }
              ... on PrismicProjectTemplateBodyStaggeredImages {
                slice_type
                primary {
                  caption {
                    text
                  }
                  image_1 {
                    alt
                    localFile {
                      childImageSharp {
                        fixed {
                          srcSet
                        }
                      }
                    }
                  }
                  image_2 {
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
              ... on PrismicProjectTemplateBodyTestimonial {
                slice_type
                primary {
                  text {
                    text
                  }
                }
              }
              ... on PrismicProjectTemplateBodyTextSection {
                slice_type
                primary {
                  heading {
                    text
                  }
                  text {
                    text
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
