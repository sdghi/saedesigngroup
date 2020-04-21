import React from "react"
import styled from 'styled-components'
import { Container, ImageContainer } from "../elements"
import ScrollWrapper from '../components/wrappers/scrollWrapper'

const LargeImage = ({ slice }) => {
  const { image, full_width, image_is_gif } = slice.primary

  return (
    <ScrollWrapper>
      <Container padding={full_width === 'true' && "0"}>
        {!image_is_gif &&
          <ImageContainer
            fluid={image.localFile.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt={image.alt}
            // Togggle if the full_width is checked in the cms 
            maxWidth={full_width === 'true' && '100%'}
            height={full_width === 'true' && "100vh"}
            heightMd={full_width === 'true' && "100vh"}

          />
        }
        {image_is_gif &&
          <GifImage>
            <img fullWidth={full_width} src={image.url} alt={image.alt} />
          </GifImage>
        }


      </Container>
    </ScrollWrapper>
  )
}

export default LargeImage


const GifImage = styled.div`
  height: ${({ fullWidth }) => fullWidth ? '100vh' : '100%'};
  max-width: ${({ fullWidth }) => fullWidth && '100%'};
  margin: 0 auto;

  img{
    object-fit: cover;
    width: 100%;  
  }
`;