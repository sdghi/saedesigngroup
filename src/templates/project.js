import React, { useEffect } from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import RelatedProjects from "../components/projects/relatedProjects"
import { useAppContext } from "../provider"
import ProjectHero from '../components/projects/projectHero'
// SLICES
import TextSection from "../slices/textSection"
import Testimonial from "../slices/testimonial"
import LargeImage from "../slices/largeImage"
import ImageCaption from "../slices/imageCaption"
import ImageGallery from "../slices/imageGallery"
import StaggeredImages from "../slices/staggeredImages"
import LargeGifVideo from '../slices/largeGifVideo'
import VideoCaption from '../slices/videoCaption'
import { AnimatePresence } from "framer-motion"

const ProjectSlices = ({ slices, theme }) => {
  return slices.map((slice, index) => {

    const res = (() => {
      switch (slice.slice_type) {
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
        case "2_3_video___caption":
          return <VideoCaption key={index} slice={slice} theme={theme} />
        case "large_gif_video":
          return <LargeGifVideo key={index} slice={slice} theme={theme} />
        default:
          return
      }
    })()
    return res
  })
}

const Project = ({ project, theme, location }) => {
  const { hero_image } = project.data;

  const { setCursorElement } = useAppContext()

  return (
    <div>
      <ProjectHero heroImage={hero_image} setCursorElement={setCursorElement} />

      {project.data.body && <ProjectSlices slices={project.data.body} theme={theme} />}
    </div>
  )
}

export default props => {
  const doc = props.data.allPrismicProjectTemplate.edges.slice(0, 1).pop()
  const title = doc.node.data.project_name.text
  const { next, previous, doubleNext } = props.pageContext

  if (!doc) return null

  return (
    <>
      <SEO title={title} />
      <Project project={doc.node} theme={doc.node.data.theme} />
      <RelatedProjects
        next={next}
        previous={previous}
        doubleNext={doubleNext}
      />
    </>
  )
}

export const query = graphql`
  query($uid: String) {
    allPrismicProjectTemplate(filter: { uid: { eq: $uid } }) {
      edges {
        node {
          data {
            theme
            project_name {
              text
            }
            hero_image {
            alt
            localFile {
              childImageSharp {
                fluid(quality: 90, maxWidth: 1800) {
                  src
                }
              }
            }
          }
            body {
              ... on PrismicProjectTemplateBody23ImageCaption {
                slice_type
                primary {
                  layout
                  image {
                    alt
                    url
                    localFile {
                      childImageSharp {
                        fluid(quality: 90, maxWidth: 1800) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                    }
                  }
                  caption {
                    text
                    html
                  }
                }
              }
              ... on PrismicProjectTemplateBody23VideoCaption{
              slice_type
              primary{
                layout
                link{
                  url
                }
                caption{
                  text
                  html
                }
              }
            }
            ... on PrismicProjectTemplateBodyLargeGifVideo{
              slice_type
              primary{
                link{
                  url
                }
                full_width
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
                          ...GatsbyImageSharpFluid_withWebp
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
                    url
                    alt
                    localFile {
                      childImageSharp {
                        fluid(quality: 90, maxWidth: 1800) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                    }
                  }
                }
              }
              ... on PrismicProjectTemplateBodyStaggeredImages {
                slice_type
                primary {
                  caption {
                    text
                    html
                  }
                  reverse_images
                  image_1 {
                    alt
                    localFile {
                      childImageSharp {
                        fluid(quality: 90, maxWidth: 1800) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                    }
                  }
                  image_2 {
                    localFile {
                      childImageSharp {
                        fluid(quality: 90, maxWidth: 1800) {
                          ...GatsbyImageSharpFluid_withWebp
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
                    html
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
