import React, { useState, useRef, useEffect } from "react"
import { Cursor } from "../../elements"
import styled from "styled-components"
import { black, white, pink } from "../../variables"

const RelatedProjectCursor = ({ xValue, yValue, cursorContent }) => {
  const relatedRef = useRef(null)
  const [measurements, setMeasurements] = useState({ height: 0, width: 0 })

  useEffect(() => {
    const { clientHeight, clientWidth } = relatedRef.current

    setMeasurements({
      height: -clientHeight / 2,
      width: -clientWidth / 2,
    })
  }, [cursorContent])

  return (
    <RelatedProjects
      top={yValue}
      left={xValue}
      height={measurements.height + "px"}
      width={measurements.width + "px"}
      ref={relatedRef}
      zIndex="999999"
      cursorContent={cursorContent}
    >
      <h4>View</h4>
      <p>{cursorContent}</p>
    </RelatedProjects>
  )
}

export default RelatedProjectCursor

const RelatedProjects = styled(Cursor)`
  font-weight: 700;
  left: ${({ width }) => width};
  top: ${({ height }) => height};
  margin: 0;
  padding: 20px;
  border-radius: 20px;
  max-width: 300px;
  text-align: center;
  line-height: 1;
  color: ${white};
  background-color: ${pink};
  border: 2px solid ${black};

  p {
    margin: 0;
  }

  h4 {
    margin-top: 0;
    margin-bottom: 5px;
  }

  p {
    font-size: 24px;
  }
`
