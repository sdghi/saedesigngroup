import React, { useState } from "react"

export const myContext = React.createContext()

const Provider = props => {
  const [cursorElement, setCursorElement] = useState({ initial: "initial" })
  const [scrollWindowHeight, setScrollWindowHeight] = useState(0)

  return (
    <myContext.Provider
      value={{
        cursorElement,
        setCursorElement,
        scrollWindowHeight,
        setScrollWindowHeight,
      }}
    >
      {props.children}
    </myContext.Provider>
  )
}

export default ({ element }) => <Provider>{element}</Provider>
