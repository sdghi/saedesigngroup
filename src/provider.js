import React, { useState } from "react"

export const myContext = React.createContext()

const Provider = props => {
  const [cursorElement, setCursorElement] = useState({ initial: "initial" })
  const [scrollWindowHeight, setScrollWindowHeight] = useState(0)
  const [xValue, setXValue] = useState(0)
  const [yValue, setYValue] = useState(0)
  // For the project title filter text elements
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [totalFilterImages, setTotalFilterImages] = useState(0)

  return (
    <myContext.Provider
      value={{
        cursorElement,
        setCursorElement,
        scrollWindowHeight,
        setScrollWindowHeight,
        yValue,
        setYValue,
        xValue,
        setXValue,
        currentImageIndex,
        setCurrentImageIndex,
        totalFilterImages,
        setTotalFilterImages,
      }}
    >
      {props.children}
    </myContext.Provider>
  )
}

export default ({ element }) => <Provider>{element}</Provider>
