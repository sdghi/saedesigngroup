import React from "react"
import { Container, Paragraph } from "../elements"
import { breakpointMedium, grey } from "../variables"
import styled from "styled-components"
import ScrollWrapper from '../components/wrappers/scrollWrapper'

const VideoCaption = ({ slice }) => {
    const { link, caption, layout } = slice.primary

    return (
        <ScrollWrapper>
            <TwoThirdContainer
                padding="0"
                className={layout === 'Image Right Caption Left' && 'image-right'}>
                <Video src={link.url} autoPlay muted loop playsInline />
                <Paragraph>{caption.text}</Paragraph>
            </TwoThirdContainer>
        </ScrollWrapper>
    )
}

export default VideoCaption

const Video = styled.video`
    height: 500px;
    width: 100%;
`;

const TwoThirdContainer = styled(Container)`

  ${Paragraph} {
    font-size: 12px;
    line-height: 18px;
    color: ${grey};
    text-align: center;
  }

  @media (min-width: ${breakpointMedium}) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 0;
    place-items: center;

    ${Paragraph} {
      max-width: 194px;
      font-size: 14px;
      line-height: 26px;
      text-align: left;
    }

    &.image-right{
      grid-template-columns: 1fr 2fr;
      grid-template-areas: "paragraph image";
      
      ${Paragraph}{
        grid-area: paragraph;
      }

      ${Video}{
        grid-area: image;
      }
    }
  }
`
