import React, { useState } from "react"

export const myContext = React.createContext()

const Provider = props => {
  const [cursorElement, setCursorElement] = useState("initial")

  return (
    <myContext.Provider
      value={{
        cursorElement,
        setCursorElement,
      }}
    >
      {props.children}
    </myContext.Provider>
  )
}

export default ({ element }) => <Provider>{element}</Provider>
