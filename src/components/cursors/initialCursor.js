import React from "react"
import { Cursor } from "../../elements"
import styled from "styled-components"

const InitialCursor = ({ xValue, yValue }) => {
  return (
    <Initial
      top={yValue}
      left={xValue}
      height="35"
      width="35"
      posTop="0"
      posLeft="0"
      zIndex="99999999999"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 178.06 221.7">
        <title>sdg-banana-default</title>
        <g className="cls-1">
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                className="cls-2"
                d="M112.27,195.75l4.37-10.35a7,7,0,0,0,.41-1.3c9.3-44,2.83-78.89-19.77-106.51C79.6,56,52,38.78,10.4,23.52a7,7,0,0,0,.7-8.7L9.65,12.66A141.07,141.07,0,0,1,50.87,6.51c41.72,0,81.24,18.78,100.68,47.84,16.52,24.68,20.77,51.7,12.66,80.29a134.15,134.15,0,0,1-25.58,47.86,62.53,62.53,0,0,0-6.24,8.73l-5,8.51Z"
              />
              <path d="M50.87,10.51c40.42,0,78.64,18.08,97.36,46.06,15.83,23.67,19.91,49.56,12.13,77a130.11,130.11,0,0,1-24.77,46.36,65.79,65.79,0,0,0-6.65,9.29l-3.49,5.9-7.7-2,2.57-6.1a11.13,11.13,0,0,0,.64-2c4.89-23.17,5.45-44.34,1.67-62.92a107,107,0,0,0-22.26-46.95C82.83,53.62,55.92,36.47,16,21.33a2.86,2.86,0,0,0,.07-.28,11,11,0,0,0-.37-6,137.39,137.39,0,0,1,35.2-4.59m0-8A145.23,145.23,0,0,0,7.21,9.23,3,3,0,0,0,5.6,13.8l2.17,3.25a3,3,0,0,1-.91,4.24,3,3,0,0,0,.56,5.4c71,25.76,125.14,64.54,105.71,156.59a3.13,3.13,0,0,1-.18.57l-4.8,11.38a3,3,0,0,0,2,4.09l16.89,4.48a3.32,3.32,0,0,0,.77.1,3,3,0,0,0,2.6-1.49l5.41-9.14a58.06,58.06,0,0,1,5.84-8.17c12.45-14.58,53.5-72.74,13.21-133C135.12,22.59,95,2.51,50.87,2.51Z" />
              <path d="M122.59,200.24l-7.15-3.61c15.47-30.6,22.26-58.2,20.2-82a83.56,83.56,0,0,0-23.39-51.7C77,26,17.14,20.61,11.2,23.27L7.83,16c6.12-2.85,25.92-.84,45.06,4.56,18.54,5.24,44.81,15.78,64.66,36.29a91.52,91.52,0,0,1,26,56.62C145.88,138.92,138.82,168.11,122.59,200.24Z" />
              <g className="cls-3">
                <path
                  className="cls-4"
                  d="M163.24,51c-24-39.48-82-62.83-138.19-44.88a3.1,3.1,0,0,0-1.58,4.55l2,3.28a3.13,3.13,0,0,1-.92,4.23h0c-2,1.3-1.79,4.61.45,5.4,70.44,24.95,120.92,64.4,97.13,158a3.65,3.65,0,0,1-.18.56l-4.68,11.32a3.07,3.07,0,0,0,1.83,4.12l12.65,4.7a2.76,2.76,0,0,0,3.19-1.34l5.22-9.07a58.88,58.88,0,0,1,5.61-8.09C157.68,169.39,200.26,111.79,163.24,51Z"
                />
              </g>
              <path d="M131.75,200.16l-3.66,12.18a11.79,11.79,0,0,1-7.82,7.87l-3.16,1a11.78,11.78,0,0,1-13-4.29h0a11.8,11.8,0,0,1-.89-12.51l4.89-9.15Z" />
              <path d="M7.42,26.69h0A12.26,12.26,0,0,1,1.29,22h0A7.3,7.3,0,0,1,2,12.82l.36-.38A12.25,12.25,0,0,1,7.15,9.37l2.36-.84,1.34,6.6L9.51,23.55Z" />
            </g>
          </g>
        </g>
      </svg>
    </Initial>
  )
}

export default InitialCursor

const Initial = styled(Cursor)`
  .cls-1 {
    isolation: isolate;
  }
  .cls-2 {
    fill: #fff;
  }
  .cls-3 {
    mix-blend-mode: multiply;
  }
  .cls-4 {
    fill: #edd375;
  }
`
