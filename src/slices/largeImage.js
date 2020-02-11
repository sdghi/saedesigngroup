import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import styled from "styled-components"

const LargeImage = ({ slice }) => {
  const { image, caption } = slice.primary

  return (
    <div>
      <ImageContainer
        fluid={image.localFile.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt={image.alt}
        stlye={{ width: "90vw", height: "500px" }}
      />

      {caption && <p>{caption.text}</p>}
    </div>
  )
}

export default LargeImage

const ImageContainer = styled(Img)`
  width: 100%;
  height: 500px;
`
