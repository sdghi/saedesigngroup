import React, { useEffect, useContext } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import RelatedProjects from "../components/relatedProjects"
import { myContext } from "../provider"
// SLICES
import FullWidthImage from "../slices/fullWidthImage"
import TextSection from "../slices/textSection"
import Testimonial from "../slices/testimonial"
import LargeImage from "../slices/largeImage"
import ImageCaption from "../slices/imageCaption"
import ImageGallery from "../slices/imageGallery"
import StaggeredImages from "../slices/staggeredImages"

const ProjectSlices = ({ slices, theme }) => {
  return slices.map((slice, index) => {
    const res = (() => {
      switch (slice.slice_type) {
        case "full_width_image":
          return <FullWidthImage key={index} slice={slice} theme={theme} />
        case "text_section":
          return <TextSection key={index} slice={slice} theme={theme} />
        case "testimonial":
          return <Testimonial key={index} slice={slice} theme={theme} />
        case "large_image":
          return <LargeImage key={index} slice={slice} theme={theme} />
        case "2_3_image___caption":
          return <ImageCaption key={index} slice={slice} theme={theme} />
        case "image_gallery":
          return <ImageGallery key={index} slice={slice} theme={theme} />
        case "staggered_images":
          return <StaggeredImages key={index} slice={slice} theme={theme} />
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

  const { next, previous, doubleNext } = props.pageContext

  if (!doc) return null

  const { setCursorElement } = useContext(myContext)

  useEffect(() => {
    setCursorElement({ initial: "initial" })
  }, [setCursorElement])

  return (
    <Layout>
      <SEO title={title} />
      <Project project={doc.node} theme={doc.node.data.theme} />
      <RelatedProjects
        next={next}
        previous={previous}
        doubleNext={doubleNext}
      />
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
            hero_image {
            alt
            localFile {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
            body {
              ... on PrismicProjectTemplateBody23ImageCaption {
                slice_type
                primary {
                  image {
                    alt
                    localFile {
                      childImageSharp {
                        fluid(quality: 90, maxWidth: 1800) {
                          ...GatsbyImageSharpFluid
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
                        fluid(quality: 90, maxWidth: 1800) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
              ... on PrismicProjectTemplateBodyLargeImage {
                slice_type
                primary {
                  full_width
                  image {
                    alt
                    localFile {
                      childImageSharp {
                        fluid(quality: 90, maxWidth: 1800) {
                          ...GatsbyImageSharpFluid
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
                        fluid(quality: 90, maxWidth: 1800) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                  image_2 {
                    localFile {
                      childImageSharp {
                        fluid(quality: 90, maxWidth: 1800) {
                          ...GatsbyImageSharpFluid
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
                  author {
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
                  bottom_sub_text {
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
