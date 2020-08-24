import { useState, useLayoutEffect } from "react"

export const useMousePosition = () => {
  const [coordinates, setCoordinates] = useState([0, 0])

  useLayoutEffect(() => {
    window.addEventListener("mousemove", e => {
      setCoordinates([e.clientX, e.clientY])
    })

    return () =>
      window.removeEventListener("mousemove", e => {
        setCoordinates([e.clientX, e.clientY])
      })
  }, [])

  return coordinates
}
