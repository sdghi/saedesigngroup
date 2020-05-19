import React, { useState, useContext } from "react"

export const myContext = React.createContext()

const Provider = props => {
  // Sets the custom cursor to be used
  const [cursorElement, setCursorElement] = useState({ initial: "initial" })
  // THe value of the scrollTo if needed
  const [scrollWindowHeight, setScrollWindowHeight] = useState(0)
  // X and Y position for the custom cursor
  const [xValue, setXValue] = useState(0)
  const [yValue, setYValue] = useState(0)
  // For the hero text filter items
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [totalFilterImages, setTotalFilterImages] = useState(0)
  // For Hero 3d models
  const [model, setModel] = useState();

  const [pageTheme, setPageTheme] = useState("Light");


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
        pageTheme,
        setPageTheme,
        model,
        setModel
      }}
    >
      {props.children}
    </myContext.Provider>
  )
}

export const useAppContext = () => { return useContext(myContext); }

export default ({ element }) => <Provider>{element}</Provider>

